# Plan: resume refresh, blogs, Learn section

Branch: `feat/resume-blogs-learn`. Orchestrated by Claude (planner/reviewer); agy writes code, Claude runs build/test/git.

## Hard constraints (the "do not ruin it" list)
- Theme stays: black bg, white text, Jura font, `max-w-3xl mx-auto px-4`, zinc-800 bordered cards,
  `hover:scale-105 transition-all`, tag chips `text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold`,
  online/offline pills (green/gray) with pulsing dot. Reuse these exact class strings.
- No new npm dependencies. No markdown renderer. No UI library.
- Content lives in `src/data/*.js`; components only render. Adding an item = adding one object.
- Do not rewrite Anant's hero copy, links, or footer.

## Tasks
- [x] P1 refactor: data files + ProjectCard/ExperienceCard/TechTag, zero visual change
- [x] P2 resume content: experience highlights, new projects, education, skills, achievements
- [x] P3 blogs page from `src/data/blogs.js`
- [x] P4 Learn section: `/learn` listing + `public/learn/` static pages host + navbar entry
- [x] P5 README/AGENTS.md: how to add a project / blog / learn item

## Status / next step
All tasks done. Open follow-ups:
- (a) paste the live Hashnode URL into src/data/blogs.js
- (b) first Learn playlist awaits transcripts (YouTube bot-blocks the VPS/office IPs)
- (c) the pre-existing lint error
