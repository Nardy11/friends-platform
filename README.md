# Friends — Make room for connection

Friends is a social platform prototype designed to help people build meaningful offline connections through animal shelter volunteering, visits to elderly care homes (Grandfriends), and shared social activities.

## Project structure
- `app/` — Next.js App Router shell
- `friends-volunteer-overview-v2.html` — prototype source retained in the repository
- `public/form-overrides.css` — rounded theme-matched form controls
- `public/form-overrides.js` — password visibility and live strength feedback

## Run locally
Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build the static site with `npm run build`.

## Password feedback
The sign-up password meter checks five rules: at least eight characters, uppercase, lowercase, a number, and a special character. Password visibility controls are provided for sign-up and login. Authentication remains a browser-local demo, not production authentication. Do not use a real password. Before launch, integrate Supabase Auth, Firebase Authentication, or a secure backend with server-side sessions, email verification, and password recovery.

## Date picker
The date input and focus state are styled to match Friends. The opened calendar popup is browser/OS UI, so its internal shape and selection colors cannot be consistently customized with ordinary CSS. A fully branded calendar requires a custom date-picker component.

## GitHub Pages (branch publishing)

This repository is configured for simple static hosting. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save. GitHub Pages will publish the root `index.html` and its referenced assets directly whenever you push to `main`; no custom Actions build workflow is needed. The repository must be public on GitHub Free.

The current root page is a static HTML prototype. If the app is later converted to a full Next.js project, run `npm run build` locally and publish the generated static export files to the Pages source branch; GitHub Pages cannot run a Next.js server or API routes.
