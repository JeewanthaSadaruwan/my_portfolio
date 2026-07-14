import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!elements.length) {
      return undefined
    }

    let frame = 0

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.34
      let currentSection = elements[0].id

      elements.forEach((element) => {
        if (element.getBoundingClientRect().top <= activationLine) {
          currentSection = element.id
        }
      })

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        currentSection = elements[elements.length - 1].id
      }

      setActiveSection(currentSection)
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [sectionIds])

  return activeSection
}
