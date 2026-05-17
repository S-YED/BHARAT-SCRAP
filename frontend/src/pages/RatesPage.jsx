import { METAL_RATES as metals, PLASTIC_RATES as plastics, PAPER_RATES as papers, LAST_UPDATED, TICKER_RATES } from '../data/rates'
import { useLang } from '../i18n/LanguageContext'

function RateRow({ item, isMobile }) {
  const { t } = useLang()
  if (isMobile) {
    return (
      <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-stone-600">{item.icon}</span>
          </div>
          <div>
            <h3 className="font-bold text-on-surface">{item.name}</h3>
            <p className="text-xs text-on-surface-variant">{item.sub}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-lg font-extrabold text-green-800">{item.price}</span>
          <span className="text-[10px] block font-bold text-on-surface-variant">{t('common.perKg')}</span>
        </div>
      </div>
    )
  }
  return (
    <div className="flex justify-between items-center bg-surface-container-lowest p-5 rounded-2xl">
      <div>
        <p className="font-bold text-on-surface">{item.name}</p>
        <p className="text-xs text-on-surface-variant">{item.sub}</p>
      </div>
      <div className="text-right">
        <p className="text-xl font-extrabold text-primary">{item.price}<span className="text-xs font-medium text-on-surface-variant ml-1">/kg</span></p>
      </div>
    </div>
  )
}

