import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import type { SocialLink } from '@/types/portfolio'

const icons = {
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
  Email: Mail,
}

interface SocialLinksProps {
  links: SocialLink[]
  compact?: boolean
}

export function SocialLinks({ links, compact = false }: SocialLinksProps) {
  return (
    <div className={compact ? 'social-links compact' : 'social-links'} aria-label="Social links">
      {links.map((link) => {
        const Icon = icons[link.platform]

        return (
          <a key={link.platform} href={link.href} target={link.platform === 'Email' ? undefined : '_blank'} rel="noreferrer">
            <Icon aria-hidden="true" size={18} />
            <span>{compact ? link.platform : link.label}</span>
          </a>
        )
      })}
    </div>
  )
}
