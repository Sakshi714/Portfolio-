# Sakshi Kumari — Portfolio Website

Live portfolio built with pure HTML, CSS & JavaScript. Deployable directly on GitHub Pages.

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Option A — New Repository (Recommended)

1. Go to [github.com/new](https://github.com/new)
2. Name the repo exactly: `Sakshi714.github.io`
   - This makes your site live at `https://Sakshi714.github.io`
3. Set to **Public**, click **Create repository**
4. Upload all files from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - *(optional)* Copy your `Sakshi_Kumari_Resume.docx` here so the Download Resume button works
5. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
6. Click **Save** — your site will be live in ~60 seconds! 🎉

---

### Option B — Existing Repository

1. Create a new branch called `gh-pages` OR use `main`
2. Upload all portfolio files to the root of that branch
3. Go to **Settings → Pages → Source → your branch → / (root)**
4. Save and wait ~60 seconds

---

## 📁 File Structure

```
portfolio/
├── index.html          ← Main page
├── style.css           ← All styles
├── script.js           ← Interactions & animations
├── README.md           ← This file
└── Sakshi_Kumari_Resume.docx  ← (add this for resume download)
```

## ✏️ Customization

| What to change | Where |
|---|---|
| Add new projects | `index.html` → `#projects` section |
| Update skills | `index.html` → `#skills` section |
| Change colors | `style.css` → `:root` CSS variables |
| Add LinkedIn / LeetCode | `index.html` → contact cards |
| Update GitHub link | Search `Sakshi714` → replace with your handle |

## 🎨 Design

- **Dark editorial** aesthetic with teal `#00e5c0` accent
- Fonts: Syne (headings) + DM Sans (body) + JetBrains Mono (code)
- Fully responsive — mobile, tablet, desktop
- Scroll-triggered reveal animations
- Zero dependencies — no frameworks, no build step
