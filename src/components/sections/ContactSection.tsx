import { BriefcaseBusiness, Code2, Copy, Mail, MapPin } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { portfolio } from '@/data/portfolio'
import { Button } from '@/components/ui/button'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [formMessage, setFormMessage] = useState('')
  const [copyStatus, setCopyStatus] = useState('Copy email')

  const copyEmail = async () => {
    await navigator.clipboard.writeText(portfolio.email)
    setCopyStatus('Email copied')
    window.setTimeout(() => setCopyStatus('Copy email'), 1800)
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const nextErrors: FormErrors = {}

    if (!name) nextErrors.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email address.'
    if (message.length < 10) nextErrors.message = 'Write at least 10 characters.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      setFormMessage('')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`)
    window.location.href = `${portfolio.emailHref}?subject=${subject}&body=${body}`
    setFormMessage('Opening your email app with the message. Configure a form endpoint later for direct sending.')
  }

  return (
    <section id="contact" className="section container contact-section" aria-labelledby="contact-title">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let’s talk about what you are building next.</h2>
        <p>
          Send an internship opportunity, freelance brief, university collaboration, or software idea.
          The form uses an honest mailto fallback until a real form service is configured.
        </p>
        <div className="contact-list">
          <a href={portfolio.emailHref}><Mail aria-hidden="true" size={18} /> {portfolio.email}</a>
          <a href={portfolio.socials[1]?.href}><BriefcaseBusiness aria-hidden="true" size={18} /> LinkedIn placeholder</a>
          <a href={portfolio.socials[0]?.href}><Code2 aria-hidden="true" size={18} /> GitHub placeholder</a>
          <span><MapPin aria-hidden="true" size={18} /> {portfolio.location}</span>
        </div>
        <Button type="button" variant="secondary" onClick={copyEmail}>
          <Copy aria-hidden="true" size={17} />
          {copyStatus}
        </Button>
      </div>
      <form className="surface-card contact-form" onSubmit={submitForm} noValidate data-reveal>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name ? <span id="name-error" className="form-error">{errors.name}</span> : null}
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email ? <span id="email-error" className="form-error">{errors.email}</span> : null}
        </label>
        <label>
          Message
          <textarea name="message" rows={6} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
          {errors.message ? <span id="message-error" className="form-error">{errors.message}</span> : null}
        </label>
        <Button type="submit">Prepare email</Button>
        {formMessage ? <p className="form-note" role="status">{formMessage}</p> : null}
      </form>
    </section>
  )
}
