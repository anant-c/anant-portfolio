# Agent Guidelines: anant-portfolio

Guidelines and constraints for automated coding agents working in this repository.

## Hard Constraints

- **Theme**: Black background, white text, Jura font, `max-w-3xl mx-auto px-4`, zinc-800 bordered cards, `hover:scale-105 transition-all`.
- **Status pills and tags**: Tag chips must use `text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold flex`. Online/offline status pills (green/gray) must include the pulsing dot. Reuse these exact class strings.
- **Dependencies**: No new npm dependencies. No markdown renderer. No UI library.
- **Data-driven**: Content lives in `src/data/*.js` and `public/learn/index.json`. Components only render. Adding an item means adding an object to the corresponding data array.
- **Content fidelity**: Do not rewrite Anant's hero copy, links, or footer. Change only what was requested.

## Class Strings to Reuse

- Tag chip: `text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold flex`
- Card container: `py-4 px-4 border border-zinc-800 rounded-md flex flex-col gap-2 my-4 hover:scale-105 transition-all`
- Section heading: `text-3xl font-bold pt-10`
- Section subtext: `text-zinc-400 mt-1 mb-4`
- Status pill online: `bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-gray-800`
- Status pill offline: `bg-gray-200 text-gray-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-gray-800`
- Pulsing dot online: `w-2 h-2 rounded-full bg-green-600 animate-pulse`
- Pulsing dot offline: `w-2 h-2 rounded-full bg-gray-600 animate-pulse`

## Where Things Live

- Routes and smooth scroll: `src/App.jsx`
- Page components: `src/components/` (`Home.jsx`, `Projects.jsx`, `Blogs.jsx`, `Learn.jsx`, `Contact.jsx`, `Navbar.jsx`, `Footer.jsx`)
- Reusable UI: `src/components/ui/` (`ProjectCard.jsx`, `ExperienceCard.jsx`, `EducationCard.jsx`, `BlogCard.jsx`, `TechTag.jsx`, `StatusPill.jsx`, `Section.jsx`, `icons.jsx`)
- Content data files: `src/data/` (`projects.js`, `experience.js`, `skills.js`, `education.js`, `achievements.js`, `blogs.js`, `learn.js`)
- Static assets: `public/assets/`
- Learn static site and index: `public/learn/index.json`, `public/learn/<slug>/`
- Global styles and font definitions: `src/index.css`

## Verification

- Verify changes with `npm run build`.
- `npm run lint` has one pre-existing error in `src/App.jsx` (unused `useState` import). Do not fix unrelated code.
