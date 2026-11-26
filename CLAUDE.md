# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for **Hita Thota** deployed to GitHub Pages from the `main` branch via `.github/workflows/deploy.yaml` (builds with `npm ci && npm run build`, publishes `./dist`). The repo name `spoofle.github.io` means the site is served at the apex of that GitHub Pages domain, so `vite.config.ts` uses `base: '/'` — do not change this to a subpath.

The site presents Hita as an applied AI researcher and engineer working at the intersection of brain-inspired computation, neuromorphic sensing, and autonomous agentic systems. Tone should be confident, technical, and scientifically credible — this is a portfolio aimed at researchers, recruiters, and engineering leaders. Avoid generic "passionate about tech" filler; lead with specifics.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — type-checks all TS projects (`tsc -b`) then `vite build`. The `tsc -b` step is the gate: type errors fail the deploy.
- `npm run lint` — ESLint over the repo (flat config in `eslint.config.js`)
- `npm run preview` — serve the production build locally

There is no test runner configured.

## Architecture

React 19 + TypeScript + Vite SPA using `react-router-dom` v7 (`BrowserRouter`). All routes live in `src/App.tsx`; the layout is `Header` → `<Routes>` → `Footer`.

Two patterns repeat across the site and are worth knowing before editing:

1. **Section components double as routed pages.** `About`, `Portfolio`, `Blog`, `Resume`, `Research` are each rendered as their own page route (e.g. `/portfolio`). The commented-out `Home` in `App.tsx` shows the previous single-page composition — `/` currently aliases to `<About />`. If you reintroduce a combined home, update both the `/` route and the nav links in `src/components/Header.tsx`.

2. **Detail pages are driven by in-file data maps keyed by URL param.** `ProjectDetail.tsx` and `ResearchAbstract.tsx` each define a `Record<string, …>` (`projectDetails`, `researchAbstracts`) and look up the entry via `useParams().projectId`. Adding a project/research entry is a three-step change:
   - add the entry to the detail file's record (key = URL slug),
   - add a matching card to `Portfolio.tsx` (or `Research.tsx`) whose `learnMoreLink` is `/projects/<slug>` or `/research/<slug>`,
   - import its image from `src/images/projects/` in *both* files.

   The slug must match across files — there's no shared source of truth.

Styling is global CSS in `src/index.css` and `src/App.css` (no CSS modules / Tailwind). Animations use `framer-motion`; icons use `@fortawesome/react-fontawesome`.

## Site Content

This is the authoritative content the site should present. When building or editing pages, pull copy from here rather than inventing details. Keep wording faithful — titles, advisor names, roles, and grades are factual and should not be paraphrased into something inaccurate.

### Hero Section / Biography (`About` / home)

A short, high-impact intro — 3–4 sentences, no longer. It should communicate, in order: current role, education, honors track, and research focus.

- **Current role:** Incoming Cloud Applied AI Intern at Google (Summer 2026), focusing on Agentic AI Systems Architecture.
- **Education:** Computer Science major (Machine Learning track) with dual minors in Mathematics and Neuroscience at the University of Maryland, College Park.
- **Honors track:** Pursuing UMD Computer Science Departmental Honors.
- **Core research focus:** The intersection of brain-inspired computation, low-latency neuromorphic sensing (event cameras), and autonomous agentic workflows.

Draft hero copy (use or refine):

> Hita Thota is an incoming Cloud Applied AI Intern at Google, where she'll focus on agentic AI systems architecture. She studies Computer Science on the Machine Learning track at the University of Maryland, College Park, with dual minors in Mathematics and Neuroscience, and is pursuing Computer Science Departmental Honors. Her research sits at the intersection of brain-inspired computation, low-latency neuromorphic sensing with event cameras, and autonomous agentic workflows.

### Research & Publications (`Research`)

Render these as cards on `Research.tsx`. Each should be tagged with its status. Use the tags **"Pre-print / In Submission"** or **"Active Working Paper"** as appropriate, and clearly list the author role and advisor. Build matching detail entries in `ResearchAbstract.tsx` keyed by slug.

