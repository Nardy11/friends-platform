# Friends — Make room for connection

Friends is a social platform prototype for finding meaningful offline connections through animal shelter volunteering, visits to elderly care homes, and shared social activities.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build with `npm run build`.

## Features

- Separate login and sign-up routes
- Profile details and selectable interests
- Rounded, theme-matched form controls
- Password visibility toggles
- Live password strength feedback: length, uppercase, lowercase, number and special character
- Client-side demo login and registration

## Authentication notice

Authentication remains a browser-local prototype. Passwords are SHA-256 hashed before being stored in local storage, but this is not production authentication. It does not support server-side sessions, cross-device accounts, verification, or secure password recovery. Never use a real password. Connect Supabase Auth, Firebase Authentication, or a secure backend before production.

## Date picker

The date input and focus state are styled. The opened calendar popup is browser/operating-system UI; its internal shape and colors cannot be consistently customized using normal CSS.

## Deployment

Configured for Next.js static export. GitHub Pages can serve the exported `out/` folder using the workflow in `.github/workflows/deploy.yml`.

## License

No license has been specified yet.
