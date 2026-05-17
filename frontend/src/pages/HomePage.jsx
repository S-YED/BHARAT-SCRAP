import { Link } from 'react-router-dom'
import PriceTicker from '../components/PriceTicker'
import { useLang } from '../i18n/LanguageContext'

const categories = [
  { nameKey: 'Plastic', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIhrpgq526Fjs0Lnpp9txBHMfxrpFdd93OoOnNdshgFit7rPimCopbEN8MgWtKziVvABmNGrkicJpmnOMhq7U7_g3wDkHDV7JA-w7XoiQNxwBPSFndco2W9Z2APEvRIxdLYgk_YiLvBPkH9QZSWKy1i3iiK8kwW5p2Ks6uJalsyk8db1QnA3msGVcDJz4IfgPt8-kchmzlQCZYlHmcQXU1oG1Dm5ObaTvs9gzW7qIOlXeek6XI0_U-OHxcQuz7hpsqqogTf_yZxqAx' },
  { nameKey: 'Metal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv45ymVMYMFXM89Nty97Isds6l16O9d3HkJHO_bOjJ-N-XD4NBMjG-KS3bjhffYD13AosjqMU9ORdbT07pyamcn0lNS34mZRBjzttt7v_j1c6Sftoprmbgoj1j5XlNTDm4i4mSRJYYoo9E9ISie-9lRB3EVbRNGkTkKjHwMnPBIj0icY-5_IwxHMiJu8ueVmK4FA8To2gaN2tYZan1rTEvgfVCITDKBku-TZ7zy_3jgggGgrUnxaw6w-6fY8AQMQUQJN1ijcHhuyHV' },
  { nameKey: 'Paper', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9nDM7E1Qgv9-DwiKM5yBmrOBTnkxl4fSYtVshLmrX5k7XBsywoOaBX4k61WY3FXOO3qyCJt1KzHFvSljbScCEjWMeLELhepe6NNENZ0bEjgwpffeuTGO6xZwdFUZggW8KUfqq3Hg0M4xvCn8qpqgvRRoq_Avnpd51uapbtdekXP1tXXaxsXF-ksx7S2B7rI1bcuokgElLCAmt2TLzOwP-ee6ME_SyQY_kun7lHghXnQgfCHbzUcAckanNYyD9-crvm_xaFsbyOveB' },
]

function StarRow() {
  return (
    <div className="flex text-tertiary mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      ))}
    </div>
  )
}

export default function HomePage() {
  const { t } = useLang()

  const trustItems = [
    { icon: 'scale', label: t('home.trustFairWeighing'), sub: t('home.trustFairWeighingSub') },
    { icon: 'account_balance_wallet', label: t('home.trustInstantUpi'), sub: t('home.trustInstantUpiSub') },
    { icon: 'schedule', label: t('home.trustHours'), sub: t('home.trustHoursSub') },
    { icon: 'verified', label: t('home.trustHonest'), sub: t('home.trustHonestSub') },
  ]

  const desktopCategories = [
    { name: 'E-Waste', desc: 'Old computers, phones, circuit boards, and cables.', icon: 'computer', color: 'bg-secondary-container text-on-secondary-container' },
    { name: 'Paper', desc: 'Newspapers, Cardboard boxes, and Books.', icon: 'description', color: 'bg-tertiary-container text-on-tertiary-container' },
    { name: 'Appliances', desc: 'Fridges, ACs, Washing Machines, and Microwaves.', icon: 'kitchen', color: 'bg-primary-container text-on-primary-container' },
    { name: 'Plastics', desc: 'Milk packets, PET bottles, and Industrial containers.', icon: 'opacity', color: 'bg-surface-container-highest text-on-surface' },
  ]

  return (
    <>
      {/* ===== DESKTOP HERO ===== */}
      <div className="hidden md:block">
        <header className="relative pt-8 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block animate-fade-in">{t('home.badge')}</span>
              <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] text-on-surface mb-8 font-headline animate-fade-up delay-100">
                {t('home.heroTitle')} <br /> <span className="text-primary">{t('home.heroTitleAccent')}</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
                {t('home.heroDesc')}
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <a href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap%2C%20I%20want%20to%20sell%20scrap.%20Please%20arrange%20a%20pickup." aria-label="WhatsApp us to book a scrap pickup" className="btn-shimmer px-8 py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-3 shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  {t('common.whatsappPickup')}
                </a>
                <a href="tel:+917204429018" aria-label="Call Bharat Scrap for pickup enquiry" className="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-xl font-bold flex items-center gap-3 hover:bg-secondary-container/80 hover:translate-y-[-2px] transition-all">
                  <span className="material-symbols-outlined">call</span>
                  {t('common.callNow')}
                </a>
              </div>
            </div>
            <div className="relative animate-slide-right delay-200">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Workers at Bharat Scrap sorting collected scrap in Sedam" src="/shop/shop-workers.jpg" />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-xl max-w-xs border border-white/40 animate-float">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">1.2K Tons</div>
                    <div className="text-xs text-on-surface-variant font-medium">{t('home.scrapCollected')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ===== MOBILE HERO ===== */}
      <div className="md:hidden pb-28">
        <section className="px-6 py-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dim p-8 text-on-primary animate-scale-up">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">{t('home.localTrusted')}</span>
              <h2 className="text-4xl font-headline font-extrabold leading-tight tracking-tight mb-6">
                {t('home.heroMobileTitle')} <span className="text-primary-container">{t('home.heroMobileTitleAccent')}</span>
              </h2>
              <p className="text-on-primary/80 mb-8 max-w-[280px] leading-relaxed">
                {t('home.heroMobileDesc')}
              </p>
              <div className="flex flex-col gap-3">
                <a aria-label="WhatsApp us for scrap pickup" className="flex items-center justify-center gap-2 bg-primary-container text-on-primary-container font-bold py-4 rounded-2xl active:scale-[0.98] transition-transform" href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap%2C%20I%20want%20to%20sell%20scrap.%20Please%20arrange%20a%20pickup.">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  {t('common.whatsappUs')}
                </a>
                <a aria-label="Call Bharat Scrap for pickup enquiry" className="flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container font-bold py-4 rounded-2xl active:scale-[0.98] transition-transform" href="tel:+917204429018">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  {t('common.callNow')}
                </a>
                <a href="tel:+917204429018" className="text-on-primary/70 text-center text-sm font-semibold mt-1">72044 29018</a>
              </div>
            </div>
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>
        <PriceTicker />

        {/* Mobile Trust Bar */}
        <section className="px-6 mb-10">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'balance', label: t('home.trustFairWeighing') },
              { icon: 'account_balance_wallet', label: t('home.trustInstantUpi') },
              { icon: 'schedule', label: t('home.trustHours') },
              { icon: 'verified_user', label: t('home.trustReliable') },
            ].map((item, i) => (
              <div key={item.label} data-reveal data-reveal-delay={String(i * 100)} className="bg-surface-container-low p-4 rounded-2xl flex flex-col gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <span className="text-xs font-bold font-headline">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Categories */}
        <section className="px-6 mb-10">
          <h3 className="text-xl font-headline font-extrabold mb-6 flex items-center justify-between">
            {t('home.whatWeBuy')}
            <Link to="/materials" className="text-sm font-semibold text-primary underline">{t('common.viewAll')}</Link>
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {categories.map((cat, i) => (
              <div key={cat.nameKey} data-reveal data-reveal-delay={String(i * 100)} className="group relative overflow-hidden h-32 rounded-3xl bg-surface-container-lowest flex items-center p-6 border border-outline-variant/10 transition-transform duration-300 active:scale-[0.98]">
                <div className="z-10">
                  <p className="text-xs font-bold text-primary mb-1 uppercase tracking-tighter">{t('home.category')}</p>
                  <h4 className="text-2xl font-headline font-bold">{cat.nameKey}</h4>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
                  <img className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" alt={cat.nameKey} src={cat.img} />
                  <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Factory Callout */}
        <section className="px-6 mb-10">
          <div className="bg-on-surface text-surface rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden">
            <div className="z-10">
              <h3 className="text-xl font-headline font-bold mb-2">{t('home.bulkMobileTitle')}</h3>
              <p className="text-surface/70 text-sm leading-relaxed mb-4">{t('home.bulkMobileDesc')}</p>
              <Link to="/contact" className="bg-primary px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 w-fit">
                {t('home.requestQuote')} <span className="material-symbols-outlined text-sm">trending_flat</span>
              </Link>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-white/5 rotate-12">factory</span>
          </div>
        </section>

        {/* Mobile Location */}
        <section className="px-6 mb-10">
          <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/5">
            <h3 className="font-headline font-extrabold text-lg mb-4">{t('home.ourHub')}</h3>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <p className="font-bold text-sm">{t('home.ourLocation')}</p>
                <p className="text-on-surface-variant text-xs">{t('home.ourLocationSub')}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden mb-4">
              <iframe
                title="Bharat Scrap Location — Sedam, Karnataka"
                src="https://maps.google.com/maps?q=17.181376,77.275504&hl=en&z=16&output=embed"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href="https://maps.app.goo.gl/cefTRVP7qzioRPnB7" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-white text-on-surface border border-outline-variant/20 font-bold rounded-2xl flex items-center justify-center gap-2">
              {t('common.viewOnMaps')} <span className="material-symbols-outlined text-lg">open_in_new</span>
            </a>
          </div>
        </section>
      </div>

      {/* ===== DESKTOP TRUST BAR ===== */}
      <section className="hidden md:block bg-surface-container-low py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map((item, i) => (
              <div key={item.label} data-reveal data-reveal-delay={String(i * 100)} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{item.label}</h4>
                  <p className="text-xs text-on-surface-variant">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESKTOP WHAT WE BUY ===== */}
      <section className="hidden md:block py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">{t('home.whatWeBuy')}</h2>
              <p className="text-on-surface-variant max-w-md">{t('home.whatWeBuyDesc')}</p>
            </div>
            <Link to="/rates" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              {t('home.viewFullPriceList')} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div data-reveal className="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-3xl overflow-hidden group card-hover">
              <div className="h-64 relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Scrap metals and alloys including copper, brass, and aluminium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV9yr0GPE46wOb-ZQSjEn1KUo7BaMUp-RvPgolk_TVfbXC7mv12UI1Juev0cSIhmK5sC6LNcr412JKfgGmVyQVR48adYImSkXY9ukQ_W9OaP_AsbJ7VxOfdbcWTWixUaU7hs53f1-KPPazo-1RMt06YsMSPDpYnmsqw2SyiEAb-AImJrabR5YOpEvOw_uOa_X9iB67O2Mn0UlLXVtUDN7C4lMkWVHbg9CSD61EZkUuhqQRtrpRvxbptDFexuSAv5xXEEutCoA6HVdX" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 font-headline">{t('home.metalsTitle')}</h3>
                <p className="text-on-surface-variant mb-6">{t('home.metalsDesc')}</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-high rounded-lg text-xs font-bold text-on-surface-variant">{t('home.mostPopular')}</span>
                  <span className="px-3 py-1 bg-primary-container rounded-lg text-xs font-bold text-on-primary-container">{t('home.highValue')}</span>
                </div>
              </div>
            </div>
            {desktopCategories.map((cat, i) => (
              <div key={cat.name} data-reveal data-reveal-delay={String(100 + i * 100)} className="bg-surface-container-lowest rounded-3xl p-8 hover:bg-surface-container-high transition-all cursor-pointer card-hover">
                <div className={`w-12 h-12 ${cat.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-headline">{cat.name}</h3>
                <p className="text-sm text-on-surface-variant">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESKTOP INDUSTRIAL CALLOUT ===== */}
      <section className="hidden md:block max-w-7xl mx-auto px-6 mb-24">
        <div data-reveal className="relative bg-inverse-surface rounded-[2rem] p-12 md:p-20 overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 font-headline">{t('home.bulkTitle')}</h2>
              <p className="text-zinc-400 text-lg mb-4 leading-relaxed">
                {t('home.bulkDesc')} <span className="text-white font-bold">{t('home.bulkFree')}</span>.
              </p>
              <p className="text-zinc-500 text-sm mb-10">{t('home.bulkSub')}</p>
              <Link to="/contact" className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors inline-block">{t('home.bulkContact')}</Link>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <img className="rounded-2xl h-48 w-full object-cover" alt="Hydraulic baling press at Bharat Scrap — industrial processing capability" src="/shop/shop-baling-press.jpg" />
                <img className="rounded-2xl h-48 w-full object-cover" alt="Large volume of mixed scrap at Bharat Scrap facility, Sedam" src="/shop/shop-mixed-materials.jpg" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2"></div>
        </div>
      </section>

      {/* ===== DESKTOP LOCATION ===== */}
      <section className="hidden md:block py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-8 font-headline">{t('home.visitShop')}</h2>
          <div className="space-y-8">
            {[
              { icon: 'location_on', title: t('home.shopTitle'), text: t('home.shopAddress') },
              { icon: 'call', title: t('home.phoneLabel'), text: t('home.phoneDesc') },
              { icon: 'schedule', title: t('home.hoursLabel'), text: t('home.hoursText') },
            ].map((item) => (
              <div key={item.title} className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative border border-outline-variant/10">
          <iframe
            title="Bharat Scrap Location"
            className="w-full h-full"
            src="https://maps.google.com/maps?q=17.181376,77.275504&hl=en&z=16&output=embed"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  )
}
