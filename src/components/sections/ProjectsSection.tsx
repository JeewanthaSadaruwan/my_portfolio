import { Code2, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import { buttonVariants } from '@/components/ui/button-variants'

function ProjectCardImage({
  src,
  alt,
  objectPosition,
  objectFit,
}: {
  src: string
  alt: string
  objectPosition?: string
  objectFit?: 'cover' | 'contain'
}) {
  return (
    <div className="project-card-image">
      <img
        src={src}
        alt={alt}
        width="720"
        height="450"
        loading="lazy"
        style={{
          ...(objectPosition ? { objectPosition } : {}),
          ...(objectFit ? { objectFit } : {}),
        }}
        onError={(event) => {
          event.currentTarget.hidden = true
          event.currentTarget.parentElement?.classList.add('is-missing')
        }}
      />
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section container projects-section" aria-labelledby="projects-title">
      <div className="projects-header" data-reveal>
        <h2 id="projects-title">Projects</h2>
        <p>Selected work across robotics, artificial intelligence, embedded systems, and autonomous software.</p>
      </div>

      <div className="project-grid">
        {portfolio.projects.map((project, index) => {
          const repositoryLink = project.links.find((link) => link.type === 'repository')

          return (
            <article
              className={`surface-card project-card project-accent-${project.accent} ${project.featured ? 'project-card-featured' : ''}`}
              key={project.slug}
              data-reveal
            >
              <ProjectCardImage
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                objectPosition={project.coverImage.objectPosition}
                objectFit={project.coverImage.objectFit}
              />
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.cardDescription}</p>
                <div className="chip-list">
                  {project.technologies.slice(0, project.featured ? 5 : 4).map((technology) => (
                    <span className="chip" key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-card-actions">
                  <Link
                    className={`${buttonVariants({ variant: 'secondary', size: 'sm' })} experience-card-action`}
                    to={`/projects/${project.slug}`}
                  >
                    View Project
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                  {repositoryLink ? (
                    <a href={repositoryLink.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} repository`}>
                      <Code2 aria-hidden="true" size={17} />
                    </a>
                  ) : null}
                </div>
                {index < 2 ? <span className="project-feature-label">Featured</span> : null}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
