# naymulislam — personal site

A static site: Jekyll on GitHub Pages. No build step to run locally unless you want one, no
dependencies beyond what GitHub Pages already provides, nothing third-party at runtime.

## Writing a note from any device

GitHub mobile app, or press `.` on the repo to open `github.dev`, then:

1. Add a file in `_posts/` named `YYYY-MM-DD-some-slug.md`
2. Give it three lines of front matter:

   ```
   ---
   title: What the note is about
   ---
   ```

3. Write the body in markdown and commit. Live in about forty seconds.

## Editing the rest

| What | Where |
|---|---|
| Publications | `_data/publications.yml` — one entry per paper |
| Experience | `_data/experience.yml` — one entry per role |
| Photographs | drop files in `assets/photos/`, list them in `_data/photos.yml` |
| The register figure | `_data/register.json`; run `./refresh-data.sh` to re-pull the live leaderboard |
| Colours, type, spacing | `assets/tokens.css` — every value the site uses is here |

## Building and checking locally

```sh
./build.sh                       # builds with the real github-pages gem, in Docker
cd _site && python3 -m http.server 8099
node ../tools/verify-site.mjs    # 5 pages x 2 widths x 2 themes + a no-JS pass
```

`verify-site.mjs` fails the build if any page scrolls sideways at 390px, hides content without
JavaScript, drops below WCAG AA contrast, or has a tap target under 24px that is not inline in a
sentence.
