import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button-variants'

export function NotFoundPage() {
  return (
    <main id="main-content" className="container route-page not-found-page">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>The route you opened is not part of this static portfolio yet.</p>
      <Link className={buttonVariants({ variant: 'primary' })} to="/">
        <ArrowLeft aria-hidden="true" size={18} />
        Return home
      </Link>
    </main>
  )
}
