#!/usr/bin/env node
/**
 * Daily scrap rate fetcher for Bharat Scrap
 * Runs via GitHub Actions at 8:00 AM IST every Monday–Saturday
 *
 * What it does:
 *   1. Scrapes MetalMandi.com for Copper, Aluminium, Iron scrap prices (Hyderabad region)
 *   2. Applies a regional discount for Kalaburagi (inland market, ~₹8/kg for non-ferrous)
 *   3. Updates frontend/src/data/rates-base.json with new midpoint values
 *   4. GitHub detects the file change → Netlify/Vercel auto-deploys the site
 *
 * Run manually: node scripts/fetch-rates.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const JSON_FILE = resolve(__dir, '../frontend/src/data/rates-base.json')

// Kalaburagi is an inland market — typically ₹8/kg below Hyderabad for non-ferrous
const NONFERROUS_DISCOUNT = 8

async function fetchHTML(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      Accept: 'text/html,application/xhtml+xml',
    },
    signal: AbortSignal.timeout(15000),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.text()
}

/**
 * Extract the most relevant price from a MetalMandi page.
 * Strategy: JSON-LD → city-specific text match → median of all prices in range.
 */
function extractPrice(html, min, max) {
  // 1. Try JSON-LD structured data (most reliable if present)
  const jsonLdBlocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  for (const m of jsonLdBlocks) {
    try {
      const obj = JSON.parse(m[1])
      const p = Number(obj?.offers?.price ?? obj?.price)
      if (p >= min && p <= max) return Math.round(p)
    } catch { /* skip malformed blocks */ }
  }

  // 2. City-specific price text (Hyderabad is the closest major market to Kalaburagi)
  for (const city of ['Hyderabad', 'Bengaluru', 'Bangalore', 'Pune', 'Chennai', 'Mumbai']) {
    const re = new RegExp(`${city}[^\\n]{0,200}?₹\\s*([\\d,]+)`, 'i')
    const match = html.match(re)
    if (match) {
      const p = parseInt(match[1].replace(/,/g, ''), 10)
      if (p >= min && p <= max) return p
    }
  }

  // 3. Fallback: collect all rupee amounts in the valid range, return median
  const prices = [...html.matchAll(/₹\s*([\d,]+)/g)]
    .map(m => parseInt(m[1].replace(/,/g, ''), 10))
    .filter(p => p >= min && p <= max)

  if (prices.length >= 3) {
    prices.sort((a, b) => a - b)
    return prices[Math.floor(prices.length / 2)]
  }
  return null
}

async function scrapeMaterial(name, slug, min, max) {
  const url = `https://www.metalmandi.com/price/${slug}/`
  try {
    const html = await fetchHTML(url)
    const price = extractPrice(html, min, max)
    if (price) {
      console.log(`  ${name}: ₹${price}/kg (MetalMandi, pre-adjustment)`)
    } else {
      console.warn(`  ${name}: price not found on page`)
    }
    return price
  } catch (e) {
    console.warn(`  ${name}: fetch failed — ${e.message}`)
    return null
  }
}

function todayIST() {
  // UTC+5:30
  const d = new Date(Date.now() + 5.5 * 3600 * 1000)
  return d.toISOString().split('T')[0]
}

async function main() {
  const date = todayIST()
  console.log(`\nBharat Scrap — rate fetch for ${date}`)
  console.log('─'.repeat(40))

  // Scrape all three in parallel
  const [iron, copper, aluminium] = await Promise.all([
    scrapeMaterial('Iron',      'iron-scrap-price-in-india',       15, 60),
    scrapeMaterial('Copper',    'copper-scrap-price-in-india',     400, 900),
    scrapeMaterial('Aluminium', 'aluminium-scrap-price-in-india',   80, 300),
  ])

  const data = JSON.parse(readFileSync(JSON_FILE, 'utf-8'))
  let changed = false

  // Iron: no regional discount — local re-rollers in Kalaburagi set iron rates close to regional
  if (iron !== null) {
    const prev = data.metals.iron
    if (Math.abs(iron - prev) >= 1) {
      console.log(`  iron: ${prev} → ${iron}`)
      data.metals.iron = iron
      changed = true
    }
  }

  // Copper: apply inland discount
  if (copper !== null) {
    const adjusted = copper - NONFERROUS_DISCOUNT
    const prev = data.metals.copper
    if (Math.abs(adjusted - prev) >= 3) {
      console.log(`  copper: ${prev} → ${adjusted} (raw ${copper} − ₹${NONFERROUS_DISCOUNT} regional)`)
      data.metals.copper = adjusted
      changed = true
    }
  }

  // Aluminium: apply inland discount
  if (aluminium !== null) {
    const adjusted = aluminium - NONFERROUS_DISCOUNT
    const prev = data.metals.aluminium
    if (Math.abs(adjusted - prev) >= 2) {
      console.log(`  aluminium: ${prev} → ${adjusted} (raw ${aluminium} − ₹${NONFERROUS_DISCOUNT} regional)`)
      data.metals.aluminium = adjusted
      changed = true
    }
  }

  data.lastUpdated = date

  writeFileSync(JSON_FILE, JSON.stringify(data, null, 2) + '\n', 'utf-8')

  console.log('')
  if (changed) {
    console.log('✅ Rates updated — site will redeploy automatically via Netlify/Vercel')
  } else {
    console.log('✅ Date updated. Rate values unchanged (market stable or scrape found no data).')
  }

  if (!iron && !copper && !aluminium) {
    console.warn('⚠️  No rates fetched from MetalMandi. Existing rates kept. Check the site manually.')
  }
}

main().catch(e => {
  console.error('Fatal error:', e.message)
  process.exit(1)
})
