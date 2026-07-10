import {
  Bot,
  BrainCircuit,
  CircuitBoard,
  ScanEye,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { portfolio } from '@/data/portfolio'
import type { AboutIcon } from '@/types/portfolio'

const expertiseIcons: Record<AboutIcon, typeof BrainCircuit> = {
  'agentic-ai': BrainCircuit,
  'embodied-ai': Bot,
  'computer-vision': ScanEye,
  'robotics-autonomy': CircuitBoard,
}

const expertiseAccentClasses: Record<AboutIcon, string> = {
  'agentic-ai': 'about-accent-violet',
  'embodied-ai': 'about-accent-cyan',
  'computer-vision': 'about-accent-blue',
  'robotics-autonomy': 'about-accent-teal',
}

function renderAboutParagraph(paragraph: string) {
  const importantTerms = [
    'University of Moratuwa',
    'Artificial Intelligence',
    'Agentic AI',
    'Embodied AI',
  ]
  const matches = importantTerms
    .map((term) => ({ term, index: paragraph.indexOf(term) }))
    .filter((match) => match.index >= 0)
    .sort((first, second) => first.index - second.index)

  if (!matches.length) {
    return paragraph
  }

  const parts: ReactNode[] = []
  let cursor = 0

  matches.forEach(({ term, index }) => {
    if (index > cursor) {
      parts.push(paragraph.slice(cursor, index))
    }

    parts.push(
      <span className="about-term" key={term}>
        {term}
      </span>,
    )
    cursor = index + term.length
  })

  if (cursor < paragraph.length) {
    parts.push(paragraph.slice(cursor))
  }

  return parts
}

export function AboutSection() {
  const { about } = portfolio

  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <header className="about-header" data-reveal>
        <h2 id="about-title">{about.heading}</h2>
        <p>{about.subtitle}</p>
      </header>
      <div className="about-grid about-main-grid">
        <div className="surface-card about-copy" data-reveal>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{renderAboutParagraph(paragraph)}</p>
          ))}
        </div>
        <div className="about-expertise-grid" data-reveal>
          {about.expertise.map((item) => {
            const Icon = expertiseIcons[item.icon]
            return (
              <article
                className={`surface-card about-expertise-card ${expertiseAccentClasses[item.icon]}`}
                key={item.title}
              >
                <span className="about-icon-shell">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
