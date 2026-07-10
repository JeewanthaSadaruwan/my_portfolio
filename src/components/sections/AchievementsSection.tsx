import { portfolio } from '@/data/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function AchievementsSection() {
  const items = [...portfolio.achievements, ...portfolio.leadership]

  if (!items.length) {
    return null
  }

  return (
    <section className="section container" aria-labelledby="achievements-title">
      <SectionHeader
        eyebrow="Leadership"
        title="Achievements, community, and initiative."
        description="This section hides automatically if the achievement arrays are empty."
      />
      <div className="achievement-grid" id="achievements-title">
        {items.map((item) => (
          <article className="surface-card achievement-card" key={`${item.title}-${item.type}`} data-reveal>
            <span>{item.type}</span>
            <h3>{item.title}</h3>
            <p className="muted">{item.date}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
