import { ArrowUpRight, Building2, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import { buttonVariants } from '@/components/ui/button-variants'

export function ExperienceSection() {
  return (
    <section id="experience" className="section container" aria-labelledby="experience-title">
      <div className="section-header experience-section-header" data-reveal>
        <h2 id="experience-title">Experience</h2>
      </div>
      <div className="experience-card-list">
        {portfolio.experience.map((item) => (
          <article className="surface-card experience-card" key={item.slug} data-reveal>
            <div className="experience-meta-column">
              <span>{item.dateLabel}</span>
              <span>
                <MapPin aria-hidden="true" size={15} />
                {item.location}
              </span>
            </div>

            <div className="experience-card-content">
              <div className="experience-card-heading">
                <div>
                  <h3>{item.role}</h3>
                  <a href={item.organizationLink} target="_blank" rel="noreferrer">
                    <Building2 aria-hidden="true" size={16} />
                    {item.organization}
                  </a>
                </div>
              </div>

              <div className="experience-project-summary">
                <p className="experience-project-label">Main project</p>
                <h4>{item.projectTitle}</h4>
                <p>{item.summary}</p>
              </div>

              <ul className="experience-achievements">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <div className="chip-list">
                {item.summaryTechnologies.map((technology) => (
                  <span className="chip" key={technology}>{technology}</span>
                ))}
              </div>

              <Link className={buttonVariants({ variant: 'secondary' })} to={`/experience/${item.slug}`}>
                View Full Experience
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
