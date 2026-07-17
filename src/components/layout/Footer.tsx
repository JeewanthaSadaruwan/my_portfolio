import { ArrowUp } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { getCurrentYear } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <span>© {getCurrentYear()} {portfolio.name}.</span>
        <a href="#top" className="back-top">
          <ArrowUp aria-hidden="true" size={16} />
          Return to top
        </a>
      </div>
    </footer>
  )
}
