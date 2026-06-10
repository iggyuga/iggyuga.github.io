# iggyuga.github.io

Personal portfolio. Vite + React 19 + TypeScript + Tailwind v4.

Live at **https://iggyuga.github.io**

---

## Local dev

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output → dist/
npm run preview   # preview the built output locally
```

Node 20+ required.

---

## Editing content

See **CONTENT.md** for a full map of every editable piece of copy and where it lives.

Short version: everything you'd ever want to change is in `src/content/`.

---

## Deploy

Push to `first` branch. GitHub Actions builds and deploys automatically to GitHub Pages via the `gh-pages` branch. Takes about 60 seconds.

Workflow: `.github/workflows/deploy.yml`

---

## Swapping the accent color

The accent is a CSS variable — one change propagates everywhere:

```css
/* src/styles/globals.css */
:root {
  --accent: #e8813a;  /* ← change this */
}
```

---

## Easter eggs

| Trigger | Effect |
|---|---|
| Konami code (↑↑↓↓←→←→BA) | Toast appears: "You found the van." |

---

## Structure

```
src/
├── content/     ← edit your site here
├── components/
│   ├── layout/  ← Nav, Footer
│   ├── sections/← Hero, About, Tech, Work, OffTheClock, Contact
│   └── ui/      ← small reusable pieces
├── hooks/       ← useKonamiCode
├── pages/       ← Home, Project, NotFound
└── styles/      ← globals.css (tokens + Tailwind)
```
