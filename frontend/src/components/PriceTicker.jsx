import { TICKER_RATES as rates } from '../data/rates'

export default function PriceTicker() {
  return (
    <>
      {/* Desktop Ticker */}
      <div className="hidden md:block bg-surface-container-lowest border-b border-outline-variant/15 py-2.5 relative z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-0">
          {/* Static label — outside the overflow-hidden so it never gets covered */}
          <span className="shrink-0 flex items-center gap-1.5 text-xs font-bold text-primary whitespace-nowrap pr-4 mr-4 border-r border-outline-variant/20">
            <span className="material-symbols-outlined text-sm leading-none">trending_up</span>
            Approx. Rates
          </span>
          {/* Scrolling area — overflow-hidden only here */}
          <div className="flex-1 overflow-hidden relative">
            {/* Fade mask on left edge so content doesn't hard-cut against the label */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface-container-lowest to-transparent z-10" />
            <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
              {rates.map((r) => (
                <span key={r.name} className="text-sm font-medium">
                  {r.name}: <span className="text-primary font-bold">{r.price}</span>
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {rates.map((r) => (
                <span key={`dup-${r.name}`} className="text-sm font-medium">
                  {r.name}: <span className="text-primary font-bold">{r.price}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Ticker */}
      <div className="md:hidden px-6 mb-8">
        <div className="bg-surface-container-lowest rounded-2xl p-1 flex items-center gap-2 overflow-hidden shadow-sm">
          <div className="shrink-0 bg-tertiary-container text-on-tertiary-container px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap">
            Approx. Rates
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar py-2 px-2 text-sm font-semibold">
            {rates.slice(0, 4).map((r) => (
              <span key={r.name} className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                {r.name}: {r.price}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
