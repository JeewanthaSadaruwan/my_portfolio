import { portfolio } from '@/data/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function SkillsSection() {
  return (
    <section id="skills" className="section container" aria-labelledby="skills-title">
      <SectionHeader
        eyebrow="Skills"
        title="A practical stack for building useful software."
        description="Grouped skills make the portfolio easy to scan without fake percentage bars."
      />
      <div className="skills-grid" id="skills-title">
        {portfolio.skills.map((category) => (
          <article className="surface-card skill-card" key={category.title} data-reveal>
            <h3>{category.title}</h3>
            <div className="chip-list">
              {category.items.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
