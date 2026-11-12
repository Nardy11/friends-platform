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

## GitHub Pages
A GitHub Actions workflow builds the Next.js static export and publishes `out/`. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the deployment source. Once the workflow succeeds, the expected site URL is https://nardy11.github.io/friends-platform/.

See [DESIGN.md](./DESIGN.md) for the visual system and accessibility notes.
