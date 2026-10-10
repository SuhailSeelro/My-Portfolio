# Suhail Ahmed — Portfolio

A static portfolio site + auto-generated resume, built from one shared data file.

## Files

```
index.html      → the portfolio page
resume.html      → the resume (reads the same data, auto-updates)
data.js           → SINGLE SOURCE OF TRUTH — edit this file to update either page
style.css        → portfolio styling
script.js         → renders index.html from data.js
assets/
  profile.jpg
  certificates/
    *.png            (thumbnails shown on the site)
    pdf/*.pdf         (originals, offered as downloads)
```

## How to add a new skill (or project, or certificate)

Open `data.js` in any text editor.

**New skill** — find `skillGroups` and add a string to the right group's
`skills` array (or add a whole new group object):

```js
{
  group: "Languages",
  skills: ["Java", "C#", "PHP", "JavaScript", "HTML5 & CSS3", "SQL", "Python"], // ← added
},
```

**New project** — add an object to the `projects` array (add a `live:` line if it has a deployed site, and it gets a "Live site" button and a LIVE badge):

```js
{
  name: "Project Name",
  category: "Game",
  platform: "Unity 3D · PC",
  description: "One or two sentences about it.",
  live: "https://your-site.netlify.app/",   // optional
  repo: "https://github.com/SuhailSeelro/your-repo",
},
```

**New certificate** — drop the PDF into `assets/certificates/pdf/`, generate
a thumbnail (any PDF-to-PNG tool, e.g. `pdftoppm -png -r 150 file.pdf assets/certificates/name`),
then add an entry to `certificates`:

```js
{
  type: "course",            // or "specialization" for multi-course badges
  title: "Certificate Title",
  issuer: "Issuer Name",
  date: "Nov 27, 2025",
  file: "matching-filename-without-extension",
  verify: "https://coursera.org/verify/XXXX",   // optional
},
```

Save the file — reload `index.html` and `resume.html` in the browser and
both reflect the change immediately. No other file needs editing.

## Viewing the site

Just open `index.html` in a browser. For the cleanest experience (so
relative links behave exactly like a real deployment), serve the folder
with a tiny local server instead of opening the file directly:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Hosting it for real

Any static host works as-is — no build step, no backend:
- **GitHub Pages**: push this folder to a repo, enable Pages on the `main` branch.
- **Netlify / Vercel**: drag-and-drop the folder onto their dashboard.

## Downloading the resume

Open `resume.html` and click **Download / Print PDF** — it opens the
browser's print dialog with "Save as PDF" as an option, already formatted
for a clean single-page print. Because it renders from `data.js`, it is
never out of date with the portfolio.
