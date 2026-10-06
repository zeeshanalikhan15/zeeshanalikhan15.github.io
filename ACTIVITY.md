# Activity Log

Running log of changes to this project, newest last. Do not delete old entries.

## 2026-10-06 — Aligned site content with master context file

- Compared the portfolio (React/Vite) against `zeeshan_master_context (1).md` (the source of truth).
- Rewrote `headerData` title/tagline from "VoIP & Contact Center Specialist" to "Conversational AI Engineer — Voice & Chat AI Agents".
- Rewrote the current virtualQ role (description, responsibilities, tools) to reflect conversational AI work (Pipecat, LangChain/LangGraph, Retell AI, Twilio, SignalWire, Deepgram, AWS, n8n).
- Renamed second role "Call Center Developer" → "Call Center Integration Developer" and location "Freelance, Remote" → "Remote".
- Added C#/.NET, C++, Java to all four Afiniti role entries.
- Added two missing projects: "Conversational Voice AI Agent Platform" (flagship) and "Call Center Dashboard & Production Access Portal".
- Added a "Voice AI & LLMs" technology category; added Python, Java, TypeScript to Languages; added SignalWire, Amazon Connect, Genesys PureCloud platforms; added Twilio Studio + SIP Domains.
- Refreshed the proficiency/experience graph to include Python, Java, TypeScript and the AI stack.
- Extended contact info with Berlin location, phone and website.
- `npm run build` passes. `npm run lint` remains red with pre-existing errors (unused React imports, missing prop-types) not introduced by this change.

## 2026-10-06 — Reconciled with the latest theme (local clone was 26 commits stale)

- Discovered the local checkout was **26 commits behind** `origin/main` (stale at 2025-04-26). The newer commits were design/theme/SEO only; `src/data/data.js` was unchanged, so the content edits survived.
- Fast-forwarded `main` to `origin/main` (new dark theme) and re-applied the small component tweaks (contact info, project icons, technology icons) against the new component code.
- Fixed hardcoded stale content the redesign introduced: `Overview.jsx` "About Me" said "VoIP & Contact Center" (rewrote to Conversational AI); `index.html` SEO title/meta/OpenGraph/Twitter/JSON-LD said "VoIP Specialist" (rewrote, fixed placeholder phone `+49-xxx-xxx-xxxx` → real number, refreshed keywords + structured data).
- Fixed 7 connector-era project `role` values → "Call Center Integration Developer" so "Related Projects" still link after the role rename.
- `npm run build` passes; JSON-LD validated as well-formed JSON.

## 2026-10-06 — Privacy: removed phone number and refreshed footer

- Removed the phone number from the contact section, `contactInfoData`, and JSON-LD `"telephone"` (user request: don't show the number).
- Scanned the full history and all branches for a Pakistani number (`+92`, `0092`, `03xx`, landline patterns) — none found; only false positives (SVG coordinates, GitHub asset UUIDs).
- Scrubbed the German number from git history via `git filter-branch` and force-pushed. Content + authorship verified unchanged; commit hashes rewritten.
- Updated footer to "Designed with ❤ and AI".
