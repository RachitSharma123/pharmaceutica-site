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


## Troubleshooting GitHub Pages Deploy

If Actions fails at `actions/deploy-pages` with `HttpError: Not Found (404)`, GitHub Pages is not enabled yet for the repo.

1. Open **Settings → Pages**
2. Under **Source**, choose **GitHub Actions**
3. Re-run the failed workflow (or push a new commit to `main`)
