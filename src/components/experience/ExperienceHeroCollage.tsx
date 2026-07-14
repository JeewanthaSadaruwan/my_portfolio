import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
export interface HeroCollageImage {
  id: string
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

interface ExperienceHeroCollageProps<T extends HeroCollageImage> {
  images: T[]
  onOpenImage: (image: T, trigger: HTMLButtonElement) => void
  ariaLabel?: string
}

export function ExperienceHeroCollage<T extends HeroCollageImage>({
  images,
  onOpenImage,
  ariaLabel = 'Selected project media',
}: ExperienceHeroCollageProps<T>) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % images.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [images.length])

  if (!images.length) {
    return null
  }

  const visibleImages = [
    images[activeImageIndex],
    images[(activeImageIndex + 1) % images.length],
    images[(activeImageIndex + 2) % images.length],
  ].filter((image): image is T => Boolean(image))

  return (
    <div className="experience-hero-collage" aria-label={ariaLabel}>
      {visibleImages.slice(0, 3).map((image, index) => (
        <button
          className={`experience-collage-card experience-collage-card-${index + 1}`}
          key={image.id}
          type="button"
          style={{
            '--collage-index': index,
            '--collage-aspect': image.width && image.height ? `${image.width} / ${image.height}` : '16 / 10.6',
          } as CSSProperties}
          onClick={(event) => onOpenImage(image, event.currentTarget)}
          aria-label={`View image: ${image.caption ?? image.alt}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={image.width ?? 520}
            height={image.height ?? 340}
            loading={index === 0 ? 'eager' : 'lazy'}
            onError={(event) => {
              event.currentTarget.hidden = true
            }}
          />
        </button>
      ))}
    </div>
  )
}
