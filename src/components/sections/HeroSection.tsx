import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from '@/data/portfolio'
import { buttonVariants } from '@/components/ui/button-variants'
import { SocialLinks } from '@/components/shared/SocialLinks'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)
  const heroRoles = portfolio.heroRoles.length
    ? portfolio.heroRoles
    : portfolio.secondaryRoles.map((role) => ({
        label: role,
        image: {
          src: '',
          alt: `${portfolio.name} profile placeholder`,
        },
      }))
  const activeRole = heroRoles[activeRoleIndex]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || heroRoles.length < 2) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveRoleIndex((currentIndex) => (currentIndex + 1) % heroRoles.length)
    }, 2400)

    return () => window.clearInterval(intervalId)
  }, [heroRoles.length])

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <h1 id="hero-title">{portfolio.name}</h1>
          <p className="hero-role-rotator" aria-live="polite">
            {activeRole.label}
          </p>
          <p className="hero-main-role">{portfolio.mainRole}</p>
          <p className="hero-lede">{portfolio.headline}</p>
          <p className="hero-intro">{portfolio.introduction}</p>
          <div className="hero-actions">
            <a className={buttonVariants({ variant: 'primary' })} href="#projects">
              <ExternalLink aria-hidden="true" size={18} />
              View My Work
            </a>
          </div>
          <div className="hero-secondary-links">
            <a
              className={buttonVariants({ variant: 'secondary' })}
              href={portfolio.resumePath}
              target="_blank"
              rel="noreferrer"
            >
              <Download aria-hidden="true" size={18} />
              Download Resume
            </a>
            <SocialLinks links={portfolio.socials} />
          </div>
        </div>

        <div className="profile-panel" data-reveal>
          <div className="profile-frame">
            {activeRole.image.src ? (
              <img
                className="profile-image"
                src={activeRole.image.src}
                alt={activeRole.image.alt}
                width="720"
                height="828"
                decoding="async"
                fetchPriority={activeRoleIndex === 0 ? 'high' : 'auto'}
              />
            ) : (
              <div className="profile-placeholder">
                <span>{portfolio.initials}</span>
                <p>TODO: Replace with a professional profile image</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <a href="#about" className={cn('scroll-cue')} aria-label="Scroll to about section">
        <ArrowDown aria-hidden="true" size={18} />
      </a>
    </section>
  )
}
