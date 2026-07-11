import { type CSSProperties, useState } from 'react'
import { ArrowUpRight, Building2, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'
import wso2OfficeImage from '../../assets/images/experience/wso2.jpeg'

const wso2RobotCutout = '/media/experience/wso2/robot/unitree-go2-cutout.webp'

export function ExperienceSection() {
  const [hiddenRobotVisuals, setHiddenRobotVisuals] = useState<Set<string>>(() => new Set())

  const hideRobotVisual = (slug: string) => {
    setHiddenRobotVisuals((current) => {
      const next = new Set(current)
      next.add(slug)
      return next
    })
  }

  return (
    <section id="experience" className="section container" aria-labelledby="experience-title">
      <div className="section-header experience-section-header" data-reveal>
        <h2 id="experience-title">Experience</h2>
      </div>
      <div className="experience-card-list">
        {portfolio.experience.map((item) => {
          const isWso2Experience = item.slug === 'wso2-robotics-ai-intern'
          const hasRobotVisual = isWso2Experience && !hiddenRobotVisuals.has(item.slug)
          const cardStyle = isWso2Experience
            ? ({
                '--experience-office-image': `url("${wso2OfficeImage}")`,
              } as CSSProperties)
            : undefined

          return (
            <article
              className={`surface-card experience-card${isWso2Experience ? ' experience-card-with-office' : ''}${hasRobotVisual ? ' experience-card-with-robot' : ''}`}
              key={item.slug}
              data-reveal
              style={cardStyle}
            >
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

                <Link
                  className={cn(
                    buttonVariants({ variant: 'secondary' }),
                    isWso2Experience && 'experience-card-action',
                  )}
                  to={`/experience/${item.slug}`}
                >
                  View Full Experience
                  <ArrowUpRight aria-hidden="true" size={18} />
                </Link>
              </div>

              {hasRobotVisual ? (
                <div className="experience-card-robot-visual" aria-hidden="true">
                  <span className="experience-card-robot-radar" />
                  <img
                    src={wso2RobotCutout}
                    alt=""
                    width="474"
                    height="474"
                    loading="lazy"
                    decoding="async"
                    onError={() => hideRobotVisual(item.slug)}
                  />
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}
