import { createContext, useContext, useState } from 'react'
import en from './en'
import kn from './kn'

const translations = { en, kn }

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = (key) => {
    const parts = key.split('.')
    let val = translations[lang]
    for (const p of parts) val = val?.[p]
    if (val !== undefined) return val
    let fb = translations.en
    for (const p of parts) fb = fb?.[p]
    return fb ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
