import type { CSSProperties } from 'react'
import type { ExperienceMediaImage } from '@/types/portfolio'

interface ExperienceHeroCollageProps {
  images: ExperienceMediaImage[]
  onOpenImage: (image: ExperienceMediaImage, trigger: HTMLButtonElement) => void
}

const collageLabels = ['Unitree Go2 Platform', 'Indoor Navigation', 'Isaac Sim Testing']

export function ExperienceHeroCollage({ images, onOpenImage }: ExperienceHeroCollageProps) {
  if (!images.length) {
    return null
  }

  return (
    <div className="experience-hero-collage" aria-label="Selected WSO2 internship media">
      {images.slice(0, 3).map((image, index) => (
        <button
          className={`experience-collage-card experience-collage-card-${index + 1}`}
          key={image.id}
          type="button"
          style={{ '--collage-index': index } as CSSProperties}
          onClick={(event) => onOpenImage(image, event.currentTarget)}
          aria-label={`View image: ${collageLabels[index] ?? image.caption}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={520}
            height={340}
            loading={index === 0 ? 'eager' : 'lazy'}
            onError={(event) => {
              event.currentTarget.hidden = true
            }}
          />
          <span>{collageLabels[index] ?? image.caption}</span>
          <em>View image</em>
        </button>
      ))}
    </div>
  )
}
