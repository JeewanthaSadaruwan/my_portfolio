import { MapPin, Target, Zap } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function AboutSection() {
  const facts = [
    { icon: MapPin, label: 'Location', value: portfolio.location },
    { icon: Target, label: 'Focus', value: 'Full-stack product thinking' },
    { icon: Zap, label: 'Availability', value: 'Internship and freelance ready' },
  ]

  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <SectionHeader
        eyebrow="About"
        title="A clear story, ready for your real details."
        description="This section is intentionally structured so you can replace placeholders without redesigning the page."
      />
      <div className="about-grid">
        <div className="surface-card about-copy" data-reveal>
          <h3 id="about-title">Developer profile</h3>
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="fact-grid" data-reveal>
          {facts.map((fact) => {
            const Icon = fact.icon
            return (
              <article className="surface-card fact-card" key={fact.label}>
                <Icon aria-hidden="true" size={20} />
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
