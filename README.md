# Vishnu Vijayakumar Portfolio
Plain HTML, CSS and vanilla JS with GSAP + ScrollTrigger (bundled locally in `assets/vendor/`, no CDN for scripts).

## Run locally
Open `index.html` in a browser, or serve it: `python3 -m http.server 8000` then visit http://localhost:8000

## Structure
- `index.html` all sections
- `css/style.css` design tokens, layout, responsive rules (one file)
- `js/main.js` project data (`PROJECTS`), menu, form, GSAP animation (one file)
- `assets/` placeholder media (SVG), vendor scripts. `resume/` resume PDF + DOCX

## External dependencies
- Google Fonts (Space Grotesk, Inter, JetBrains Mono). Falls back to system fonts offline. Download and self-host into `assets/fonts/` if you prefer.

## To finish before going live
1. **Contact form**: create a free form at formspree.io, then replace `YOUR_FORM_ID` in the `<form action>` in `index.html`. Until then the form validates and tells the visitor to email you.
2. **Domain**: replace `https://example.com/` in `sitemap.xml` and `robots.txt`; add an `og:url` and a real OG image (1200x630 JPG).
3. **GitHub link** is guessed from your portfolio URL (`github.com/vishnu4441`). Confirm it.
4. **Project details**: only Brandstory has a link. Add `url` and "My part" details in `PROJECTS` in `js/main.js`.
5. Replace placeholder media (see MEDIA-REPLACEMENT-GUIDE.md).
