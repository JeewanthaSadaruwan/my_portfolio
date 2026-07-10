import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeSection = useActiveSection(sectionIds)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const goToSection = (id: string) => {
    setMenuOpen(false)

    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goToTop = () => {
    setMenuOpen(false)

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={cn('site-header', scrolled && 'is-scrolled')}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link to="/" className="brand" aria-label={`${portfolio.name} home`} onClick={goToTop}>
          <span>{portfolio.name}</span>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cn(activeSection === item.id && location.pathname === '/' && 'active')}
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun aria-hidden="true" size={19} /> : <Moon aria-hidden="true" size={19} />}
          </button>
          <a
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'resume-link')}
            href={portfolio.resumePath}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <button
            type="button"
            className="icon-button menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={cn('mobile-menu', menuOpen && 'open')}>
        {navItems.map((item) => (
          <button key={item.id} type="button" onClick={() => goToSection(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
    </header>
  )
}
