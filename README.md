# Sakthivel R — Portfolio

A personal portfolio website built with **React (Vite)** and **Tailwind CSS**.

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## 📦 Build for production

```bash
npm run build
```

The production-ready files will be generated inside the `dist/` folder.

## 📄 Resume download

The "Download Resume" button downloads `public/assets/Sakthivel_R_Resume.pdf`.
Replace this file any time to update the resume — no code changes needed.

## 🖼️ Profile photo

Located at `src/assets/profile.jpg`. Replace it to update the photo used in the
navbar and hero section.

## 🌐 Deploy to GitHub Pages

1. Push this project to a GitHub repository (see steps below).
2. Install the gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add these lines to `package.json` `"scripts"`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repo settings → Pages, set the source to the `gh-pages` branch.

## 📤 Push this project to GitHub

```bash
git init
git add .
git commit -m "Initial commit: React + Tailwind portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<repo-name>` with your GitHub username and the
repository name you create on GitHub.
