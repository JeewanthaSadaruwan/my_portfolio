import { ArrowLeft, ChevronLeft, ChevronRight, Code2, ExternalLink, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import type { ProjectImage, ProjectMedia, ProjectVideo } from '@/types/portfolio'
import { buttonVariants } from '@/components/ui/button-variants'

function isProjectImage(media: ProjectMedia): media is ProjectImage & { id: string; type: 'image' } {
  return media.type === 'image'
}

function isProjectVideo(media: ProjectMedia): media is ProjectVideo {
  return media.type === 'video'
}

interface ProjectImageFrameProps {
  image: ProjectImage & { id?: string }
  className?: string
  width: number
  height: number
  loading?: 'eager' | 'lazy'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children?: ReactNode
}

function ProjectImageFrame({
  image,
  className,
  width,
  height,
  loading = 'lazy',
  onClick,
  children,
}: ProjectImageFrameProps) {
  const [failed, setFailed] = useState(false)
  const content = failed ? (
    <span className="project-media-placeholder" role="img" aria-label={image.alt}>
      <span>Project media unavailable</span>
      <small>{image.caption ?? image.alt}</small>
    </span>
  ) : (
    <img
      src={image.src}
      alt={image.alt}
      width={width}
      height={height}
      loading={loading}
      style={{ objectPosition: image.objectPosition }}
      onError={() => setFailed(true)}
    />
  )

  if (onClick) {
    return (
      <figure className={className}>
        <button className="project-media-button" type="button" onClick={onClick}>
          {content}
        </button>
        <figcaption>
          {children}
          {image.caption}
        </figcaption>
      </figure>
    )
  }

  return (
    <figure className={className}>
      <div className="project-media-static">{content}</div>
      <figcaption>
        {children}
        {image.caption}
      </figcaption>
    </figure>
  )
}

function ProjectVideoFrame({ video }: { video: ProjectVideo }) {
  return (
    <figure className="project-video-frame">
      {video.embedUrl ? (
        <div className="project-video-embed">
          <iframe
            title={video.title}
            src={video.embedUrl}
            loading="lazy"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      ) : video.src ? (
        <video controls preload="metadata" poster={video.poster}>
          <source src={video.src} />
        </video>
      ) : null}
      <figcaption>
        <strong>{video.title}</strong>
        <span>{video.caption}</span>
        {video.externalUrl ? (
          <a href={video.externalUrl} target="_blank" rel="noopener noreferrer">
            Open video
            <ExternalLink aria-hidden="true" size={15} />
          </a>
        ) : null}
      </figcaption>
    </figure>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = portfolio.projects.find((item) => item.slug === slug)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const lightboxTriggerRef = useRef<HTMLButtonElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const imageMedia = useMemo(
    () => project?.media.filter(isProjectImage) ?? [],
    [project],
  )
  const mediaById = useMemo(() => {
    const map = new Map<string, ProjectMedia>()
    project?.media.forEach((media) => map.set(media.id, media))
    return map
  }, [project])
  const activeImage = imageMedia[activeImageIndex]

  const showPreviousImage = useCallback(() => {
    if (!imageMedia.length) {
      return
    }

    setActiveImageIndex((current) => (current === 0 ? imageMedia.length - 1 : current - 1))
  }, [imageMedia.length])

  const showNextImage = useCallback(() => {
    if (!imageMedia.length) {
      return
    }

    setActiveImageIndex((current) => (current === imageMedia.length - 1 ? 0 : current + 1))
  }, [imageMedia.length])

  const openLightbox = (image: ProjectImage & { id: string }, trigger: HTMLButtonElement) => {
    const imageIndex = imageMedia.findIndex((item) => item.id === image.id)
    setActiveImageIndex(Math.max(imageIndex, 0))
    lightboxTriggerRef.current = trigger
    setLightboxOpen(true)
  }

  useEffect(() => {
    if (!project) {
      return undefined
    }

    const previousTitle = document.title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = meta?.content

    document.title = project.seoTitle
    if (meta) {
      meta.content = project.seoDescription
    }

    return () => {
      document.title = previousTitle
      if (meta && previousDescription !== undefined) {
        meta.content = previousDescription
      }
    }
  }, [project])

  useEffect(() => {
    if (!lightboxOpen) {
      lightboxTriggerRef.current?.focus()
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) {
      return undefined
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxOpen(false)
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage()
      }

      if (event.key === 'ArrowRight') {
        showNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, showNextImage, showPreviousImage])

  if (!project) {
    return (
      <main id="main-content" className="container route-page">
        <p className="eyebrow">Project not found</p>
        <h1>That project page does not exist.</h1>
        <p>Check the project list for available case studies.</p>
        <Link className={buttonVariants({ variant: 'primary' })} to="/#projects">
          <ArrowLeft aria-hidden="true" size={18} />
          Back to Projects
        </Link>
      </main>
    )
  }

  const renderMedia = (mediaIds: string[] = []) => {
    const mediaItems = mediaIds
      .map((id) => mediaById.get(id))
      .filter((media): media is ProjectMedia => Boolean(media))

    if (!mediaItems.length) {
      return null
    }

    return (
      <div className="project-detail-media-grid">
        {mediaItems.map((media) =>
          isProjectVideo(media) ? (
            <ProjectVideoFrame key={media.id} video={media} />
          ) : (
            <ProjectImageFrame
              key={media.id}
              image={media}
              className="project-detail-media"
              width={980}
              height={620}
              onClick={(event) => openLightbox(media, event.currentTarget)}
            />
          ),
        )}
      </div>
    )
  }

  const repositoryLink = project.links.find((link) => link.type === 'repository')
  const demoLink = project.links.find((link) => link.type === 'demo')

  return (
    <main id="main-content" className={`container route-page project-detail project-accent-${project.accent}`}>
      <Link className="back-link" to="/#projects">
        <ArrowLeft aria-hidden="true" size={18} />
        Back to Projects
      </Link>

      <header className="project-detail-hero">
        <div className="project-detail-copy">
          <p className="project-detail-kicker">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.heroSummary}</p>
          <div className="project-detail-meta-row">
            <span>{project.dateLabel}</span>
            <span>{project.status}</span>
          </div>
          <div className="chip-list">
            {project.technologies.slice(0, 6).map((technology) => (
              <span className="chip" key={technology}>{technology}</span>
            ))}
          </div>
          <div className="project-detail-actions">
            {repositoryLink ? (
              <a className={buttonVariants({ variant: 'secondary' })} href={repositoryLink.href} target="_blank" rel="noopener noreferrer">
                <Code2 aria-hidden="true" size={18} />
                {repositoryLink.label}
              </a>
            ) : null}
            {demoLink ? (
              <a className={buttonVariants({ variant: 'primary' })} href={demoLink.href} target="_blank" rel="noopener noreferrer">
                <ExternalLink aria-hidden="true" size={18} />
                {demoLink.label}
              </a>
            ) : null}
          </div>
        </div>

        <ProjectImageFrame
          image={{ ...project.coverImage, id: 'cover' }}
          className="project-detail-cover"
          width={980}
          height={620}
          loading="eager"
          onClick={(event) => {
            const coverImage = imageMedia.find((image) => image.id === 'cover')
            if (coverImage) {
              openLightbox(coverImage, event.currentTarget)
            }
          }}
        />
      </header>

      {project.sections.map((section) => (
        <section className="project-story-section" key={section.id} aria-labelledby={`${section.id}-heading`}>
          {section.eyebrow ? <p className="project-detail-kicker">{section.eyebrow}</p> : null}
          <h2 id={`${section.id}-heading`}>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.flow?.length ? (
            <ol className="project-flow-list" aria-label={`${section.heading} flow`}>
              {section.flow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : null}
          {section.bullets?.length ? (
            <ul className="project-marker-list">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {renderMedia(section.mediaIds)}
        </section>
      ))}

      <section className="project-story-section" aria-labelledby="project-technologies">
        <h2 id="project-technologies">Technologies</h2>
        <ul className="project-tech-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      {project.links.length ? (
        <section className="project-story-section" aria-labelledby="project-links">
          <h2 id="project-links">Links and Resources</h2>
          <div className="project-resource-list">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.type === 'repository' ? <Code2 aria-hidden="true" size={18} /> : <ExternalLink aria-hidden="true" size={18} />}
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {lightboxOpen && activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image viewer">
          <button
            className="lightbox-close"
            type="button"
            ref={closeButtonRef}
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image viewer"
          >
            <X aria-hidden="true" size={22} />
          </button>
          <button className="lightbox-nav lightbox-nav-prev" type="button" onClick={showPreviousImage} aria-label="Previous image">
            <ChevronLeft aria-hidden="true" size={26} />
          </button>
          <div className="lightbox-figure">
            <ProjectImageFrame image={activeImage} className="project-lightbox-image" width={1400} height={900}>
              <span>{activeImageIndex + 1} / {imageMedia.length}</span>
            </ProjectImageFrame>
          </div>
          <button className="lightbox-nav lightbox-nav-next" type="button" onClick={showNextImage} aria-label="Next image">
            <ChevronRight aria-hidden="true" size={26} />
          </button>
        </div>
      ) : null}
    </main>
  )
}
