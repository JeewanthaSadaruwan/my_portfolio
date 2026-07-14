import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useState, type CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import type { ProjectImage, ProjectMedia } from '@/types/portfolio'

type GalleryImage = ProjectImage & { id: string; type: 'image' }

function isGalleryImage(media: ProjectMedia): media is GalleryImage {
  return media.type === 'image' && media.gallery !== false
}

function ProjectGalleryItem({ image }: { image: GalleryImage }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return null
  }

  return (
    <a
      className="experience-gallery-page-item"
      href={image.src}
      target="_blank"
      rel="noopener noreferrer"
      style={image.width && image.height ? { '--gallery-image-aspect': `${image.width} / ${image.height}` } as CSSProperties : undefined}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width ?? 1200}
        height={image.height ?? 675}
        loading="lazy"
        style={{ objectPosition: image.objectPosition }}
        onError={() => setFailed(true)}
      />
      <span>
        Open image
        <ExternalLink aria-hidden="true" size={15} />
      </span>
    </a>
  )
}

export function ProjectGalleryPage() {
  const { slug } = useParams()
  const project = portfolio.projects.find((item) => item.slug === slug)
  const galleryImages = project?.media.filter(isGalleryImage) ?? []

  if (!project) {
    return (
      <main id="main-content" className="container route-page">
        <p className="eyebrow">Gallery not found</p>
        <h1>That project gallery does not exist.</h1>
        <Link className="back-link" to="/#projects">
          <ArrowLeft aria-hidden="true" size={18} />
          Back to Projects
        </Link>
      </main>
    )
  }

  return (
    <main id="main-content" className={`container route-page experience-gallery-page project-accent-${project.accent}`}>
      <Link className="back-link" to={`/projects/${project.slug}`}>
        <ArrowLeft aria-hidden="true" size={18} />
        Back to Project
      </Link>

      <header className="experience-gallery-header">
        <p className="project-detail-kicker">{project.category}</p>
        <h1>Project Gallery</h1>
        <p>Selected visuals from {project.title}.</p>
      </header>

      <div className="experience-gallery-page-grid">
        {galleryImages.map((image) => (
          <ProjectGalleryItem image={image} key={image.id} />
        ))}
      </div>
    </main>
  )
}
