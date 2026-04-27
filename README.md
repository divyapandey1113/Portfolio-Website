# Divya Pandey — Personal Site

Personal portfolio for **Divya Pandey** — Data Science Intern @ Algo8.AI, B.Tech AI & Data Science (MITS Gwalior, 2026), GATE CSE 2026 qualified.

Single-page static site. No build step, no framework. Just `index.html`, `styles.css`, `script.js`, and the résumé PDF.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All content (hero, about, experience, projects, publications, skills, education, honors, contact) |
| `styles.css` | Dark theme, responsive, custom properties |
| `script.js` | Sticky-nav state, scroll-spy, mobile menu, reveal-on-scroll |
| `Divya_Pandey_Resume_2026.pdf` | Résumé — linked from the hero "View résumé" button |

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html`.

## Deploy to GitHub Pages

1. **Create a new GitHub repo.** Two naming options:
   - `divyapandey1113.github.io` — site lives at `https://divyapandey1113.github.io` (recommended for a personal site; only one of these is allowed per account).
   - Any other name (e.g. `portfolio`) — site lives at `https://divyapandey1113.github.io/portfolio/`.

2. **Push this folder** as the repo root:

   ```bash
   git remote add origin https://github.com/divyapandey1113/<REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**: in the repo on github.com → Settings → Pages → *Source* = `Deploy from a branch`, *Branch* = `main` / `(root)` → Save.

4. Wait ~1 minute. The site will be live at the URL shown on the Pages settings screen.

## Linking the résumé

The résumé PDF lives **in the same folder** as `index.html`, so the link in `index.html`:

```html
<a href="Divya_Pandey_Resume_2026.pdf" target="_blank" rel="noopener">View résumé ↗</a>
```

…works both locally and on GitHub Pages without any path changes. To replace the résumé later, just overwrite `Divya_Pandey_Resume_2026.pdf` and `git push`.

## Customizing

- **Colors**: edit the `:root` block at the top of `styles.css` (`--accent`, `--accent-2`, `--bg`).
- **Content**: everything is in `index.html` — just search-and-edit.
- **Stats above the fold**: in `index.html`, look for `<div class="hero-stats">`.
