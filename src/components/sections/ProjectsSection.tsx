import { Code2, ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import type { ProjectCategory } from '@/types/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

const filters: Array<ProjectCategory | 'All'> = ['All', 'Web', 'Mobile', 'AI/ML', 'Other']

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All')
  const projects = useMemo(
    () =>
      activeFilter === 'All'
        ? portfolio.projects
        : portfolio.projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )

  return (
    <section id="projects" className="section container" aria-labelledby="projects-title">
      <SectionHeader
        eyebrow="Projects"
        title="Case studies designed to show thinking and execution."
        description="Each project uses one typed data source for cards and detailed routes."
      />
      <div className="project-filters" role="tablist" aria-label="Project category filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            className={cn(activeFilter === filter && 'active')}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid" id="projects-title">
        {projects.map((project) => (
          <article className="surface-card project-card" key={project.slug} data-reveal>
            <img src={project.thumbnail.src} alt={project.thumbnail.alt} width="720" height="420" loading="lazy" />
            <div className="project-card-body">
              <div className="project-card-meta">
                <span>{project.category}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.shortSummary}</p>
              <div className="chip-list">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span className="chip" key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-card-actions">
                <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
                  <Code2 aria-hidden="true" size={17} />
                </a>
                <a href={project.liveDemoLink} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                  <ExternalLink aria-hidden="true" size={17} />
                </a>
                <Link className={buttonVariants({ variant: 'secondary', size: 'sm' })} to={`/projects/${project.slug}`}>
                  View Case Study
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
