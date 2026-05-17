import { useRef, useState, useEffect, useCallback } from 'react'
import { MATERIALS_TICKER as tickerRates } from '../data/rates'
import { useLang } from '../i18n/LanguageContext'

const materialCategories = [
  {
    name: 'Metals',
    nameMobile: 'Metals (ಲೋಹಗಳು)',
    icon: 'precision_manufacturing',
    iconMobile: 'iron',
    desc: 'Ferrous and non-ferrous scraps',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJTXQQoooHFMtRLNk7J24RnChjlUN8Fm_7R9X0TclmBAdGjacSf64TGCa0MlyAR4pAr5YryQhHTxtAPhjmTwrWRyw6KanSRWLMrax1_ksNA2_pA9qQiE8PLHbbx0vhKW_pBcDWTyi760S9I_2fleyVsZKE3UcIu9Gc9oHxie89YMEfl_ici66_lvt0I8EpcFWuWgFTthyb2Ah_cjaOhv3E7puoxoTkxNBE7iq6gwPjjqjDSeQ8W0tUXvVuiU3N7v0VY8V7sefkI6Yi',
    containerColor: 'bg-secondary-container',
    textColor: 'text-on-secondary-container',
    accepted: [
      { name: 'Iron & Steel', sub: 'Rebars, furniture, pipes' },
      { name: 'Copper & Brass', sub: 'Wiring, kitchenware, motors' },
      { name: 'Aluminium', sub: 'Cans, frames, sheets' },
    ],
    notAccepted: ['LPG Cylinders', 'Explosive Containers'],
    notAcceptedMobile: ['Radioactive Metals', 'Explosive Containers (Gas Cylinders)'],
    acceptedMobile: ['Iron (ಕಬಿನ)', 'Copper (ತಾಮ್ರ)', 'Brass (ಹಿತ್ತಾಳೆ)', 'Aluminium (ಅಲ್ಯೂಮಿನಿಯಂ)'],
  },
  {
    name: 'Paper',
    nameMobile: 'Paper (ಕಾಗದ)',
    icon: 'auto_stories',
    iconMobile: 'description',
    desc: 'Post-consumer paper products',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0J5JCgWk3oX2VIAHxsM60JdXOkH-RS5iubpoa8m4_6fw2uYXm0LT2WppRPsXah6DI9A3Dn0Xg6tO1Q0gcHxZx-aw9ssi2vEAjly_P_UGx-Cq-jIhdH3GnYfIGXqND3sfYTReWZgDR8eztYGOz8htwPkky58e6ZkffD_wFCr0y8uECqW93fFwzjDpobNGULv8J4jApVfviEjxe7gDgDtWBo3JMvbbItkx8ASEqmpM8k2me5R9HHBtZUgrzsOn6m0EZf04CAactB31A',
    containerColor: 'bg-tertiary-container',
    textColor: 'text-on-tertiary-container',
    accepted: [
      { name: 'Newspapers & Magazines', sub: 'Hindi, English, Kannada dailies' },
      { name: 'Cardboard (Gatta)', sub: 'Shipping boxes, packaging' },
      { name: 'Old Books', sub: 'Note-books, textbooks' },
    ],
    notAccepted: ['Wet or Stained Paper', 'Laminated Sheets'],
    notAcceptedMobile: ['Wet Paper (ತೇವವಾದ ಕಾಗದ)', 'Oil Soaked Packaging'],
    acceptedMobile: ['Newspaper (ಸುದ್ದಿಪತ್ರಿಕೆ)', 'Magazines (ನಿಯತಕಾಲಿಕೆಗಳು)', 'Cardboard (ರಟ್ಟಿನ ಪೆಟ್ಟಿಗೆ)', 'Notebooks (ನೋಟ್‌ಬುಕ್‌ಗಳು)'],
  },
  {
    name: 'Plastics',
    nameMobile: 'Plastic (ಪ್ಲಾಸ್ಟಿಕ್)',
    icon: 'eco',
    iconMobile: 'eco',
    desc: 'Industrial and domestic polymers',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc2szsq3Gm2t5-XjnBfm9Z1A6jIMWDRMWPK6zIU-ZP7uw-ctOm_vbTgvvFQIdO3ErcGRhv43N0pLJLRD8ubO9vTz1N9Th4ffkGNBdoc5q6eeeb8nbqquagqUpNJlTTDu5irLwRD_kp8u7fw3ccPCp750ZN95MamRKRNZamSoQPlgBcuNxJwsgPkvm7bNylRT2P9f32K_jHtINxyVYFauP9dlW9VBGzd4QbIX8KraaXASyk0Zp8h7I4x4UTiaebRqttqprVwJvw80sL',
    containerColor: 'bg-primary-container',
    textColor: 'text-on-primary-container',
    accepted: [
      { name: 'PET Bottles', sub: 'Beverage bottles, transparent' },
      { name: 'HDPE / Hard Plastic', sub: 'Buckets, containers, crates' },
      { name: 'PVC Pipes', sub: 'Rigid plumbing pipes' },
    ],
    notAccepted: ['Plastic Bags / Wrappers', 'Multilayer Packaging'],
    notAcceptedMobile: ['Thin Carry Bags (ತೆಳುವಾದ ಚೀಲಗಳು)', 'Contaminated Medical Waste'],
    acceptedMobile: ['Bottles (ಬಾಟಲಿಗಳು)', 'Pipes (ಪೈಪ್‌ಗಳು)', 'Drums (ಡ್ರಮ್‌ಗಳು)', 'Chairs (ಖುರ್ಚಿಗಳು)'],
  },
]

