import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

const navDefs = [
  { path: '/',          icon: 'home',           key: 'nav.home'      },
  { path: '/rates',     icon: 'currency_rupee', key: 'nav.rates'     },
  { path: '/materials', icon: 'category',       key: 'nav.materials' },
  { path: '/about',     icon: 'groups',         key: 'nav.about'     },
  { path: '/contact',   icon: 'contact_phone',  key: 'nav.contact'   },
]

export default function BottomNavBar({ currentPath }) {
  const { t } = useLang()
  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-end px-1 pb-3 pt-2 bg-white/90 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.06)] rounded-t-3xl border-t border-stone-100 md:hidden">
      {navDefs.map((item) => {
        const isActive = currentPath === item.path
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex-1 flex flex-col items-center justify-end active:scale-90 transition-transform min-w-0"
          >
            <span
              className={`flex flex-col items-center justify-center gap-0.5 px-2 py-1.5 rounded-2xl transition-colors w-full max-w-[68px] ${
                isActive
                  ? 'bg-primary-container text-on-primary-container'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px] leading-none"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-semibold font-body leading-tight truncate w-full text-center">
                {t(item.key)}
              </span>
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
