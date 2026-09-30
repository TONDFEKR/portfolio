# Reza Tondfekr | Portfolio

Personal portfolio of **Reza Tondfekr**, Senior Learning Designer and Educational Technologist (PhD, Neuroscience & Neurochemistry), based in Melbourne, Australia.

The site uses a "modern retro" pixel-art style and includes **optional micro-quests**. Each case study ends with a 60-second challenge built on a real learning-science principle, such as constructive alignment, Self-Determination Theory, cognitive load, UDL and retrieval with feedback. Quests are never required: contact details and the CV are always available.

## Features
- Responsive layout with mobile, tablet and desktop breakpoints, and a mobile menu
- Light and dark themes that follow the system setting, with a manual toggle that is remembered
- Accessible case-study dialog (native `<dialog>`): keyboard support, Esc to close, focus returns to the trigger
- Quest progress (XP bar) saved in `localStorage`, with a reset option
- Respects `prefers-reduced-motion`, which turns off confetti and animations
- SEO basics: meta description, Open Graph image, JSON-LD `Person` schema, favicon, `404.html`
- No frameworks and no build step: plain HTML, CSS and JS

## Structure
```
index.html            Main page
404.html              Custom "not found" page (used automatically by GitHub Pages)
css/style.css         All styles (design tokens at the top)
js/script.js          Case-study content, quests, theme, menu
assets/img/           Optimised pixel-art images (WebP + SVG)
assets/og-image.png   Social share preview (1200x630)
assets/Reza_Tondfekr_CV.pdf
favicon.svg, site.webmanifest, .nojekyll
```

## Editing content
- **Case studies and quests:** edit the `projects` array at the top of `js/script.js`.
- **Timeline, skills, certifications:** edit the matching sections in `index.html`.
- **Colours and fonts:** edit the CSS variables at the top of `css/style.css`.
- **CV:** replace `assets/Reza_Tondfekr_CV.pdf`, keeping the same file name.

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000.

## Deploy on GitHub Pages
1. Upload **the contents of this folder** (not the folder itself) to the root of your repository.
2. Go to **Settings → Pages → Build and deployment**, and set Source to *Deploy from a branch* and Branch to `main` with the `/ (root)` folder.
3. The site is configured for **https://tondfekr.github.io/portfolio/**, the address linked from the CV. If the repository or username ever changes, update that URL in `index.html` (canonical, `og:url`, `og:image`, JSON-LD) and the `/portfolio/` paths in `404.html`.

## Credits
Design and content © Reza Tondfekr. Fonts: IBM Plex Sans, IBM Plex Mono and Silkscreen (Google Fonts, SIL Open Font License).
