import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ExperienceHeroCollage } from '@/components/experience/ExperienceHeroCollage'
import { portfolio } from '@/data/portfolio'
import type { ExperienceMedia, ExperienceMediaImage, ExperienceMediaVideo } from '@/types/portfolio'
import { buttonVariants } from '@/components/ui/button-variants'

interface ExperienceImageProps {
  image: ExperienceMediaImage
  className?: string
  width: number
  height: number
  loading?: 'eager' | 'lazy'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children?: ReactNode
}

function ExperienceImage({
  image,
  className,
  width,
  height,
  loading = 'lazy',
  onClick,
  children,
}: ExperienceImageProps) {
  const [failed, setFailed] = useState(false)
  const content = failed ? (
    <span className="experience-image-placeholder" role="img" aria-label={image.alt}>
      <span>Media unavailable</span>
      <small>{image.caption}</small>
    </span>
  ) : (
    <img
      src={image.src}
      alt={image.alt}
      width={width}
      height={height}
      loading={loading}
      onError={() => setFailed(true)}
    />
  )

  if (onClick) {
    return (
      <figure className={className}>
        <button className="experience-image-button" type="button" onClick={onClick}>
          {content}
          {children}
        </button>
        <figcaption>{image.caption}</figcaption>
      </figure>
    )
  }

  return (
    <figure className={className}>
      <div className="experience-image-static">{content}</div>
      <figcaption>
        {children}
        {image.caption}
      </figcaption>
    </figure>
  )
}

function ExperienceVideo({ video }: { video: ExperienceMediaVideo }) {
  return (
    <figure className="experience-video-frame">
      <div className="experience-video-embed">
        <iframe
          title={video.title}
          src={video.embedUrl}
          loading="lazy"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <figcaption>
        <strong>{video.title}</strong>
        <span>{video.caption}</span>
        <a href={video.externalUrl} target="_blank" rel="noopener noreferrer">
          Open video
          <ExternalLink aria-hidden="true" size={15} />
        </a>
      </figcaption>
    </figure>
  )
}

function isImage(media: ExperienceMedia): media is ExperienceMediaImage {
  return media.type === 'image'
}

function isVideo(media: ExperienceMedia): media is ExperienceMediaVideo {
  return media.type === 'video'
}

