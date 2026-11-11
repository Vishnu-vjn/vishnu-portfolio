# Testing report
**No real browser was available in the build environment, so nothing was tested visually or at runtime. Please do a browser pass before publishing.**

## Performed (static checks)
- `node --check js/main.js`: passes.
- Every local `src`/`href` in `index.html` and image path in `js/main.js` resolves to an existing file. All `#anchor` links match an element id.
- CSS braces balanced. Resume PDF converted from your DOCX with LibreOffice.

## Not tested (do these)
- Layout at 1920, 1440, 1366, 1024, 768, 430, 390, 375, 360px; horizontal overflow, especially the rotated marquee band and hero headline on 360px.
- GSAP intro, ScrollTrigger reveals, parallax, magnetic buttons. Mobile menu open/close and keyboard focus. Reduced-motion behaviour (animations are disabled through `matchMedia` and a CSS rule).
- Console errors, Lighthouse scores, form submission.

## Known limitations
- Contact form needs a Formspree ID (see README).
- Google Fonts load from a CDN.
- Placeholder SVGs, no portrait cutout or dummy video. Sitemap/robots use `example.com`.
- Torn-paper edge uses CSS masks (supported in current browsers; `-webkit-` prefixed for Safari/Chrome).
- Several project descriptions are deliberately thin because the resume gives little detail.
