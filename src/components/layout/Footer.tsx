import { ArrowUp } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { getCurrentYear } from '@/lib/utils'
import { SocialLinks } from '@/components/shared/SocialLinks'

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a href="#top" className="brand footer-brand" aria-label="Back to top">
          <span>{portfolio.initials}</span>
        </a>
        <p>Built with React, TypeScript, Tailwind CSS, and thoughtful placeholders.</p>
      </div>
      <SocialLinks links={portfolio.socials} compact />
      <div className="footer-bottom">
        <span>© {getCurrentYear()} {portfolio.name}. Replace placeholder content before publishing.</span>
        <a href="#top" className="back-top">
          <ArrowUp aria-hidden="true" size={16} />
          Back to top
        </a>
      </div>
    </footer>
  )
}
