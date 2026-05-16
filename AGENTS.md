# AI Agent Instructions

This file is the long-term operational context for AI coding agents working in this repository.

## Project Overview

This repository contains a Next.js portfolio website used as an online resume and project library.
The site includes pages for Home, Projects, About, Resume, and Contact, with project data currently managed locally in TypeScript.

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4 + PostCSS plugin
- ESLint (Next.js config)

## Folder Structure

- `src/app/` - route pages and global layout/styles
  - `layout.tsx` - root layout, metadata, fonts, shell
  - `page.tsx` - home page
  - `projects/page.tsx` - projects listing page
  - `about/page.tsx` - about page
  - `resume/page.tsx` - resume page
  - `contact/page.tsx` - contact page
  - `globals.css` - global styles and design tokens
- `src/components/` - reusable UI components
- `src/data/projects.ts` - portfolio project entries
- `src/types/project.ts` - project type definitions
- `public/` - static files (resume PDF, local assets)
- `README.md` - human-facing docs
- `TODO.md` - active backlog
- `CHANGELOG.md` - completed changes

## Coding Conventions

- Use TypeScript strict typing for all new logic
- Prefer reusable components over duplicated markup
- Keep styles consistent with existing editorial visual direction
- Preserve responsive behavior on mobile and desktop
- Use existing path alias imports (`@/*`)
- Avoid adding new dependencies unless necessary
- Keep placeholder personal values clearly identifiable for replacement

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Known Issues / Gaps

- Sample project links still present in `src/data/projects.ts`
- `public/resume.pdf` may not exist yet
- Remote project thumbnails currently use Unsplash URLs

## Rules for Future AI Agents

- Do not remove or overwrite user-provided content unless explicitly requested
- Keep AGENTS.md as the canonical long-term AI context file
- Keep active tasks only in `TODO.md`
- Keep completed work only in `CHANGELOG.md`
- Update docs whenever architecture, commands, or conventions change
- At session end:
  - update `AGENTS.md` if project rules/architecture changed
  - update `TODO.md` with remaining tasks
  - update `CHANGELOG.md` with completed work
