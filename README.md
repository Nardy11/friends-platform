# Friends — Next.js only

Friends is a Next.js App Router application for building meaningful offline connection through animal shelter volunteering, intergenerational visits, and shared social activities.

## Stack
- Next.js 15 App Router
- React 19
- Responsive React pages and shared CSS
- Static export for static hosting

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to generate the static site in `out/`.

## Routes
- `/` — landing page and example activities
- `/login/` — dedicated login page (email and password only)
- `/signup/` — separate registration page with profile details, interests, password strength rules, confirmation, and terms

Authentication pages are separate Next.js routes, not modals or popups.

## Demo authentication
The forms hash demo passwords with SHA-256 before storing demo accounts in this browser. This is still not production authentication: client-side hashing and local storage do not provide server-side identity, secure sessions, or account recovery. Do not use real passwords. Before launch, integrate a secure provider such as Supabase Auth or Firebase Authentication with server-side sessions, email verification, password reset, rate limiting, and data protection.

## Deployment
The project uses Next.js static export. GitHub Pages cannot run a Next.js server, so the workflow builds `out/` and deploys the export through GitHub Pages. In repository Settings → Pages, select **GitHub Actions** as the source.
