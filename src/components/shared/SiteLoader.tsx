import { useEffect, useState } from 'react'

type LoaderPhase = 'visible' | 'exiting' | 'hidden'

const MINIMUM_DISPLAY_TIME = 1000
const EXIT_DURATION = 650

export function SiteLoader() {
  const [phase, setPhase] = useState<LoaderPhase>('visible')

  useEffect(() => {
    const startedAt = performance.now()
    let exitTimer: number | undefined
    let removeTimer: number | undefined

    const finishLoading = () => {
      const remainingTime = Math.max(0, MINIMUM_DISPLAY_TIME - (performance.now() - startedAt))

      exitTimer = window.setTimeout(() => {
        setPhase('exiting')
        removeTimer = window.setTimeout(() => setPhase('hidden'), EXIT_DURATION)
      }, remainingTime)
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading, { once: true })
    }

    return () => {
      window.removeEventListener('load', finishLoading)
      if (exitTimer) window.clearTimeout(exitTimer)
      if (removeTimer) window.clearTimeout(removeTimer)
    }
  }, [])

  useEffect(() => {
    if (phase === 'hidden') return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [phase])

  if (phase === 'hidden') return null

  return (
    <div
      className={`site-loader${phase === 'exiting' ? ' is-exiting' : ''}`}
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      <div className="site-loader-glow site-loader-glow-one" aria-hidden="true" />
      <div className="site-loader-glow site-loader-glow-two" aria-hidden="true" />
      <div className="site-loader-core">
        <div className="site-loader-mark" aria-hidden="true">
          <span className="site-loader-orbit site-loader-orbit-outer" />
          <span className="site-loader-orbit site-loader-orbit-inner" />
          <span className="site-loader-scan" />
          <span className="site-loader-monogram">JS</span>
        </div>
        <div className="site-loader-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