function CategorySection({ titleKey, icon, items, isMobile }) {
  const { t } = useLang()
  if (isMobile) {
    return (
      <div>
        <h2 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-2 mb-3">{t(titleKey)}</h2>
        <div className="space-y-2">
          {items.map((item) => <RateRow key={item.name} item={item} isMobile />)}
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 px-2">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        <h3 className="text-2xl font-bold font-headline">{t(titleKey)}</h3>
      </div>
      <div className="bg-surface-container-low rounded-3xl p-2">
        <div className="space-y-1">
          {items.map((item) => <RateRow key={item.name} item={item} />)}
        </div>
      </div>
    </div>
  )
}

export default function RatesPage() {
  const { t } = useLang()
  return (
    <>
      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block">
        <main className="pt-12 pb-24 px-6 max-w-7xl mx-auto">
          <header className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl" data-reveal>
                <h1 className="text-5xl md:text-6xl font-extrabold font-headline tracking-tighter text-on-surface mb-4">
                  {t('rates.heroTitle')} <span className="text-primary">{t('rates.heroTitleAccent')}</span>
                </h1>
                <p className="text-on-surface-variant text-lg max-w-xl font-medium">
                  {t('rates.heroDesc')}
                  <span className="block mt-2 italic text-sm text-secondary font-semibold">
                    {t('rates.lastUpdatedPrefix')} {LAST_UPDATED}{t('rates.lastUpdatedSuffix')}
                  </span>
                </p>
              </div>
              <div className="flex overflow-hidden rounded-xl bg-surface-container-lowest p-1 shadow-sm w-full md:w-auto" data-reveal="right" data-reveal-delay="100">
                {['Copper', 'Iron', 'Paper'].map((name, idx, arr) => {
                  const r = TICKER_RATES.find(tk => tk.name === name)
                  return (
                    <div key={name} className={`px-6 py-3 flex items-center gap-3${idx < arr.length - 1 ? ' border-r border-outline-variant/20' : ''}`}>
                      <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{name}</span>
                      <span className="font-bold text-primary">{r?.price}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              <div className="md:col-span-8 relative overflow-hidden rounded-3xl bg-secondary-container/30 group" data-reveal data-reveal-delay="200">
                <div className="absolute inset-0 z-0">
                  <img className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-700" alt="Recyclable materials" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxPf-0rWRSPWhiiOFZ_zisb0uYStSukefb_4VrX-N7AZOOl2mc2zwIilJNKEMHO1bBCL2AluA7z0KFsHpUN04TA_Dv0mm7vSubfRGHq9tDBkFyk5lWA0UBI1f31FFLl69oiIxmRmc5t-Cfh1W7daKjI1mqRvsTel9LbEZae8qOQJTBnv1bCh6UmsIEce-rA8Qj7CNUmaAhbyI55vxiK3AbI_SoCbIZYSga3a7sAt9vKFjcWhz2fHWAdSI55JlLaJ6YaWtEkfbeCzb-" />
                </div>
                <div className="relative z-10 p-10 flex flex-col h-full justify-center">
                  <h2 className="text-3xl font-extrabold font-headline mb-4 text-on-secondary-fixed">{t('common.notSureMaterial')}</h2>
                  <p className="text-on-secondary-fixed-variant text-lg mb-8 max-w-md">{t('common.notSureMaterialDesc')}</p>
                  <div className="flex flex-wrap gap-4">
                    <a className="flex items-center gap-3 bg-primary px-8 py-4 rounded-full text-on-primary font-bold shadow-lg hover:scale-105 transition-all" href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap%2C%20I%20need%20a%20quote%20for%20my%20scrap.">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                      {t('common.whatsappForQuote')}
                    </a>
                    <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-surface-container-lowest/80 backdrop-blur-md">
                      <span className="text-sm font-bold text-on-surface">{t('common.monSat')}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bg-tertiary-container rounded-3xl p-8 flex flex-col justify-between" data-reveal="right" data-reveal-delay="300">
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-on-tertiary-container text-3xl">calculate</span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline text-on-tertiary-container mb-2">{t('common.weightEstimator')}</h3>
                  <p className="text-on-tertiary-fixed-variant text-sm">{t('common.weightEstimatorDesc')}</p>
                </div>
                <a href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap%2C%20I%20am%20not%20sure%20of%20the%20weight.%20Can%20you%20help%20estimate?" className="w-full mt-8 py-4 rounded-2xl bg-white/20 text-on-tertiary-container font-bold hover:bg-white/30 transition-colors text-center block">{t('common.askOnWhatsApp')}</a>
              </div>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-reveal data-reveal-delay="0"><CategorySection titleKey="rates.metalsTitle" icon="precision_manufacturing" items={metals} /></div>
            <div data-reveal data-reveal-delay="150"><CategorySection titleKey="rates.plasticsTitle" icon="recycling" items={plastics} /></div>
            <div data-reveal data-reveal-delay="300"><CategorySection titleKey="rates.paperTitle" icon="news" items={papers} /></div>
          </section>

          <section className="mt-24 py-16 px-10 rounded-[3rem] bg-surface-container-highest/30 flex flex-col md:flex-row items-center gap-12" data-reveal>
            <div className="flex-1">
              <h4 className="text-3xl font-extrabold font-headline mb-6">{t('rates.whyBetterTitle')}</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">balance</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{t('rates.digitalScales')}</p>
                    <p className="text-sm text-on-surface-variant">{t('rates.digitalScalesDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{t('rates.marketPricing')}</p>
                    <p className="text-sm text-on-surface-variant">{t('rates.marketPricingDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <img className="w-full h-full object-cover" alt="Bharat Scrap baling press — processing large scrap volumes at our Sedam facility" src="/shop/shop-baling-press.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-lg">{t('rates.trustedBy')}</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden pb-28">
        <main className="pt-4 px-6 max-w-2xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="flex items-center px-4 py-2 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              {t('common.approxRates')}
            </div>
            <div className="flex space-x-8 px-4 py-3 overflow-x-auto no-scrollbar whitespace-nowrap">
              {['Copper', 'Iron', 'Aluminium', 'Brass'].map((name, idx) => {
                const r = TICKER_RATES.find(tk => tk.name === name)
                return (
                  <div key={name} className={`flex flex-col${idx > 0 ? ' border-l border-outline-variant/20 pl-4' : ''}`}>
                    <span className="text-[10px] text-on-surface-variant font-bold uppercase">{name}</span>
                    <span className="text-sm font-bold text-green-700">{r?.price}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col mb-8">
            <div className="flex justify-between items-end mb-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface leading-tight font-headline">{t('rates.mobileTitle')} <br/>{t('rates.mobileTitleLine2')}</h1>
            </div>
            <div className="flex items-start gap-3 p-4 bg-tertiary-container/20 rounded-2xl border border-tertiary-container/30">
              <span className="material-symbols-outlined text-tertiary text-xl">info</span>
              <p className="text-xs font-medium text-on-tertiary-container leading-relaxed">{t('rates.mobileDisclaimer')}</p>
            </div>
          </div>

          <div className="space-y-4">
            <CategorySection titleKey="rates.metalsTitle" items={metals.slice(0, 3)} isMobile />
            <div className="pt-4">
              <CategorySection titleKey="rates.plasticsTitle" items={plastics.slice(0, 2)} isMobile />
            </div>
            <div className="pt-4">
              <h2 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-2 mb-3">{t('rates.paperTitle')}</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Newspaper', price: '₹14', icon: 'newspaper' },
                  { name: 'Cardboard', price: '₹11', icon: 'inventory_2' },
                ].map((item) => (
                  <div key={item.name} className="p-5 bg-surface-container-lowest rounded-2xl shadow-sm">
                    <span className="material-symbols-outlined text-amber-700 mb-2">{item.icon}</span>
                    <h3 className="font-bold text-on-surface text-sm">{item.name}</h3>
                    <div className="mt-2">
                      <span className="text-xl font-extrabold text-green-800">{item.price}</span>
                      <span className="text-[10px] font-bold text-on-surface-variant ml-1">/kg</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 relative overflow-hidden rounded-[2.5rem] bg-stone-900 text-white p-8 group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[60px] rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <span className="inline-flex px-3 py-1 bg-primary rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">{t('common.fastQuote')}</span>
              <h2 className="text-2xl font-extrabold leading-tight mb-3 font-headline">{t('common.sendPhotoTitle')}</h2>
              <p className="text-stone-400 text-sm mb-6 leading-relaxed">{t('common.sendPhotoDesc')}</p>
              <a href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap%2C%20I%20need%20a%20quote%20for%20my%20scrap." className="flex items-center justify-center gap-3 w-full bg-surface-container-lowest text-stone-900 font-bold py-4 rounded-2xl active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
                {t('common.whatsappPhotos')}
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
