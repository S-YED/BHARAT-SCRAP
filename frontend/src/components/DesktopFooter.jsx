import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function DesktopFooter() {
  const { t } = useLang()
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 py-16">
        <div>
          <div className="text-xl font-bold text-zinc-900 mb-6 font-headline">Bharat Scrap</div>
          <p className="font-body text-sm leading-relaxed text-zinc-500 mb-6">{t('footer.tagline')}</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">share</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-green-700 font-headline">{t('footer.company')}</h4>
          <ul className="space-y-4 font-body text-sm">
            <li><Link className="text-zinc-500 hover:text-green-600 transition-colors" to="/about">{t('footer.aboutUs')}</Link></li>
            <li><Link className="text-zinc-500 hover:text-green-600 transition-colors" to="/materials">{t('footer.materials')}</Link></li>
            <li><Link className="text-zinc-500 hover:text-green-600 transition-colors" to="/rates">{t('footer.priceList')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-green-700 font-headline">{t('footer.legal')}</h4>
          <ul className="space-y-4 font-body text-sm">
            <li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">{t('footer.terms')}</a></li>
            <li><a className="text-zinc-500 hover:text-green-600 transition-colors" href="#">{t('footer.privacy')}</a></li>
            <li><Link className="text-zinc-500 hover:text-green-600 transition-colors" to="/contact">{t('footer.contactUs')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-green-700 font-headline">{t('footer.followUs')}</h4>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">share</span>
            </div>
            <div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">public</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-zinc-200 text-center font-body text-sm text-zinc-500">
        {t('footer.copyright')}
      </div>
    </footer>
  )
}
