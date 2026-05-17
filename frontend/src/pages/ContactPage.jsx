import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

export default function ContactPage() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', phone: '', scrapType: 'Mixed Paper & Cardboard', weight: '', details: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi Bharat Scrap! I would like to request a scrap pickup.\n\nName: ${form.name}\nPhone: ${form.phone}\nScrap Type: ${form.scrapType}\nApprox. Weight: ${form.weight} KG${form.details ? `\nDetails: ${form.details}` : ''}`
    window.open(`https://wa.me/917204429018?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block">
        <main className="pt-12 pb-20 px-6 max-w-7xl mx-auto">
          <header className="mb-16" data-reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">
              {t('contact.heroTitle')} <span className="text-primary">{t('contact.heroTitleAccent')}</span>
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">{t('contact.heroDesc')}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <a className="group relative overflow-hidden bg-primary p-8 rounded-xl flex items-center justify-between transition-all hover:translate-y-[-4px]" data-reveal href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap!">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                </div>
                <div>
                  <h3 className="text-on-primary text-2xl font-bold font-headline">{t('contact.whatsappTitle')}</h3>
                  <p className="text-on-primary/80 font-medium">{t('contact.whatsappDesc')}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-primary text-4xl opacity-50 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </a>
            <a className="group relative overflow-hidden bg-secondary p-8 rounded-xl flex items-center justify-between transition-all hover:translate-y-[-4px]" data-reveal data-reveal-delay="100" href="tel:+917204429018">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <div>
                  <h3 className="text-on-secondary text-2xl font-bold font-headline">{t('contact.callTitle')}</h3>
                  <p className="text-on-secondary/80 font-medium">{t('contact.callNumber')}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-secondary text-4xl opacity-50 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <section className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12" data-reveal="left" data-reveal-delay="200">
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-2 font-headline">{t('contact.bulkTitle')}</h2>
                <p className="text-on-surface-variant font-medium">{t('contact.bulkDesc')}</p>
              </div>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">{t('contact.labelName')}</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary text-on-surface transition-all" placeholder="Suresh Kumar" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">{t('contact.labelPhone')}</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary text-on-surface transition-all" placeholder="+91 98765 43210" type="tel" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">{t('contact.labelScrapType')}</label>
                    <select name="scrapType" value={form.scrapType} onChange={handleChange} className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary text-on-surface appearance-none transition-all">
                      <option>Mixed Paper &amp; Cardboard</option>
                      <option>Ferrous Metal (Iron/Steel)</option>
                      <option>Non-Ferrous (Copper/Brass)</option>
                      <option>E-Waste &amp; Electronics</option>
                      <option>Industrial Plastics</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">{t('contact.labelWeight')}</label>
                    <div className="relative">
                      <input name="weight" value={form.weight} onChange={handleChange} className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary text-on-surface transition-all" placeholder="e.g. 250" type="text" />
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-primary">KG</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">{t('contact.labelDetails')}</label>
                  <textarea name="details" value={form.details} onChange={handleChange} className="w-full bg-surface-container-lowest border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary text-on-surface transition-all resize-none" placeholder="Describe access points or specific requirements..." rows="4"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-on-primary py-5 rounded-xl font-extrabold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all">
                  {t('common.requestPickupVisit')}
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </section>

            <aside className="lg:col-span-5 space-y-12" data-reveal="right" data-reveal-delay="300">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <iframe
                  title="Bharat Scrap Location — Sedam, Karnataka"
                  src="https://maps.google.com/maps?q=17.181376,77.275504&hl=en&z=16&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-10 px-4">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">{t('contact.facilityTitle')}</h3>
                  <p className="text-2xl font-bold leading-tight mb-2 font-headline">{t('contact.facilityAddress')}</p>
                  <a className="inline-flex items-center gap-2 text-secondary font-bold hover:underline" href="https://maps.app.goo.gl/cefTRVP7qzioRPnB7" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined">near_me</span>
                    {t('common.getDirections')}
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4">{t('contact.operationalHours')}</h3>
                    <ul className="space-y-2 font-medium">
                      <li className="flex justify-between"><span>{t('contact.monSat')}</span> <span className="font-bold">{t('contact.monSatTime')}</span></li>
                      <li className="flex justify-between text-on-surface-variant"><span>{t('common.sunday')}</span> <span className="font-bold">{t('common.closed')}</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4">{t('contact.bulkOrders')}</h3>
                    <p className="font-bold">+91 72044 29018</p>
                    <p className="text-sm text-on-surface-variant">{t('contact.bulkOrdersDesc')}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden pb-28">
        <main className="pt-4 pb-8 px-4 max-w-7xl mx-auto">
          <section className="mb-12 text-center">
            <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-none">
              {t('contact.heroTitle')} <span className="text-primary">{t('contact.heroTitleAccent')}</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">{t('contact.mobileHeroDesc')}</p>
          </section>

          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-4" data-reveal>
              <a href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap!" className="group flex flex-col items-center justify-center p-8 bg-primary rounded-xl shadow-lg active:scale-95 transition-transform text-center">
                <span className="material-symbols-outlined text-white text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                <span className="text-white font-headline font-bold text-lg">{t('contact.whatsappTitle')}</span>
                <span className="text-on-primary/80 text-xs mt-1">{t('common.instantResponse')}</span>
              </a>
              <a href="tel:+917204429018" className="group flex flex-col items-center justify-center p-8 bg-secondary rounded-xl shadow-lg active:scale-95 transition-transform text-center">
                <span className="material-symbols-outlined text-white text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <span className="text-white font-headline font-bold text-lg">{t('contact.callTitle')}</span>
                <span className="text-on-secondary/80 text-xs mt-1">{t('common.speakWithAgent')}</span>
              </a>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm" data-reveal data-reveal-delay="100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
                <h2 className="text-2xl font-headline font-bold">{t('contact.bulkTitle')}</h2>
              </div>
              <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('contact.labelNameMobile')}</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-4" placeholder="Suresh Kumar" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('contact.labelPhone')}</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-4" placeholder="+91 98765 43210" type="tel" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('contact.labelScrapType')}</label>
                  <select name="scrapType" value={form.scrapType} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-4 appearance-none">
                    <option>Plastic</option>
                    <option>Metal</option>
                    <option>Paper</option>
                    <option>Industrial</option>
                    <option>Mixed Paper &amp; Cardboard</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1 col-span-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">{t('contact.labelWeightMobile')}</label>
                  <div className="relative">
                    <input name="weight" value={form.weight} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-4" placeholder="e.g. 500" type="text" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">KG</span>
                  </div>
                </div>
                <button className="col-span-2 bg-primary text-white font-headline font-bold py-4 rounded-xl shadow-md hover:opacity-90 transition-all" type="submit">
                  {t('common.submitRequest')}
                </button>
              </form>
            </div>

            <div className="bg-surface-container-low rounded-xl overflow-hidden" data-reveal data-reveal-delay="200">
              <div className="h-48 w-full">
                <iframe
                  title="Bharat Scrap Location"
                  src="https://maps.google.com/maps?q=17.181376,77.275504&hl=en&z=16&output=embed"
                  width="100%"
                  height="192"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">{t('contact.ourFacility')}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mt-1">{t('contact.facilityAddressMobile')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">directions</span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">{t('contact.directions')}</h3>
                    <a href="https://maps.app.goo.gl/cefTRVP7qzioRPnB7" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary font-semibold flex items-center gap-1 mt-1 hover:underline">
                      <span className="material-symbols-outlined text-sm">near_me</span>
                      {t('contact.getDirectionsMaps')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-xl p-6 shadow-sm" data-reveal data-reveal-delay="300">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <h3 className="font-headline font-bold text-on-surface">{t('contact.operatingHours')}</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-2 border-b border-surface-container-low">
                  <span className="text-on-surface-variant font-medium">{t('contact.monSatMobile')}</span>
                  <span className="font-bold text-primary">{t('contact.operatingTime')}</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="text-on-surface-variant font-medium">{t('common.sunday')}</span>
                  <span className="font-bold text-error">{t('common.closed')}</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
