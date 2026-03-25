# Pharmaceutica Site

React + Vite + Tailwind CSS website.

## Local Dev

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → set to **GitHub Actions**
3. Push to `main` — the workflow auto-builds and deploys

## Custom Domain

Add a `CNAME` file in `public/` with your domain, e.g.:
```
pharmaceutica.com
```

Then update `VITE_BASE_PATH` in `.github/workflows/deploy.yml` to `./`
