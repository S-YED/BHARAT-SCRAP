import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function MobileFooter() {
  const { t } = useLang()
  return (
    <footer className="w-full py-12 px-6 mb-20 bg-stone-100 flex flex-col items-center text-center space-y-6 border-t border-stone-200">
      <div className="font-bold text-stone-900 font-headline text-xl">Bharat Scrap</div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <a className="text-sm font-body leading-relaxed text-stone-500 hover:text-green-600 transition-colors" href="#">{t('footer.fairWeighing')}</a>
        <a className="text-sm font-body leading-relaxed text-stone-500 hover:text-green-600 transition-colors" href="#">{t('footer.instantCash')}</a>
        <a className="text-sm font-body leading-relaxed text-stone-500 hover:text-green-600 transition-colors" href="#">{t('footer.termsShort')}</a>
        <Link className="text-sm font-body leading-relaxed text-stone-500 hover:text-green-600 transition-colors" to="/contact">{t('footer.support')}</Link>
      </div>
      <p className="text-sm font-body leading-relaxed text-stone-500">{t('footer.copyrightMobile')}</p>
    </footer>
  )
}
