# S. Basim Al Kareem — Portfolio

Personal **Frontend Developer** portfolio with a light/dark theme and an interactive **3D hero**, built for sharing on a resume (Vercel-ready).

Live goal: one link that showcases experience, skills, projects, and contact details with a technology-forward visual identity.

---

## Tech stack

| Layer | Choice | Role |
|--------|--------|------|
| Framework | **Next.js 16** (App Router) | SSR/SSG, routing, metadata, Vercel deploy |
| Language | **TypeScript** | Typed components and content |
| UI | **React 19** | Component tree |
| Styling | **Tailwind CSS v4** + CSS variables | Design tokens, responsive layout |
| 3D | **Three.js** + **React Three Fiber** + **Drei** | WebGL hero scene |
| Motion | **Framer Motion** | Scroll reveal + hero entrance |
| Fonts | **Syne** (display) + **DM Sans** (body) via `next/font` | Brand typography |
| Deploy | **Vercel** | Production hosting |

---

## How the app is structured

```
src/
├── app/
│   ├── layout.tsx       # Fonts, SEO metadata, theme bootstrap script, ThemeProvider
│   ├── page.tsx         # Composes all sections into one page
│   ├── globals.css      # Light/dark design tokens, gradients, hero utilities
│   ├── sitemap.ts       # /sitemap.xml
│   └── robots.ts        # /robots.txt
├── content/
│   └── portfolio.ts     # All resume data (edit here — single source of truth)
└── components/
    ├── layout/          # Navbar, Footer
    ├── hero/            # Hero copy + dynamic 3D import
    ├── 3d/              # React Three Fiber scene
    ├── about/           # Profile, education, focus
    ├── skills/          # Skill groups
    ├── experience/      # Career timeline
    ├── projects/        # Selected work
    ├── contact/         # Email, phone, LinkedIn, GitHub
    ├── theme/           # ThemeProvider + ThemeToggle
    └── ui/              # Reveal animation, SectionHeading
```

### Page composition

`src/app/page.tsx` is a **single-page portfolio**. Sections are anchored (`#about`, `#skills`, etc.) so the navbar can smooth-scroll.

Order:

1. **Navbar** — brand, section links, theme toggle, Hire me  
2. **Hero** — name (single line), frontend tagline, CTAs, 3D canvas  
3. **About** — full profile paragraph + education  
4. **Skills** — languages, integration, state/tooling, SEO & quality  
5. **Experience** — vertical timeline  
6. **Projects** — six featured builds  
7. **Contact** — actionable links  
8. **Footer**

---

## Content (how to update your resume data)

All copy and lists live in:

```text
src/content/portfolio.ts
```

| Export | Used for |
|--------|----------|
| `personal` | Name, title, contact, **hero** short headline |
| `profile` | **About** full bio (longer than hero) |
| `skillGroups` | Skills section |
| `experience` | Work history bullets |
| `education` | About column |
| `projects` | Projects list |
| `navLinks` | Navbar |

Hero and About intentionally differ:

- **Hero** → short frontend-focused line (`resumeHeadline`)  
- **About** → full profile paragraph (`profile`)

---

## Design system & themes

### Tokens

Defined in `src/app/globals.css` as CSS variables on `:root` (light) and `html.dark` (dark):

- `--bg`, `--ink`, `--ink-muted` — surfaces and text  
- `--accent`, `--accent-bright` — CTAs and labels  
- `--surface`, `--line` — glass panels and borders  
- `--hero-veil` — left-side gradient so text stays readable over 3D  
- `--page-gradient` — atmospheric page background  

Tailwind maps these via `@theme inline` (e.g. `text-ink`, `bg-accent`).

### Light vs dark

| | Light | Dark |
|--|--------|------|
| Mood | Cool mist, teal accent | Space / tech, purple accent |
| 3D | Glass orb, city environment | Stars, neon workstation, purple orb |
| Default | **Light** on first visit | Optional via toggle |

### Theme implementation

1. Inline script in `layout.tsx` sets `html.dark` **before paint** (avoids flash).  
2. `ThemeProvider` syncs React state with `localStorage` key `theme`.  
3. `ThemeToggle` in the navbar switches light ↔ dark.  
4. `HeroScene` reads theme and swaps colors, stars, and lighting.

---

## 3D hero — how it works

File: `src/components/3d/HeroScene.tsx`  
Loaded from `Hero.tsx` with `next/dynamic(..., { ssr: false })` so WebGL only runs in the browser.

### Scene pieces

| Element | Technique |
|---------|-----------|
| Core orb | Distorted icosahedron (`MeshDistortMaterial`) |
| Orbit rings | Torus + octahedron nodes, animated rotation |
| Floating shards | Boxes / tetrahedrons / octahedrons in space |
| Tech workstation | Procedural meshes (desk, monitor, keyboard, PC, speakers) |
| Stars | `@react-three/drei` `Stars` (dark theme only) |
| Lighting | Ambient + directional + colored point lights |
| Shadows | `ContactShadows` under the desk/orb |

### Performance choices

- Canvas `dpr` capped at `[1, 1.5]`  
- Scene skipped when `prefers-reduced-motion` is on  
- Transparent WebGL clear so CSS gradients show through  
- Stronger hero veil on the left for text contrast  

Visual inspiration: classic Three.js developer portfolios (e.g. workstation + abstract tech forms), implemented with original procedural geometry (no heavy external GLTF required).

---

## Motion

- **Hero**: Framer Motion fade/slide-in on load  
- **Sections**: `Reveal` component — `whileInView` once, respects reduced motion  

---

## SEO & metadata

Configured in `src/app/layout.tsx`:

- Title / description / Open Graph / Twitter cards  
- `metadataBase` from `NEXT_PUBLIC_SITE_URL` (fallback Vercel-style URL)  

Also generated:

- `/sitemap.xml` → `src/app/sitemap.ts`  
- `/robots.txt` → `src/app/robots.ts`  

---

## Scripts

| Command | What it does |
|---------|----------------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server → [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use the sun/moon control in the navbar to toggle themes.

---

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical site URL for metadata, sitemap, robots |

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

---

## Deploy to Vercel

1. Commit and push this branch to GitHub (`basimalkareem/MyPortfolio`).  
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.  
3. Framework: **Next.js** (auto-detected).  
4. Set `NEXT_PUBLIC_SITE_URL` to your deployment URL (optional but recommended).  
5. Deploy — add the live URL to your resume / LinkedIn.

---

## Design decisions (summary)

- **One page** — fastest path for recruiters; deep links via anchors  
- **Content file** — update CV without hunting through JSX  
- **3D as atmosphere** — tech identity without blocking readability  
- **Theme toggle** — dark tech default + clean light alternative  
- **Accessibility** — reduced-motion path, stronger dark contrast, semantic sections  

---

## License

Private portfolio project for **S. Basim Al Kareem**.
