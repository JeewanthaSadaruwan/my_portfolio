import { useState } from 'react'
import { portfolio } from '@/data/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'
import type { ProjectImage } from '@/types/portfolio'

function AchievementImage({ image }: { image: ProjectImage }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="achievement-card-image">
      {failed ? (
        <span className="achievement-image-placeholder">Achievement image</span>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          style={{ objectPosition: image.objectPosition }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export function AchievementsSection() {
  const items = portfolio.achievements

  if (!items.length) {
    return null
  }

  return (
    <section id="achievements" className="section container achievements-section" aria-labelledby="achievements-title">
      <SectionHeader
        eyebrow="Achievements"
        title="Achievements"
        description="Competition results and engineering milestones."
        headingId="achievements-title"
      />
      <div className="achievement-grid">
        {items.map((item, index) => (
          <article className={`surface-card achievement-card achievement-accent-${(index % 3) + 1}`} key={`${item.title}-${item.type}`} data-reveal>
            {item.image ? <AchievementImage image={item.image} /> : null}
            <div className="achievement-card-content">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p className="muted">{item.date}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
