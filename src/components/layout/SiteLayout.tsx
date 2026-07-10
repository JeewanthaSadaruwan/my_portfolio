import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export function SiteLayout() {
  return (
    <div id="top" className="app-shell">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
