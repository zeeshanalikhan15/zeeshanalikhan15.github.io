# Decisions

Key decisions and their reasons. Do not delete old entries.

## 2026-10-06 — Portfolio must reflect the Conversational AI pivot

**Decision:** The website's identity is "Senior Software Engineer & Conversational AI Engineer — voice & chat AI agents", not "VoIP & Contact Center Specialist".

**Why:** `zeeshan_master_context (1).md` is the single source of truth and states the current positioning is conversational AI (voice + chat), with the telephony/contact-center work as the journey that led there. The site predated the Nov 2024 pivot and described the current role as generic web development.

**How:** All content lives in `src/data/data.js`, so the change was a data edit plus minor icon/contact component tweaks — no structural rewrite.

## 2026-10-06 — Flagship project is the Conversational Voice AI Agent Platform

**Decision:** The "Conversational Voice AI Agent Platform" is the featured project and appears first in the projects list.

**Why:** It is Zeeshan's flagship, end-to-end voice/chat agent work and is what he is hired for now; it was entirely missing from the site before this change.

## 2026-10-06 — Apply content on top of `origin/main`, not a stale clone

**Decision:** Fast-forward `main` to `origin/main` before applying content edits; never edit a stale checkout.

**Why:** The local clone was 26 commits behind `origin/main` (theme/SEO redesigns). Because `src/data/data.js` was unchanged across the redesign, the content edits survived the fast-forward cleanly — but the component tweaks and hardcoded `Overview.jsx`/`index.html` text had to be redone against the new theme.

## 2026-10-06 — No phone number on the website

**Decision:** The portfolio shows no phone number (contact section and structured data), and the number was scrubbed from public git history.

**Why:** Zeeshan does not want his personal mobile number publicly visible. Contact is via email, LinkedIn, GitHub, and the site itself.
