import { Award, GraduationCap } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function EducationSection() {
  return (
    <section className="section container" aria-labelledby="education-title">
      <SectionHeader
        eyebrow="Education"
        title="Academic background and credentials."
        description="No invented institutions: these entries are marked for replacement."
      />
      <div className="education-grid" id="education-title">
        {portfolio.education.map((item) => (
          <article className="surface-card education-card" key={item.institution} data-reveal>
            <GraduationCap aria-hidden="true" size={22} />
            <span>{item.dates}</span>
            <h3>{item.qualification}</h3>
            <p className="muted">{item.institution}</p>
            <p>{item.description}</p>
            <div className="chip-list">
              {item.coursework.map((course) => (
                <span className="chip" key={course}>{course}</span>
              ))}
            </div>
          </article>
        ))}
        {portfolio.certifications.map((item) => (
          <article className="surface-card education-card" key={item.title} data-reveal>
            <Award aria-hidden="true" size={22} />
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <p className="muted">{item.issuer}</p>
            {item.link ? <a href={item.link}>Credential link placeholder</a> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
