# How To Levitate

Next.js App Router + Tailwind v4 (PostCSS via `@tailwindcss/postcss`), mobile-first, light/dark mode persisted in `sessionStorage`.

## Run
```bash
npm install
npm run dev
```

## Stripe
Set env vars from `.env.example`. The API route is a placeholder by default:
- `POST /api/stripe/checkout`

## Deploy (Vercel)
Push to GitHub and import in Vercel.


## If you had build errors
If you previously installed deps, delete `node_modules` and reinstall:
```bash
rm -rf node_modules .next
npm install
```
