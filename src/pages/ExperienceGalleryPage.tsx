import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { portfolio } from '@/data/portfolio'
import type { ExperienceMedia, ExperienceMediaImage } from '@/types/portfolio'

const galleryImageIds = ['wso2-hero-img-1', 'wso2-hero-img-2', 'wso2-hero-img-3']

function isGalleryImage(media: ExperienceMedia): media is ExperienceMediaImage {
  return media.type === 'image' && galleryImageIds.includes(media.id)
}

export function ExperienceGalleryPage() {
  const { slug } = useParams()
  const experience = portfolio.experience.find((item) => item.slug === slug)
  const galleryImages = experience?.media.filter(isGalleryImage) ?? []

  if (!experience) {
    return (
      <main id="main-content" className="container route-page">
        <p className="eyebrow">Gallery not found</p>
        <h1>That gallery does not exist.</h1>
        <Link className="back-link" to="/#experience">
          <ArrowLeft aria-hidden="true" size={18} />
          Back to Experience
        </Link>
      </main>
    )
  }

  return (
    <main id="main-content" className="container route-page experience-gallery-page">
      <Link className="back-link" to={`/experience/${experience.slug}`}>
        <ArrowLeft aria-hidden="true" size={18} />
        Back to Experience
      </Link>

      <header className="experience-gallery-header">
        <p className="experience-kicker">{experience.organization}</p>
        <h1>Gallery</h1>
        <p>Selected WSO2 internship images.</p>
      </header>

      <div className="experience-gallery-page-grid">
        {galleryImages.map((image) => (
          <a
            className="experience-gallery-page-item"
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            key={image.id}
            style={image.width && image.height ? { '--gallery-image-aspect': `${image.width} / ${image.height}` } as CSSProperties : undefined}
          >
            <img src={image.src} alt={image.alt} width={image.width ?? 1200} height={image.height ?? 800} />
            <span>
              Open image
              <ExternalLink aria-hidden="true" size={15} />
            </span>
          </a>
        ))}
      </div>
    </main>
  )
}
