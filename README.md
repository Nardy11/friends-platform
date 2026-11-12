# Friends — Next.js only

Friends is a Next.js App Router application for building meaningful offline connection through animal shelter volunteering, intergenerational visits, and shared social activities.

## Stack
- Next.js 15 App Router
- React 19
- Static export for GitHub Pages

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to generate the static site in `out/`.

## Routes
- `/` — landing page
- `/login/` — independent login page
- `/signup/` — independent registration page

## GitHub Pages deployment
The repository is a project site, so its public address is:
https://nardy11.github.io/friends-platform/

The project prefix is fixed in `next.config.mjs`. GitHub Actions builds the Next.js static export and deploys the contents of `out/` using the GitHub Pages artifact workflow. Do not switch Pages to branch/root publishing; the Pages source must be **GitHub Actions**.

The workflow checks that the landing, login, and signup HTML entry points exist before deployment.

## Demo authentication
The forms hash demo passwords with SHA-256 before storing demo accounts in this browser. This is still not production authentication: client-side hashing and local storage do not provide server-side identity, secure sessions, or account recovery. Do not use real passwords. Integrate a secure authentication provider before production.


## Dashboard storage boundary

The `/app/` route is a client-side demo dashboard. Plans and notification read states are persisted in the current browser with localStorage, so they survive reloads on that device. This is not a shared backend and does not synchronize between devices or users.

This repository uses `output: 'export'` and GitHub Pages. Static export cannot run Next.js route handlers or server actions at request time. Production multi-user persistence, secure sessions, permissions, and notification delivery require a server-capable Next.js deployment and a database/auth provider. The current browser-local demo authentication is not production authentication.
