import { Link } from 'react-router-dom'
import PriceTicker from './PriceTicker'
import { useLang } from '../i18n/LanguageContext'

export default function DesktopHeader({ currentPath }) {
  const { lang, setLang, t } = useLang()

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/rates', label: t('nav.rates') },
    { path: '/materials', label: t('nav.materials') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className="fixed top-0 w-full z-50 hidden md:block">
      <nav className="bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant/15 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-primary font-headline flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
            Bharat Scrap
          </Link>
          <div className="flex items-center gap-8 font-headline text-sm font-semibold tracking-tight">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  currentPath === link.path
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary transition-colors'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
              className="flex bg-surface-container p-0.5 rounded-xl border border-outline-variant/20"
              aria-label="Toggle language"
            >
              <span className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${lang === 'en' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}>
                EN
              </span>
              <span className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${lang === 'kn' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}>
                ಕನ್ನಡ
              </span>
            </button>
            <a
              href="tel:+917204429018"
              className="px-4 py-2 text-on-surface-variant font-semibold rounded-xl text-sm hover:text-primary transition-colors flex items-center gap-2"
              aria-label="Call Bharat Scrap"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              +91 72044 29018
            </a>
            <a
              href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-on-primary font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              {t('nav.bookPickup')}
            </a>
          </div>
        </div>
      </nav>
      <PriceTicker />
    </header>
  )
}