function MobileTickerScroll({ tickerRates }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: direction * 160, behavior: 'smooth' })
  }

  return (
    <div className="relative px-2 pb-2">
      {/* Left gradient + button */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-2 z-10 flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-container-low via-surface-container-low/60 to-transparent pointer-events-none rounded-l-xl" />
          <button
            onClick={() => scroll(-1)}
            className="relative z-20 ml-1 w-8 h-8 rounded-full bg-surface-container-lowest/90 shadow-md flex items-center justify-center text-on-surface active:scale-90 transition-transform backdrop-blur-sm border border-outline-variant/15"
            aria-label="Scroll prices left"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
        </div>
      )}

      {/* Scrollable ticker */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap gap-4 px-6 no-scrollbar"
      >
        {tickerRates.map((r) => (
          <div key={r.name} className="bg-surface-container-lowest px-6 py-3 rounded-xl flex items-center gap-3 shadow-sm shrink-0">
            <span className={`material-symbols-outlined ${r.color}`}>{r.icon}</span>
            <span className="font-bold">{r.name}</span>
          </div>
        ))}
      </div>

      {/* Right gradient + button */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-2 z-10 flex items-center">
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-container-low via-surface-container-low/60 to-transparent pointer-events-none rounded-r-xl" />
          <button
            onClick={() => scroll(1)}
            className="relative z-20 mr-1 w-8 h-8 rounded-full bg-surface-container-lowest/90 shadow-md flex items-center justify-center text-on-surface active:scale-90 transition-transform backdrop-blur-sm border border-outline-variant/15"
            aria-label="Scroll prices right"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default function MaterialsPage() {
  const { t } = useLang()

  return (
    <>
      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block">
        <main className="pt-12 pb-20 max-w-7xl mx-auto px-6">
          <header className="mb-16" data-reveal>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-on-background font-headline">
              {t('materials.heroTitle')}
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">{t('materials.heroDesc')}</p>
          </header>

          {/* Price Ticker */}
          <div className="mb-12 overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm">
            <div className="flex whitespace-nowrap py-4 px-6 gap-8 items-center overflow-x-auto no-scrollbar">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> {t('materials.liveRates')}
              </span>
              {[
                { name: 'Copper', price: '₹640/kg' },
                { name: 'Paper (Old Books)', price: '₹14/kg' },
                { name: 'Iron (Loha)', price: '₹28/kg' },
                { name: 'Plastic (HDPE)', price: '₹12/kg' },
              ].map((r) => (
                <div key={r.name} className="flex items-center gap-4 px-4 py-1 border-r border-outline-variant/20 last:border-r-0">
                  <span className="font-bold">{r.name}</span>
                  <span className="text-primary font-mono">{r.price}</span>
                  <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materialCategories.map((cat, i) => (
              <div key={cat.name} data-reveal data-reveal-delay={String(i * 150)} className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
                <div className="h-48 relative">
                  <img className="w-full h-full object-cover" alt={cat.name} src={cat.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="material-symbols-outlined text-primary text-3xl mb-1">{cat.icon}</span>
                    <h2 className="text-2xl font-bold font-headline">{cat.name}</h2>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">{t('materials.acceptedItems')}</h3>
                      <ul className="space-y-3">
                        {cat.accepted.map((item) => (
                          <li key={item.name} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            <div>
                              <span className="block font-semibold">{item.name}</span>
                              <span className="text-xs text-on-surface-variant">{item.sub}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6 border-t border-outline-variant/10">
                      <h3 className="text-xs font-black uppercase tracking-widest text-error-dim mb-4">{t('materials.notAccepted')}</h3>
                      <ul className="space-y-3">
                        {cat.notAccepted.map((item) => (
                          <li key={item} className="flex items-start gap-3 opacity-60">
                            <span className="material-symbols-outlined text-error-dim text-sm mt-1">cancel</span>
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <section className="mt-20 bg-primary/5 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12 border border-primary/10" data-reveal>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 font-headline">{t('materials.dontSeeItem')}</h2>
              <p className="text-on-surface-variant text-lg">{t('materials.dontSeeItemDesc')}</p>
            </div>
            <div className="flex-shrink-0">
              <a className="flex items-center gap-4 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg" href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap%2C%20I%20have%20a%20question%20about%20materials.">
                <span className="material-symbols-outlined">chat</span>
                {t('common.messageOnWhatsApp')}
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden pb-28">
        <div className="pb-8 bg-surface-container-low">
          <div className="px-6 py-6">
            <h1 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
              {t('materials.heroTitle')} <br/>
              <span className="text-primary text-2xl">ನಾವು ಖರೀದಿಸುವ ವಸ್ತುಗಳು</span>
            </h1>
          </div>
          <MobileTickerScroll tickerRates={tickerRates} />
        </div>

        <main className="px-6 py-8 space-y-12 max-w-6xl mx-auto">
          {materialCategories.map((cat, i) => (
            <section key={cat.nameMobile} data-reveal data-reveal-delay={String(i * 100)} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${cat.containerColor} rounded-2xl flex items-center justify-center`}>
                  <span className={`material-symbols-outlined ${cat.textColor} text-2xl`}>{cat.iconMobile}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-headline font-bold">{cat.nameMobile}</h2>
                  <p className="text-on-surface-variant text-sm">{cat.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary">
                  <h3 className="font-headline font-bold text-primary flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {t('materials.mobileAccepted')} (ಸ್ವೀಕರಿಸಲಾಗಿದೆ)
                  </h3>
                  <ul className="grid grid-cols-2 gap-3 text-sm font-medium">
                    {cat.acceptedMobile.map((item) => (
                      <li key={item} className="flex items-center gap-2 bg-surface-container-lowest p-3 rounded-xl">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-error">
                  <h3 className="font-headline font-bold text-error flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                    {t('materials.mobileNotAccepted')} (ಸ್ವೀಕರಿಸಲಾಗುವುದಿಲ್ಲ)
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 text-sm font-medium opacity-75">
                    {cat.notAcceptedMobile.map((item) => (
                      <li key={item} className="flex items-center gap-2 bg-surface-container-lowest p-3 rounded-xl">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}

          <section className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-xl border border-outline-variant/10 relative overflow-hidden" data-reveal>
            <div className="relative z-10">
              <h2 className="text-3xl font-headline font-extrabold mb-4">{t('materials.dontSeeItem')}</h2>
              <p className="text-on-surface-variant mb-6 text-lg">{t('materials.dontSeeItemDesc')}</p>
              <a className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg active:scale-95 transition-transform" href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap%2C%20I%20have%20a%20question%20about%20materials.">
                <span className="material-symbols-outlined">send</span>
                {t('common.chatWithTeam')}
              </a>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          </section>
        </main>
      </div>
    </>
  )
}
