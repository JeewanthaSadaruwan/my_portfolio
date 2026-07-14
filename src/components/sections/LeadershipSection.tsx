import { portfolio } from '@/data/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'

const placeholderCards = Array.from({ length: 3 }, (_, index) => ({
  id: `leadership-placeholder-${index + 1}`,
  label: `Leadership ${String(index + 1).padStart(2, '0')}`,
}))

export function LeadershipSection() {
  const hasLeadershipContent = portfolio.leadership.length > 0

  return (
    <section id="leadership" className="section container leadership-section" aria-labelledby="leadership-title">
      <SectionHeader
        eyebrow="Leadership"
        title="Leadership"
        description="Leadership roles, responsibilities, and community contributions."
        headingId="leadership-title"
      />

      <div className="achievement-grid leadership-grid">
        {hasLeadershipContent
          ? portfolio.leadership.map((item) => (
              <article className="surface-card achievement-card" key={`${item.title}-${item.date}`} data-reveal>
                <div className="achievement-card-content">
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.date}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))
          : placeholderCards.map((card) => (
              <article className="surface-card achievement-card leadership-placeholder-card" key={card.id} data-reveal>
                <div className="achievement-card-content">
                  <span>{card.label}</span>
                  <h3>Leadership role</h3>
                  <p>Details will be added here.</p>
                </div>
              </article>
            ))}
      </div>
    </section>
  )
}
