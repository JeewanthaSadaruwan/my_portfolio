import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import type { ExperienceMediaImage } from '@/types/portfolio'

interface CollageImage extends ExperienceMediaImage {
  width?: number
  height?: number
}

interface ExperienceHeroCollageProps {
  images: CollageImage[]
  onOpenImage: (image: ExperienceMediaImage, trigger: HTMLButtonElement) => void
}

export function ExperienceHeroCollage({ images, onOpenImage }: ExperienceHeroCollageProps) {
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
  ].filter((image): image is ExperienceMediaImage => Boolean(image))

  return (
    <div className="experience-hero-collage" aria-label="Selected WSO2 internship media">
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
          aria-label={`View image: ${image.caption}`}
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
