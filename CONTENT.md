# Content map

Every editable piece of copy on the site lives in `src/content/`. No hunting through components.

---

## src/content/meta.ts
Site-wide constants: name, title, description, avatar URL, GitHub, email, LinkedIn.

---

## src/content/currently.ts
The "Currently" widget in the About section.

```ts
export const currentlyLines = [
  '📍 Parked near Chattanooga, TN',     // where the van is
  '🚀 Shipping: options-scanner v2',    // what's deploying
  '🎵 Trail playlist: ...',             // what's playing
  '📈 Watching: ...',                   // options watch
]
```

Update these whenever your situation changes. Each string is one line in the widget.

---

## src/content/projects.ts
Flagship project cards and full case study copy.

Each `Project` object contains:
- `slug` — URL segment (`/project/:slug`)
- `title` / `pitch` — card headline and one-liner
- `tags` — tech tag chips
- `liveUrl` / `repoUrl` — optional links
- `gradient` — Tailwind gradient classes for the card header (e.g. `from-amber-900/40 to-green-900/30`)
- `meta` — role, timeframe, stack list
- `caseStudy` — problem, approach, architectureNote, outcome, lessons[]

TODOs inside projects.ts:
- `outcome` fields have placeholder numbers — replace with real trade log highlights
- Add real screenshot/video when ready (see Project.tsx hero image slot)

---

## src/content/tech.ts
Tech stack grouped into Frontend / Backend / Infra / Tools.
Each item needs a `name` and a `path` (SVG path from `simple-icons`).

To add a new icon:
```ts
import { siNewthing } from 'simple-icons'
// then add: { name: 'Newthing', path: siNewthing.path }
```

---

## Inline copy that lives in component files

| Section | File | What to edit |
|---|---|---|
| Hero tagline | `src/components/sections/Hero.tsx` | The `<motion.p>` after the h1 |
| Hero stats line | `src/components/sections/Hero.tsx` | The `STATS` constant at top of file |
| About paragraphs | `src/components/sections/About.tsx` | The `PARAGRAPHS` array at top of file |
| Off the clock cards | `src/components/sections/OffTheClock.tsx` | The `CARDS` array at top of file |
| Contact copy | `src/components/sections/Contact.tsx` | The `<motion.p>` in the component |
| Footer | `src/components/layout/Footer.tsx` | The `<p>` at bottom of Footer |

---

## TODOs at a glance

- `[ ]` Add real LinkedIn URL in `src/content/meta.ts` and uncomment in `Contact.tsx`
- `[ ]` Update `currently.ts` lines whenever situation changes
- `[ ]` Replace `// TODO: screenshot` in project card headers with real visuals
- `[ ]` Replace `// TODO: screenshot or demo` in `Project.tsx` hero slot
- `[ ]` Fill in real trade log numbers in `projects.ts` → options-scanner → outcome
- `[ ]` Add `og-image.png` to `public/`
