// ============================================================
// SCRAP RATES — auto-generated from rates-base.json
//
// DO NOT edit numbers here directly.
// To manually override: edit rates-base.json instead.
// Automation: scripts/fetch-rates.mjs updates rates-base.json
// daily at 8 AM IST via GitHub Actions → triggers Netlify/Vercel deploy.
// ============================================================
import data from './rates-base.json'

const { metals: m, plastics: p, paper: pa } = data

// Symmetric range: ₹(mid-spread) – ₹(mid+spread)
const rng = (mid, spread) => `₹${mid - spread}–${mid + spread}`
// Ticker approx display
const approx = (mid) => `~₹${mid}/kg`

export const LAST_UPDATED = data.lastUpdated

// Scrolling price ticker in header
export const TICKER_RATES = [
  { name: 'Copper',    price: approx(m.copper)     },
  { name: 'Iron',      price: approx(m.iron)       },
  { name: 'Aluminium', price: approx(m.aluminium)  },
  { name: 'Brass',     price: approx(m.brass)      },
  { name: 'Paper',     price: approx(pa.cardboard) },
  { name: 'Plastic',   price: approx(p.hdpe)       },
  { name: 'Lead',      price: approx(m.lead)       },
]

// Full rate tables on Rates page
export const METAL_RATES = [
  { name: 'Copper (Heavy)',  sub: 'Wire, Pipes, Clean Scrap',    price: rng(m.copper, 20),          icon: 'settings_b_roll' },
  { name: 'Iron / MS Scrap', sub: 'TMT, Structural, Plates',     price: rng(m.iron, 3),             icon: 'architecture'    },
  { name: 'Cast Iron',       sub: 'Pans, Weights, Engine Parts', price: rng(m.castIron, 3),         icon: 'hardware'        },
  { name: 'Stainless Steel', sub: '304 Grade, Utensils',         price: rng(m.stainlessSteel, 10),  icon: 'kitchen'         },
  { name: 'Aluminium',       sub: 'Castings, Sheets, Extrusion', price: rng(m.aluminium, 12),       icon: 'settings_b_roll' },
  { name: 'Brass',           sub: 'Fittings, Taps, Utensils',   price: rng(m.brass, 25),           icon: 'build'           },
  { name: 'Lead',            sub: 'Battery Scrap, Plates',       price: rng(m.lead, 13),            icon: 'battery_0_bar'   },
]

export const PLASTIC_RATES = [
  { name: 'PET Bottles',   sub: 'Clean Mineral Water Bottles',  price: rng(p.pet, 2),    icon: 'liquor'    },
  { name: 'HDPE (Hard)',   sub: 'Milk Jars, Opaque Containers', price: rng(p.hdpe, 5),   icon: 'sanitizer' },
  { name: 'LDPE (Soft)',   sub: 'Carry Bags, Liners',           price: rng(p.ldpe, 3),   icon: 'liquor'    },
  { name: 'Mixed Plastic', sub: 'Domestic Grade, Unsorted',     price: rng(p.mixed, 2),  icon: 'sanitizer' },
]

export const PAPER_RATES = [
  { name: 'Cardboard (OCC)',    sub: 'Corrugated Boxes, Clean',  price: rng(pa.cardboard, 2),   icon: 'inventory_2'  },
  { name: 'White Office Paper', sub: 'Shredded or Loose Sheets', price: rng(pa.officePaper, 2), icon: 'description'  },
  { name: 'Newspapers',         sub: 'Clean Bundles',            price: rng(pa.newspaper, 2),   icon: 'newspaper'    },
  { name: 'Mixed Magazine',     sub: 'Glossy Books & Journals',  price: rng(pa.magazine, 2),    icon: 'auto_stories' },
]

// Compact ticker for MaterialsPage header — derived to avoid duplication
const _iconMap  = { Iron: 'iron', Copper: 'detector_status', Paper: 'newspaper', Plastic: 'eco' }
const _colorMap = { Iron: 'text-amber-600', Copper: 'text-orange-600', Paper: 'text-blue-400', Plastic: 'text-green-600' }
export const MATERIALS_TICKER = ['Iron', 'Copper', 'Paper', 'Plastic'].map((n) => {
  const r = TICKER_RATES.find((t) => t.name === n)
  return { name: `${n}: ${r.price}`, icon: _iconMap[n], color: _colorMap[n] }
})
