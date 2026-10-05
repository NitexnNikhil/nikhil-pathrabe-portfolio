# Nikhil Pathrabe Portfolio — Implementation Plan

## Product scope
A single-page, static portfolio for Nikhil Pathrabe, an AI Engineer & Software Developer. Content is sourced strictly from the supplied resume. The site includes hero, summary, experience, projects, technical skills, education, achievement, contact, and a downloadable resume PDF. Available contact destinations are email, LinkedIn, and GitHub; LeetCode is omitted because no URL is present in the source.

## Implementation decisions
- Use a minimal Vite + React frontend with no server, database, API routes, Vite endpoint, API keys, secrets, or `index.ts`.
- Keep the project deployable to Vercel through the requested `vercel.json` configuration.
- Build output is `dist/public`, matching the requested Vercel output directory and avoiding the broken production `staticPath` logic that points at `public`.
- Serve the resume from `public/assets/nikhil-pathrabe-resume.pdf` so the download action works as a static asset.
- Serve `/manus-routes.json` as a route manifest for the single `/` page.

## Project structure
- `src/main.jsx` — React entrypoint.
- `src/App.jsx` — page composition, resume-backed data, navigation, and accessible interactive behavior.
- `src/styles.css` — responsive visual system, layout, motion, and accessibility states.
- `public/assets/` — supplied resume PDF; no unsupplied personal imagery is invented.
- `public/manus-routes.json` — static page route declaration.
- `vercel.json` — exact Vercel build/development/install/framework/output/env configuration requested by the user.
- `app.config.ts` — quoted platform logo metadata only; it is not application runtime code.

## Design direction
- **Design movement:** editorial developer portfolio with neo-industrial / terminal-inspired visual language.
- **Core principles:** signal over decoration; evidence-led storytelling; dark contrast with luminous accents; deliberate asymmetry and generous rhythm.
- **Color philosophy:** a near-black graphite canvas creates focus, while acid mint communicates intelligence, systems thinking, and forward motion. Warm ivory text adds human clarity; muted steel surfaces keep the interface calm and legible.
- **Layout paradigm:** a fixed vertical index rail on desktop and a compact horizontal header on mobile; sections unfold as a left-anchored editorial narrative with offset metrics and wide project cards instead of a centered card grid.
- **Signature elements:** mint “system online” beacon; large monospaced section indices; fine orbital/grid lines framing the hero mark.
- **Interaction philosophy:** navigation behaves like a document index; links are explicit, tactile, and fast. Hover states reveal intent through underline sweeps and small directional shifts, never ornamental motion.
- **Animation:** entrance reveal is a restrained upward fade with staggered metadata; orbital lines drift subtly; respect `prefers-reduced-motion` by disabling transforms and transitions.
- **Typography system:** high-contrast geometric sans fallback for headlines (`Arial/Helvetica` stack) paired with system monospace for labels, metrics, and navigation. Uppercase microcopy uses tracking for an instrument-panel feel.
- **Brand essence:** “Practical AI systems, shipped with signal.” Personality: precise, curious, dependable.
- **Brand voice:** concise, technical, human. Example lines: “I build AI systems that hold up in the real world.” and “Explore the systems, tools, and decisions behind the work.”
- **Wordmark & logo:** an `NP/` monogram inside a segmented orbit mark, used as a compact navigation signature rather than plain text.
- **Signature brand color:** acid mint `#B7F56B`, used sparingly for action, status, and proof points.

## Frontend and deployment
The app is a static React bundle. `pnpm build` emits `dist/public/index.html` and assets. Vercel uses the exact requested config. No production server or static path resolver is needed.
