# Ufly Travel — Premium Landing Page

A stunning, 2026-standard travel & tourism landing page for **Ufly Travel**, a KRO Duhok–based travel agency.

**Live:** https://[your-username].github.io/[repo-name]/

## Features

- **Trilingual:** Kurdish (Badini) — default, English, Arabic (RTL)
- **2026 Design:** Liquid-glass surfaces, restrained palette (4 colors), oversized typography
- **Dark Mode:** Auto-detects system preference + manual toggle
- **Animations:** Scroll-driven reveals, glass hover effects, smooth transitions
- **Responsive:** Mobile-native with thumb-friendly navigation
- **Zero Dependencies:** Pure HTML/CSS/JS — no frameworks, no build tools

## Tech Stack

| Layer | Technology |
|-------|-----------|
| HTML | Semantic HTML5 with ARIA landmarks |
| CSS | Custom Properties, `@layer`, Container Queries, Glassmorphism |
| JS | Vanilla (IntersectionObserver, localStorage, i18n) |
| Fonts | Playfair Display + Inter (Google Fonts) |

## Project Structure

```
├── index.html              # Main entry (all 3 languages)
├── assets/
│   ├── logo.png            # Your logo here
│   ├── video/
│   │   └── hero-bg.mp4     # Hero background video (replace)
│   └── images/             # (optional local images)
├── css/
│   ├── reset.css           # CSS reset
│   └── style.css           # Complete design system
├── js/
│   ├── i18n.js             # Language switcher + translations
│   ├── animations.js       # Scroll reveals & effects
│   └── main.js             # Dark mode, mobile nav, interactions
├── lang/
│   ├── ku.json             # Kurdish (Badini)
│   ├── en.json             # English
│   └── ar.json             # Arabic (RTL)
└── README.md
```

## Getting Started Locally

1. Clone the repo
2. Replace `assets/logo.png` with the actual Ufly Travel logo
3. Replace `assets/video/hero-bg.mp4` with a looping travel background video
   - Free sources: [Mixkit](https://mixkit.co/free-stock-video/travel/), [Pexels](https://www.pexels.com/search/videos/travel/)
4. Open `index.html` in a browser — works directly from the file system

## Deploy to GitHub Pages

### Option 1: Using GitHub Web UI

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, Folder: `/` (root)
5. Click **Save**
6. Your site is live at `https://<username>.github.io/<repo>/`

### Option 2: Using gh CLI

```bash
gh repo create ufly-travel --public --source=. --push
gh repo deploy
```

Or manually enable Pages:
```bash
gh api repos/:owner/:repo/pages -X POST \
  -f source.branch=main \
  -f source.path=/
```

## Customization

- **Colors:** Edit CSS custom properties in `:root` in `css/style.css`
- **Translations:** Edit the JSON files in `/lang/`
- **Images:** Replace Unsplash image URLs in `index.html` with your own
- **Video:** Place a `.mp4` file at `assets/video/hero-bg.mp4`
- **Logo:** Replace `assets/logo.png` (or adjust the `<img>` tag)

## License

Design and code for this landing page provided as-is.
All media (images, videos) from Unsplash and Mixkit under their respective free licenses.
Ufly Travel brand and content belongs to Ufly Travel / Ufly Global LLC.
