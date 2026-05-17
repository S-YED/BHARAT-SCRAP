import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

const missionCardDefs = [
  { icon: 'eco', titleKey: 'about.ecoTitle', descKey: 'about.ecoDesc' },
  { icon: 'handshake', titleKey: 'about.fairTitle', descKey: 'about.fairDesc' },
  { icon: 'groups', titleKey: 'about.communityTitle', descKey: 'about.communityDesc' },
]

const stats = [
  { value: '1K+', labelKey: 'about.statHouseholds' },
  { value: '1.2K', labelKey: 'about.statTons' },
  { value: '30+', labelKey: 'about.statFamilies' },
  { value: '2018', labelKey: 'about.statEst' },
]

const timeline = [
  { year: '2018', titleKey: 'about.y2018Title', descKey: 'about.y2018Desc' },
  { year: '2020', titleKey: 'about.y2020Title', descKey: 'about.y2020Desc' },
  { year: '2022', titleKey: 'about.y2022Title', descKey: 'about.y2022Desc' },
  { year: '2023', titleKey: 'about.y2023Title', descKey: 'about.y2023Desc' },
  { year: '2024', titleKey: 'about.y2024Title', descKey: 'about.y2024Desc' },
]

export default function AboutPage() {
  const { t } = useLang()

  return (
    <>
      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block">
        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 pt-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="px-3 py-1 bg-primary-container text-on-primary-container text-xs font-bold rounded-full tracking-widest uppercase mb-6 inline-block">{t('about.badge')}</span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6 font-headline">
                {t('about.heroTitle')} <span className="text-primary">{t('about.heroTitleAccent')}</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">{t('about.heroDesc')}</p>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl relative">
              <img className="w-full h-full object-cover" alt="Workers sorting scrap at Bharat Scrap, Sedam" src="/shop/shop-interior.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-lg">{t('about.heroCaption')}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Band */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.labelKey} data-reveal="fade" data-reveal-delay={String(i * 100)} className="text-center text-on-primary">
                <div className="text-5xl font-extrabold mb-2 font-headline">{s.value}</div>
                <div className="text-on-primary/70 font-medium">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Story */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-xl text-on-surface-variant leading-relaxed text-center">
            {t('about.community')}{' '}
            <strong className="text-on-surface">{t('about.communityBold')}</strong>
          </p>
        </section>

        {/* Mission Cards */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-extrabold tracking-tight text-center mb-16 font-headline">{t('about.missionTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionCardDefs.map((card, i) => (
              <div key={card.titleKey} data-reveal data-reveal-delay={String(i * 150)} className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-outline-variant/5 card-hover">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-headline">{t(card.titleKey)}</h3>
                <p className="text-on-surface-variant leading-relaxed">{t(card.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-center mb-16 font-headline">{t('about.journeyTitle')}</h2>
            <div className="space-y-12 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              {timeline.map((item, i) => (
                <div key={item.year} data-reveal="left" data-reveal-delay={String(i * 100)} className="flex gap-8 items-start relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shrink-0 relative z-10 font-headline text-sm">
                    {item.year.slice(-2)}
                  </div>
                  <div className="bg-surface-container-lowest p-8 rounded-2xl flex-1 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-bold font-headline">{item.year}</span>
                      <span className="text-on-surface font-bold font-headline">{t(item.titleKey)}</span>
                    </div>
                    <p className="text-on-surface-variant">{t(item.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="bg-surface-container-lowest rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 border border-primary/10">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-4 font-headline">{t('common.joinGreenRevolution')}</h2>
              <p className="text-on-surface-variant text-lg">{t('common.joinGreenRevolutionDesc')}</p>
            </div>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:opacity-90 transition-all">{t('common.contactUs')}</Link>
              <Link to="/rates" className="px-8 py-4 bg-surface-container-high rounded-xl font-bold hover:bg-surface-container-highest transition-all">{t('common.viewRates')}</Link>
            </div>
          </div>
        </section>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden pb-28">
        <section className="px-6 py-8">
          <h1 className="text-4xl font-headline font-extrabold tracking-tight leading-tight mb-4">
            {t('about.mobileTitle')} <span className="text-primary">{t('about.mobileTitleAccent')}</span>
          </h1>
          <p className="text-on-surface-variant leading-relaxed mb-8">{t('about.mobileDesc')}</p>
          <div className="rounded-3xl overflow-hidden h-56 relative mb-8">
            <img className="w-full h-full object-cover" alt="Inside Bharat Scrap — large scrap collection facility in Sedam" src="/shop/shop-interior.jpg" />
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.labelKey} className="bg-surface-container-lowest p-5 rounded-2xl text-center shadow-sm">
                <div className="text-2xl font-extrabold text-primary font-headline">{s.value}</div>
                <div className="text-xs text-on-surface-variant font-medium">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 mb-10">
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {t('about.communityMobile')}{' '}
            <strong className="text-on-surface">{t('about.communityMobileBold')}</strong>
          </p>
        </section>

        <section className="px-6 mb-10 space-y-4">
          <h2 className="text-2xl font-headline font-extrabold mb-4">{t('about.missionTitle')}</h2>
          {missionCardDefs.map((card) => (
            <div key={card.titleKey} className="bg-surface-container-lowest p-6 rounded-2xl flex gap-4 items-start">
              <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <div>
                <h3 className="font-bold mb-1 font-headline">{t(card.titleKey)}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{t(card.descKey)}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="px-6 mb-10">
          <h2 className="text-2xl font-headline font-extrabold mb-6">{t('about.journeyTitle')}</h2>
          <div className="space-y-6 border-l-2 border-primary/20 pl-6 ml-2">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
                <span className="text-xs font-bold text-primary">{item.year}</span>
                <h3 className="font-bold font-headline">{t(item.titleKey)}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 mb-10">
          <div className="bg-primary rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-headline font-extrabold text-on-primary mb-4">{t('common.joinGreenRevolution')}</h2>
            <p className="text-on-primary/80 mb-6">{t('common.joinGreenRevolutionDesc')}</p>
            <Link to="/contact" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-2xl font-bold inline-block active:scale-95 transition-transform">
              {t('common.contactUs')}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