1. **Event-Based Perception** — PRG Lab.
   Asynchronous event-camera perception, vision transformers, and visual saliency.
   Role: Co-Author. Status: Active Working Paper. Suggested slug: `event-based-perception`.

2. **Vision-Language Model (VLM) Benchmarking.**
   Rigorous statistical metrics and evaluations for multimodal systems.
   Advised by Dr. Furong Huang. Role: Lead Author / Core Contributor. Status: Pre-print / In Submission. Suggested slug: `vlm-benchmarking`.

3. **Multimodal Deep Learning.**
   Cross-modal dataset frameworks utilizing ObjectFolder 2.0 paradigms.
   Advised by Dr. Ruohan Gao. Role: Research Contributor. Status: Active Working Paper. Suggested slug: `multimodal-deep-learning`.

### Industry & Engineering Experience (`Resume` / `Portfolio`)

- **Google — Cloud Applied AI Team** (Summer 2026 – Present)
  Software Engineering Intern. Architecting enterprise-scale internal multi-agent workflows, system routing structures, and autonomous infrastructure.

- **Shopify** (Summer 2025)
  Software Engineering Intern. Developed core agentic AI implementations. **Highlight** the high-profile public feature and the endorsement from Shopify CEO Tobi Lütke regarding engineering impact — this is a marquee item and should be visually surfaced (e.g. a callout or pull-quote treatment), not buried in a bullet list.

### Leadership & Academic Citizenship (`Resume`)

- **Hack4Impact-UMD** — Director of Engineering. Oversees system architecture, technical assessments, and engineering teams for community-focused software products.
- **CMSC 330 (Organization of Programming Languages), UMD** — Teaching Assistant, 4 consecutive semesters. Instructional lead managing student labs and grading infrastructure for functional programming, automata, and memory-management curricula.
- **CMSC 389O, UMD** — Head Teaching Assistant. Leads an instructional staff of 8 TAs and manages course operations for 100+ students.
- **Technica (Inclusive Communities Organizer)** — Workshop Instructor. Leads live technical workshops onboarding diverse student cohorts into core CS skills.
- **Bitcamp (premier East Coast hackathon)** — Featured Technical Speaker / Workshop Lead. Delivered a well-attended 30-minute workshop on the fundamentals of neuromorphic systems.

### Selected Academic Highlights (`Resume`)

Do **not** render a full transcript. Feature only these high-signal courses (advanced or graduate-level work that demonstrates theoretical depth). A compact table or grid works well.

- Advanced Algorithm Design & Analysis (CMSC 451) — A
- Machine Learning (CMSC 422) — A+
- Graduate-Level Multimodal Computer Vision (CMSC 848M) — A− *(taken as an undergraduate alongside PhD candidates)*
- Linear Optimization (MATH 423) — A−
- Digital Logic Design in Minecraft Datapacks (CMSC 389E) — A+
- Calculus III (MATH 241) — A+

### Writing & Media (`Blog` / footer)

- **Substack — *Code meets Cognition*** — https://hthota.substack.com
  A platform synthesizing systems engineering with neuroscientific principles. Link out prominently from the `Blog` page and the footer.

## Content editing conventions

- Advisor names, course codes, grades, and the Tobi Lütke endorsement are factual claims — preserve them exactly. Do not soften, embellish, or invent metrics that aren't in this file.
- Research entries default to the "Active Working Paper" / "Pre-print / In Submission" tags above; do not present unpublished work as published.
- When adding a research card or project, follow the three-step slug-matching pattern in the Architecture section so the card and its detail page stay in sync.

## Deployment notes

- Pushing to `main` triggers `.github/workflows/deploy.yaml` and publishes automatically. Don't push speculative changes to `main`.
- Because deploy runs `tsc -b` before `vite build`, a successful local `npm run dev` is not enough — run `npm run build` before pushing.