# Personal Portfolio

Modern static developer portfolio built with Vite, React, TypeScript, Tailwind CSS, React Router, Lucide React, and a small shadcn-style local UI layer.

The current site uses professional placeholder content for `YOUR NAME`. Replace the TODO values before publishing.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS with `@tailwindcss/vite`
- React Router
- Lucide React icons
- ESLint
- CSS variables for theme tokens

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Commands

```bash
npm run dev      # Start development server
npm run lint     # Run ESLint
npm run build    # Type-check and build for production
npm run preview  # Preview the production build
```

## Edit Personal Information

All editable portfolio content lives in:

```text
src/data/portfolio.ts
```

Types live in:

```text
src/types/portfolio.ts
```

Update your name, headline, location, email, social links, skills, experience, education, certifications, achievements, leadership activities, projects, and contact details there. Components read from this single data file to avoid duplicated personal content.

## Add Projects

Add a new object to the `projects` array in `src/data/portfolio.ts`.

Each project supports:

- title and slug
- summary
- problem, solution, challenges, and outcome
- goals and contribution
- technologies
- category filter
- thumbnail and gallery images
- GitHub and live-demo links
- status and year

Project case-study routes are generated from the slug:

```text
/projects/project-slug
```

## Replace Images

Use `public/media/` for images referenced by URL strings in `src/data/portfolio.ts`, such as project screenshots, gallery images, and large background media.

Use `src/assets/` for images or icons imported directly by React components.

The shared placeholder is:

```text
public/media/placeholders/project-placeholder.svg
```

See `ASSET_GUIDE.md` for the current folder map.

The hero profile area is an intentional CSS placeholder. Replace it with a real image component when you add a professional photo.

## Add the Resume

Place your real resume at:

```text
public/resume.pdf
```

Do not add a fake resume. The current buttons point to `/resume.pdf`.

## Contact Form

The form validates input and then opens a `mailto:` message. It does not pretend to send data through an unconfigured service.

To add direct form sending later, configure a real service such as Formspree, Netlify Forms, or your own API, then update `portfolio.contact.formEndpoint` and the submit handler in `src/components/sections/ContactSection.tsx`.

Do not commit secret API keys to the frontend.

## Build

```bash
npm run build
```

The generated static site is written to:

```text
dist/
```

## Deployment

### Vercel

1. Import the repository.
2. Use the Vite defaults.
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Create a new site from the repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

1. Build with `npm run build`.
2. Deploy the `dist/` folder using your preferred GitHub Pages workflow.
3. If publishing under a subpath, configure Vite `base` in `vite.config.ts`.

## Custom Domain Notes

Replace placeholder URLs in:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

Then configure your DNS records with your hosting provider. For perfect per-project social metadata, this Vite SPA would need prerendering or a framework that can emit route-specific HTML.

## Accessibility Notes

Implemented baseline accessibility includes:

- semantic landmarks
- skip-to-content link
- one clear home-page H1
- visible focus states
- keyboard-accessible navigation and filters
- mobile menu `aria-expanded` and `aria-controls`
- Escape-key mobile menu closing
- reduced-motion support
- labeled form controls with validation errors
- meaningful image alt text

## Placeholder Values to Replace

- `YOUR NAME`
- `YN`
- `your.email@example.com`
- GitHub URL
- LinkedIn URL
- resume file
- biography paragraphs
- profile photograph
- skills and technologies
- experience
- education
- certifications
- achievements and leadership
- project details, links, and screenshots
- canonical domain, sitemap, robots URL, and Open Graph image
