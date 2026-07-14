import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin, Phone } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { buttonVariants } from '@/components/ui/button-variants'

export function ContactSection() {
  const github = portfolio.socials.find((social) => social.platform === 'GitHub')
  const linkedin = portfolio.socials.find((social) => social.platform === 'LinkedIn')
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.contact.email)}&su=${encodeURIComponent("Let's Connect")}`

  return (
    <section id="contact" className="section container contact-section" aria-labelledby="contact-title">
      <div className="surface-card contact-panel" data-reveal>
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Open to collaborate.</h2>
          <p>{portfolio.contact.availability}</p>
          <div className="contact-list">
            <a href={portfolio.contact.emailHref}><Mail aria-hidden="true" size={18} /> {portfolio.contact.email}</a>
            {linkedin ? <a href={linkedin.href} target="_blank" rel="noopener noreferrer"><BriefcaseBusiness aria-hidden="true" size={18} /> LinkedIn</a> : null}
            {github ? <a href={github.href} target="_blank" rel="noopener noreferrer"><Code2 aria-hidden="true" size={18} /> GitHub</a> : null}
            <a href={portfolio.contact.phoneHref}><Phone aria-hidden="true" size={18} /> {portfolio.contact.phone}</a>
            <span><MapPin aria-hidden="true" size={18} /> {portfolio.contact.location}</span>
          </div>
          <a
            className={`${buttonVariants()} contact-talk-button`}
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail aria-hidden="true" size={18} />
            Let&apos;s Talk
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
        <div className="contact-visual" aria-hidden="true">
          <span className="contact-visual-ring contact-visual-ring-outer" />
          <span className="contact-visual-ring contact-visual-ring-inner" />
          <span className="contact-visual-icon"><Mail size={36} /></span>
          <i className="contact-visual-dot contact-visual-dot-one" />
          <i className="contact-visual-dot contact-visual-dot-two" />
          <i className="contact-visual-dot contact-visual-dot-three" />
        </div>
      </div>
    </section>
  )
}