export function ExperiencePage() {
  const { slug } = useParams()
  const experience = portfolio.experience.find((item) => item.slug === slug)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const lightboxTriggerRef = useRef<HTMLButtonElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const imageMedia = useMemo(
    () => experience?.media.filter(isImage) ?? [],
    [experience],
  )

  const heroCollageImages = useMemo(
    () =>
      ['cover', 'navigation-test', 'isaac-sim-go2']
        .map((id) => imageMedia.find((image) => image.id === id))
        .filter((image): image is ExperienceMediaImage => Boolean(image)),
    [imageMedia],
  )

  const activeImage = imageMedia[activeImageIndex]
  const mediaById = useMemo(() => {
    const map = new Map<string, ExperienceMedia>()
    experience?.media.forEach((media) => map.set(media.id, media))
    return map
  }, [experience])

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

  const openLightbox = (image: ExperienceMediaImage, trigger: HTMLButtonElement) => {
    const imageIndex = imageMedia.findIndex((item) => item.id === image.id)
    setActiveImageIndex(Math.max(imageIndex, 0))
    lightboxTriggerRef.current = trigger
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  useEffect(() => {
    if (!experience) {
      return undefined
    }

    const previousTitle = document.title
    const description = 'Work on Unitree Go2 autonomous navigation, embodied-agent integration, robotic manipulation, and cloud-based robotics simulation during my Robotics & AI internship at WSO2.'
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = meta?.content

    document.title = 'Robotics & AI Internship at WSO2 | Jeewantha Sadaruwan'
    if (meta) {
      meta.content = description
    }

    return () => {
      document.title = previousTitle
      if (meta && previousDescription !== undefined) {
        meta.content = previousDescription
      }
    }
  }, [experience])

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
        closeLightbox()
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

  if (!experience) {
    return (
      <main id="main-content" className="container route-page">
        <p className="eyebrow">Experience not found</p>
        <h1>That experience page does not exist.</h1>
        <p>Check the experience section for available entries.</p>
        <Link className={buttonVariants({ variant: 'primary' })} to="/#experience">
          <ArrowLeft aria-hidden="true" size={18} />
          Back to Experience
        </Link>
      </main>
    )
  }

  const renderMedia = (mediaIds: string[] = []) => {
    const mediaItems = mediaIds
      .map((id) => mediaById.get(id))
      .filter((media): media is ExperienceMedia => Boolean(media))

    if (!mediaItems.length) {
      return null
    }

    return (
      <div className="experience-section-media">
        {mediaItems.map((media) => {
          if (isVideo(media)) {
            return <ExperienceVideo key={media.id} video={media} />
          }

          return (
            <ExperienceImage
              key={media.id}
              image={media}
              className="experience-media-figure"
              width={1120}
              height={700}
              onClick={(event) => openLightbox(media, event.currentTarget)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <main id="main-content" className="container route-page experience-detail-page">
      <div className="experience-hero-layout">
        <div className="experience-hero-copy">
          <Link className="back-link" to="/#experience">
            <ArrowLeft aria-hidden="true" size={18} />
            Back to Experience
          </Link>

          <header className="experience-detail-header">
            <p className="experience-kicker">{experience.dateLabel} · {experience.location}</p>
            <h1>{experience.role}</h1>
            <a href={experience.organizationLink} target="_blank" rel="noopener noreferrer">
              {experience.organization}
              <ExternalLink aria-hidden="true" size={16} />
            </a>
            <p>{experience.detailIntroduction}</p>
            <div className="chip-list experience-header-tags" aria-label="Technologies used">
              {experience.summaryTechnologies.map((technology) => (
                <span className="chip" key={technology}>{technology}</span>
              ))}
            </div>
          </header>
        </div>

        <ExperienceHeroCollage images={heroCollageImages} onOpenImage={openLightbox} />
      </div>

      <section className="experience-story-section" aria-labelledby="experience-overview">
        <h2 id="experience-overview">Overview</h2>
        {experience.projectIntroduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {experience.storySections.map((section) => (
        <section className="experience-story-section experience-wide-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
          <div className="experience-readable">
            {section.eyebrow ? <p className="experience-section-label">{section.eyebrow}</p> : null}
            <h2 id={`${section.id}-heading`}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.highlights?.length ? (
              <ul className="experience-marker-list">
                {section.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
            {section.links?.length ? (
              <div className="experience-link-row">
                {section.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <ExternalLink aria-hidden="true" size={16} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {renderMedia(section.mediaIds)}
        </section>
      ))}

      <section className="experience-story-section experience-wide-section" aria-labelledby="experience-additional-work">
        <div className="experience-readable">
          <h2 id="experience-additional-work">Additional Work</h2>
        </div>
        <div className="experience-supporting-grid">
          {experience.supportingWork.map((work) => (
            <article className="experience-supporting-item" key={work.title}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <ul className="experience-compact-list">
                {work.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {work.links?.length ? (
                <div className="experience-link-row">
                  {work.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <ExternalLink aria-hidden="true" size={16} />
                    </a>
                  ))}
                </div>
              ) : null}
              {renderMedia(work.mediaIds)}
            </article>
          ))}
        </div>
      </section>

      <section className="experience-story-section" aria-labelledby="experience-outcomes">
        <h2 id="experience-outcomes">Outcomes</h2>
        <p>{experience.outcomesIntro}</p>
        <ul className="experience-marker-list">
          {experience.validationOutcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>

      <section className="experience-story-section" aria-labelledby="experience-learning">
        <h2 id="experience-learning">What I Learned</h2>
        {experience.learningParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="experience-technology-list" aria-label="Learning areas">
          {experience.learningTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>

      <section className="experience-story-section experience-wide-section" aria-labelledby="experience-tech">
        <div className="experience-readable">
          <h2 id="experience-tech">Technologies & Resources</h2>
        </div>
        <ul className="experience-technology-list" aria-label="Technologies and resources">
          {experience.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="experience-resource-list">
          {experience.resources.map((resource) => (
            <a key={resource.href} href={resource.href} target="_blank" rel="noopener noreferrer">
              {resource.label}
              <ExternalLink aria-hidden="true" size={16} />
            </a>
          ))}
        </div>
      </section>

      <p className="experience-confidentiality-note">{experience.confidentialityNote}</p>

      {lightboxOpen && activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Experience image viewer">
          <button
            className="lightbox-close"
            type="button"
            ref={closeButtonRef}
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            <X aria-hidden="true" size={22} />
          </button>
          <button className="lightbox-nav lightbox-nav-prev" type="button" onClick={showPreviousImage} aria-label="Previous image">
            <ChevronLeft aria-hidden="true" size={26} />
          </button>
          <div className="lightbox-figure">
            <ExperienceImage image={activeImage} className="lightbox-image-frame" width={1400} height={900}>
              <span>{activeImageIndex + 1} / {imageMedia.length}</span>
            </ExperienceImage>
          </div>
          <button className="lightbox-nav lightbox-nav-next" type="button" onClick={showNextImage} aria-label="Next image">
            <ChevronRight aria-hidden="true" size={26} />
          </button>
        </div>
      ) : null}
    </main>
  )
}
