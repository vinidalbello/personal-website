# Vinicius Dal Bello — Personal Website

Personal portfolio website showcasing my experience, projects, and skills as a Full Stack Developer. Built with a dark theme and mint accent color.

**Live:** [viniciusdalbello.dev](https://viniciusdalbello.dev) *(update with your Netlify URL if different)*

---

## Tech Stack

- **Framework:** SvelteKit 2 + Svelte 5
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Deploy:** Netlify (via `@sveltejs/adapter-netlify`)

## Features

- Responsive single-page layout with smooth scroll navigation
- Scroll-reveal animations on section entry
- Hero section with profile photo and CV download
- Work experience timeline
- Projects showcase with tech badges and GitHub links
- Skills grid organized by category
- Contact section with social links
- Open Graph meta tags for social media previews

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check
npm run check
```

## Build & Deploy

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

Netlify picks up the `netlify.toml` config automatically on push to `main`.

## Project Structure

```
src/
├── lib/
│   ├── components/   # Svelte UI components
│   ├── data/         # Static data (experience, projects, skills)
│   └── types/        # TypeScript interfaces
└── routes/           # SvelteKit pages and layout
static/               # Static assets (images, resume PDF, robots.txt)
```
