import { GraduationCap } from 'lucide-react'
import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { portfolio } from '@/data/portfolio'
import type { EducationItem } from '@/types/portfolio'

const stageLabels = ['University', 'ESOFT', 'School']
const pathD =
  'M140 640 C360 430 510 230 760 210 C1110 182 1150 635 1430 655 C1740 680 1780 250 2140 230 C2470 212 2630 330 2860 260'
const educationImageModules = import.meta.glob<string>(
  '@/assets/images/education/*.{avif,jpeg,jpg,png,webp}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
)

const educationImages = Object.fromEntries(
  Object.entries(educationImageModules).map(([path, url]) => {
    const filename = path.split('/').pop() ?? ''
    const id = filename.replace(/\.(avif|jpe?g|png|webp)$/i, '')
    return [id, url]
  }),
)

const educationImageAliases: Record<string, string> = {
  'university-of-moratuwa': 'entc',
}

function EducationEntryCard({ item, index }: { item: EducationItem; index: number }) {
  const imageUrl = educationImages[item.id] ?? educationImages[educationImageAliases[item.id]]
  const imageStyle = imageUrl
    ? ({ '--education-image': `url("${imageUrl}")` } as CSSProperties)
    : undefined

  return (
    <article
      className={`education-entry education-stage-${index + 1}`}
      data-has-image={Boolean(imageUrl)}
      data-stage-card={index}
      style={imageStyle}
    >
      <div className="education-entry-meta">
        <span className="education-icon">
          <GraduationCap aria-hidden="true" size={20} />
        </span>
        <span>{item.date}</span>
      </div>
      <h3>{item.qualification}</h3>
      {item.status ? <p className="education-entry-accent">{item.status}</p> : null}
      {item.credential ? <p className="education-entry-accent">{item.credential}</p> : null}
      <p className="education-institution">{item.institution}</p>
      <p>{item.description}</p>
      <div className="chip-list">
        {item.tags.map((tag) => (
          <span className="chip" key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}

export function EducationSection() {
  const scrollRegionRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressPathRef = useRef<SVGPathElement>(null)
  const [activeStage, setActiveStage] = useState(0)
  const [horizontalEnabled, setHorizontalEnabled] = useState(false)

  useEffect(() => {
    const scrollRegion = scrollRegionRef.current
    const viewport = viewportRef.current
    const track = trackRef.current
    const progressPath = progressPathRef.current

    if (!scrollRegion || !viewport || !track || !progressPath) {
      return undefined
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const widthQuery = window.matchMedia('(min-width: 900px)')
    let frame = 0
    let horizontalDistance = 0
    let pathLength = 0
    let enabled = false

    const setTrack = (progress: number) => {
      const clamped = Math.min(Math.max(progress, 0), 1)
      track.style.transform = `translate3d(${-horizontalDistance * clamped}px, 0, 0)`
      progressPath.style.strokeDashoffset = `${pathLength * (1 - clamped)}`
      const nextStage = Math.min(2, Math.max(0, Math.round(clamped * 2)))
      setActiveStage((current) => (current === nextStage ? current : nextStage))
      scrollRegion.dataset.stage = String(nextStage + 1)
    }

    const measure = () => {
      enabled = widthQuery.matches && !motionQuery.matches
      setHorizontalEnabled(enabled)
      pathLength = progressPath.getTotalLength()
      progressPath.style.strokeDasharray = `${pathLength}`

      if (!enabled) {
        scrollRegion.style.height = 'auto'
        track.style.transform = 'none'
        progressPath.style.strokeDashoffset = '0'
        scrollRegion.dataset.stage = '1'
        return
      }

      const viewportHeight = viewport.getBoundingClientRect().height
      horizontalDistance = Math.max(0, track.scrollWidth - viewport.clientWidth)
      scrollRegion.style.height = `${viewportHeight + horizontalDistance}px`
      setTrack(getProgress())
    }

    const getProgress = () => {
      if (!enabled || horizontalDistance <= 0) {
        return 0
      }

      const headerOffset = 76
      const rect = scrollRegion.getBoundingClientRect()
      const travelled = headerOffset - rect.top
      return travelled / horizontalDistance
    }

    const update = () => {
      frame = 0
      setTrack(getProgress())
    }

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update)
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      measure()
      requestUpdate()
    })

    resizeObserver.observe(viewport)
    resizeObserver.observe(track)
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', measure)
    widthQuery.addEventListener('change', measure)
    motionQuery.addEventListener('change', measure)
    document.fonts?.ready.then(measure).catch(() => undefined)
    measure()

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      resizeObserver.disconnect()
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', measure)
      widthQuery.removeEventListener('change', measure)
      motionQuery.removeEventListener('change', measure)
    }
  }, [])

  return (
    <section className="section education-section" aria-labelledby="education-title">
      <header className="container education-header" data-reveal>
        <h2 id="education-title">Education</h2>
        <p>My academic journey across engineering, information technology, and the physical sciences.</p>
      </header>

      <div
        className="education-scroll-region"
        ref={scrollRegionRef}
        data-horizontal={horizontalEnabled}
        data-stage={activeStage + 1}
      >
        <div className="education-sticky-viewport" ref={viewportRef}>
          <div className="education-compact-label" aria-hidden="true">
            <span>Education</span>
            <strong>{String(activeStage + 1).padStart(2, '0')} / 03</strong>
            <em>{stageLabels[activeStage]}</em>
          </div>

          <div className="education-track" ref={trackRef}>
            <svg
              className="education-journey-path"
              viewBox="0 0 3000 900"
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="none"
            >
              <path className="education-path-base" d={pathD} />
              <path className="education-path-progress" d={pathD} ref={progressPathRef} />
              <path className="education-connector education-connector-1" d="M760 210 H1680" />
              <path className="education-connector education-connector-2" d="M1430 655 H1030" />
              <path className="education-connector education-connector-3" d="M2140 230 H2660" />
              <circle className="education-node education-node-1" cx="760" cy="210" r="8" />
              <circle className="education-node education-node-2" cx="1430" cy="655" r="8" />
              <circle className="education-node education-node-3" cx="2140" cy="230" r="8" />
            </svg>

            {portfolio.education.map((item, index) => (
              <EducationEntryCard item={item} index={index} key={item.id} />
            ))}
          </div>

          <div className="education-progress" aria-hidden="true">
            <span>01</span>
            <i />
            <span>02</span>
            <i />
            <span>03</span>
          </div>
        </div>
      </div>
    </section>
  )
}
