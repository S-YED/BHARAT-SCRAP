import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function MobileHeader() {
  const { lang, setLang } = useLang()

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-outline-variant/15 flex justify-between items-center px-5 py-3.5 md:hidden">
      <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tighter text-primary font-headline">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
        Bharat Scrap
      </Link>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
          className="flex bg-surface-container p-0.5 rounded-xl border border-outline-variant/20"
          aria-label="Toggle language"
        >
          <span className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all ${lang === 'en' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant'}`}>
            EN
          </span>
          <span className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all ${lang === 'kn' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant'}`}>
            ಕನ್ನಡ
          </span>
        </button>
        <a
          href="tel:+917204429018"
          className="flex items-center gap-1.5 px-3 py-2 bg-primary-container text-on-primary-container rounded-xl text-xs font-bold active:scale-95 transition-transform"
          aria-label="Call Bharat Scrap"
        >
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          72044 29018
        </a>
      </div>
    </header>
  )
}
