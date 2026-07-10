import { ExternalLink } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function ExperienceSection() {
  return (
    <section id="experience" className="section container" aria-labelledby="experience-title">
      <SectionHeader
        eyebrow="Experience"
        title="Structured for internships, projects, and contributions."
        description="Replace the example item with real roles, freelance work, open-source work, or university project experience."
      />
      <div className="timeline" id="experience-title">
        {portfolio.experience.map((item) => (
          <article className="surface-card timeline-item" key={`${item.role}-${item.organization}`} data-reveal>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-meta">
              <span>{item.startDate} - {item.endDate}</span>
              <span>{item.location}</span>
            </div>
            <div className="timeline-content">
              {item.example ? <p className="example-label">Example entry</p> : null}
              <h3>{item.role}</h3>
              <a href={item.organizationLink} target="_blank" rel="noreferrer">
                {item.organization}
                <ExternalLink aria-hidden="true" size={14} />
              </a>
              <p>{item.description}</p>
              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="chip-list">
                {item.technologies.map((technology) => (
                  <span className="chip" key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
