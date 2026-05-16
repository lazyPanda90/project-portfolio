# Developer Portfolio (Next.js)

A personal portfolio website that works as an online resume and project showcase.
It highlights coding projects, technical decisions, and links to live demos and repositories.

## Project Purpose

- Showcase software projects in a structured, professional format
- Present your skills, experience, and contact information in one place
- Make it easy for recruiters and clients to evaluate your work quickly

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4 (via PostCSS)
- ESLint 9 + `eslint-config-next`

## Setup

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

## Development Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Content Customization

- Update projects: `src/data/projects.ts`
- Update project type schema: `src/types/project.ts`
- Update contact links: `src/app/contact/page.tsx`
- Update site name and metadata: `src/components/navbar.tsx`, `src/app/layout.tsx`
- Add resume file: `public/resume.pdf`

## Deployment Notes

### Vercel (recommended)

1. Push repo to GitHub
2. Import repository in Vercel
3. Keep default Next.js settings
4. Deploy

No additional build config is required for current setup.
