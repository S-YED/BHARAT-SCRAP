import { Outlet, useLocation } from 'react-router-dom'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import BottomNavBar from './BottomNavBar'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'
import WhatsAppFab from './WhatsAppFab'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* Desktop Navigation — hidden on mobile */}
      <DesktopHeader currentPath={location.pathname} />
      {/* Mobile Navigation — hidden on desktop */}
      <MobileHeader />

      {/* Page Content — offset for sticky headers */}
      <main className="pt-[4.5rem] md:pt-36">
        <Outlet />
      </main>

      {/* Footers */}
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
      <div className="md:hidden">
        <MobileFooter />
      </div>

      {/* WhatsApp FAB */}
      <WhatsAppFab />

      {/* Bottom Nav — mobile only */}
      <BottomNavBar currentPath={location.pathname} />
    </div>
  )
}
