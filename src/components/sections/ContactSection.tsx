import { BriefcaseBusiness, Code2, Copy, Mail, MapPin, Phone } from 'lucide-react'
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
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copyStatus, setCopyStatus] = useState('Copy email')
  const github = portfolio.socials.find((social) => social.platform === 'GitHub')
  const linkedin = portfolio.socials.find((social) => social.platform === 'LinkedIn')

  const copyEmail = async () => {
    await navigator.clipboard.writeText(portfolio.email)
    setCopyStatus('Email copied')
    window.setTimeout(() => setCopyStatus('Copy email'), 1800)
  }

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const honey = String(formData.get('_honey') ?? '').trim()
    const nextErrors: FormErrors = {}

    if (!name) nextErrors.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email address.'
    if (message.length < 10) nextErrors.message = 'Write at least 10 characters.'

    setErrors(nextErrors)
    setFormStatus('idle')

    if (Object.keys(nextErrors).length) {
      setFormMessage('')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`)

    if (!portfolio.contact.formEndpoint) {
      window.location.href = `${portfolio.emailHref}?subject=${subject}&body=${body}`
      setFormMessage('Opening your email app with the prepared message.')
      return
    }

    setIsSubmitting(true)
    setFormMessage('')

    try {
      const response = await fetch(portfolio.contact.formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _honey: honey,
          _subject: `Portfolio inquiry from ${name}`,
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('Message delivery failed')
      }

      form.reset()
      setFormStatus('success')
      setFormMessage('Message sent successfully. I’ll get back to you soon.')
    } catch {
      setFormStatus('error')
      setFormMessage('Direct sending is unavailable. Use the email link or try again shortly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section container contact-section" aria-labelledby="contact-title">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Open to collaborate.</h2>
        <p>{portfolio.contact.availability}</p>
        <div className="contact-list">
          <a href={portfolio.contact.emailHref}><Mail aria-hidden="true" size={18} /> {portfolio.contact.email}</a>
          {linkedin ? <a href={linkedin.href} target="_blank" rel="noopener noreferrer"><BriefcaseBusiness aria-hidden="true" size={18} /> LinkedIn</a> : null}
          {github ? <a href={github.href} target="_blank" rel="noopener noreferrer"><Code2 aria-hidden="true" size={18} /> GitHub</a> : null}
          <a href={portfolio.contact.phoneHref}><Phone aria-hidden="true" size={18} /> {portfolio.contact.phone}</a>
          <span><MapPin aria-hidden="true" size={18} /> {portfolio.contact.location}</span>
        </div>
        <Button type="button" variant="secondary" onClick={copyEmail}>
          <Copy aria-hidden="true" size={17} />
          {copyStatus}
        </Button>
      </div>
      <form className="surface-card contact-form" onSubmit={submitForm} noValidate data-reveal>
        <input className="contact-honeypot" name="_honey" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
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
        <Button type="submit" disabled={isSubmitting}>
          <Mail aria-hidden="true" size={17} />
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
        {formMessage ? <p className="form-note" data-status={formStatus} role="status">{formMessage}</p> : null}
      </form>
    </section>
  )
}
