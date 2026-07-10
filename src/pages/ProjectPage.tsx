import { ArrowLeft, Code2, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import { buttonVariants } from '@/components/ui/button-variants'

export function ProjectPage() {
  const { slug } = useParams()
  const project = portfolio.projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main id="main-content" className="container route-page">
        <p className="eyebrow">Project not found</p>
        <h1>That case study does not exist.</h1>
        <p>Check the project list for available placeholder case studies.</p>
        <Link className={buttonVariants({ variant: 'primary' })} to="/#projects">
          <ArrowLeft aria-hidden="true" size={18} />
          Back to projects
        </Link>
      </main>
    )
  }

  return (
    <main id="main-content" className="container route-page project-detail">
      <Link className="back-link" to="/#projects">
        <ArrowLeft aria-hidden="true" size={18} />
        Back to projects
      </Link>

      <header className="project-detail-header">
        <div>
          <p className="eyebrow">{project.category} / {project.year}</p>
          <h1>{project.title}</h1>
          <p>{project.shortSummary}</p>
        </div>
        <div className="project-detail-actions">
          <a className={buttonVariants({ variant: 'secondary' })} href={project.githubLink} target="_blank" rel="noreferrer">
            <Code2 aria-hidden="true" size={18} />
            GitHub
          </a>
          <a className={buttonVariants({ variant: 'primary' })} href={project.liveDemoLink} target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden="true" size={18} />
            Live demo
          </a>
        </div>
      </header>

      <img className="detail-hero-image" src={project.thumbnail.src} alt={project.thumbnail.alt} width="1200" height="620" />

      <section className="detail-grid" aria-label="Project case study">
        <article className="surface-card">
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </article>
        <article className="surface-card">
          <h2>Solution</h2>
          <p>{project.solution}</p>
        </article>
        <article className="surface-card">
          <h2>Goals</h2>
          <ul>
            {project.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </article>
        <article className="surface-card">
          <h2>My contribution</h2>
          <p>{project.contribution}</p>
        </article>
        <article className="surface-card">
          <h2>Technical decisions</h2>
          <ul>
            {project.technicalDecisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </article>
        <article className="surface-card">
          <h2>Challenges</h2>
          <ul>
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </article>
        <article className="surface-card wide">
          <h2>Results</h2>
          <p>{project.outcome}</p>
          <div className="chip-list">
            {project.technologies.map((technology) => (
              <span className="chip" key={technology}>{technology}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <h2 id="gallery-title">Image gallery placeholder</h2>
        <div className="gallery-grid">
          {project.gallery.map((image) => (
            <img key={image.alt} src={image.src} alt={image.alt} width="640" height="380" loading="lazy" />
          ))}
        </div>
      </section>
    </main>
  )
}
