import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border border-[color-mix(in_srgb,var(--color-accent)_60%,transparent)] bg-[linear-gradient(135deg,var(--color-accent-strong),color-mix(in_srgb,var(--color-accent)_62%,#0f766e))] text-white shadow-[0_16px_34px_rgba(15,118,110,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,118,110,0.34)]',
        secondary:
          'border border-[color-mix(in_srgb,var(--color-border)_74%,var(--color-accent))] bg-[color-mix(in_srgb,var(--color-surface)_82%,transparent)] text-[var(--color-text)] shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-md hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[color-mix(in_srgb,var(--color-surface-elevated)_92%,transparent)] hover:text-[var(--color-accent)]',
        ghost:
          'text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]',
      },
      size: {
        default: 'min-h-11 px-5',
        icon: 'h-11 w-11 px-0',
        sm: 'min-h-10 px-4 text-xs',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)
