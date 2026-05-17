import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RatesPage from './pages/RatesPage'
import MaterialsPage from './pages/MaterialsPage'
import ContactPage from './pages/ContactPage'

const PAGE_TITLES = {
  '/': 'Bharat Scrap — Scrap Dealer in Sedam, Karnataka',
  '/about': 'About Us | Bharat Scrap',
  '/rates': 'Scrap Rates Today | Bharat Scrap Sedam',
  '/materials': 'Materials We Buy | Bharat Scrap',
  '/contact': 'Contact Us | Bharat Scrap Sedam',
}

function ScrollReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    }, 50)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [pathname])
  return null
}

function TitleUpdater() {
  const { pathname } = useLocation()
  useEffect(() => {
    const title = PAGE_TITLES[pathname] ?? 'Bharat Scrap | Scrap Dealer in Sedam, Karnataka'
    document.title = title
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <TitleUpdater />
      <ScrollReveal />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="rates" element={<RatesPage />} />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}
