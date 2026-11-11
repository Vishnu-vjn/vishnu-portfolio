# Media replacement guide
All media is placeholder SVG. Keep the same file names, or change the path in `index.html` / `PROJECTS` in `js/main.js`.

| File | Used in | Size | Format |
|---|---|---|---|
| `assets/images/profile/profile-placeholder.svg` | Hero portrait and About polaroid (two `<img>` tags in `index.html`) | 1200x1500 (4:5) | Transparent PNG/WebP cutout looks best; JPG works |
| `assets/images/projects/*.svg` (6 files) | Work cards | 1600x1200 (4:3) | WebP or JPG, under 200 KB |
| `assets/images/backgrounds/showreel-poster.svg` | Showreel poster | 1920x1080 (16:9) | WebP or JPG |
| `assets/icons/favicon.svg` | Browser tab | any | SVG or PNG |

**Profile photo**: save as `assets/images/profile/profile.png`, then change both `src` values in `index.html` (search `profile-placeholder`) and the `og:image` meta tag.
**Project screenshots**: save as e.g. `assets/images/projects/brandstory.jpg` and update the `img` field for that project in `PROJECTS` (`js/main.js`).
**Video**: no dummy video is bundled (a poster placeholder is used instead of a fake player). Put your MP4 (H.264, under 15 MB) in `assets/videos/` and set `REEL_SRC` in `js/main.js`, for example `"assets/videos/showreel.mp4"`. Use a poster image in the same 16:9 ratio.
**Layout safety**: images use `object-fit: cover` inside fixed-ratio frames, so any size works, but keep the ratios above to avoid cropping faces or text. Keep the `width`/`height` attributes to prevent layout shift.
