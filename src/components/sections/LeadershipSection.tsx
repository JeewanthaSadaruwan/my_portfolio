import { useState } from 'react'
import { portfolio } from '@/data/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'
import type { ProjectImage } from '@/types/portfolio'

function LeadershipImage({ image }: { image: ProjectImage }) {
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <div className="leadership-card-image">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

export function LeadershipSection() {
  return (
    <section id="leadership" className="section container leadership-section" aria-labelledby="leadership-title">
      <SectionHeader
        eyebrow="Leadership"
        title="Leadership"
        description="Leadership roles, responsibilities, and community contributions."
        headingId="leadership-title"
      />

      <div className="achievement-grid leadership-grid">
        {portfolio.leadership.map((item) => (
          <article className={`surface-card achievement-card leadership-card leadership-accent-${item.accent}`} key={`${item.title}-${item.period}`} data-reveal>
            {item.image ? <LeadershipImage image={item.image} /> : null}
            <div className="achievement-card-content leadership-card-content">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p className="muted">{item.period}</p>
              <p>{item.description}</p>
              {item.highlights.length ? (
                <ul className="leadership-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
