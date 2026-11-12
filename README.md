<div align="center">

# Friends

**Make room for connection.**

A community platform that turns loneliness into real-world time together:
volunteering at animal shelters, visiting older adults, and joining small, friendly events.

[![Live site](https://img.shields.io/badge/Live_site-nardy11.github.io%2Ffriends--platform-ed927f?style=for-the-badge&logo=githubpages&logoColor=white)](https://nardy11.github.io/friends-platform/)

[![Deploy](https://github.com/Nardy11/friends-platform/actions/workflows/deploy.yml/badge.svg)](https://github.com/Nardy11/friends-platform/actions/workflows/deploy.yml)
![Next.js](https://img.shields.io/badge/Next.js-15-171319?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-171319?logo=react&logoColor=61DAFB)
![Static export](https://img.shields.io/badge/Static_export-GitHub_Pages-171319?logo=github&logoColor=white)
![Themes](https://img.shields.io/badge/Themes-dark_%2B_light-a4473a)
![Responsive](https://img.shields.io/badge/Responsive-desktop_%2B_mobile-a4473a)

[**Open the website**](https://nardy11.github.io/friends-platform/) ·
[**Try the member app**](https://nardy11.github.io/friends-platform/app/) ·
[Sign up](https://nardy11.github.io/friends-platform/signup/) ·
[Log in](https://nardy11.github.io/friends-platform/login/)

<img src="docs/screenshots/banner-dark-light.webp" alt="Friends landing page, dark theme on the left and light theme on the right" width="100%">

</div>

---

## Why Friends

In a fast-paced world, many people, animals and older adults feel left out. Friends brings them together:

| | | |
|---|---|---|
| 🐾 **Animals** | Volunteer at shelters: walks, feeding, care and play. | Free to volunteer |
| 🤝 **Grandfriends** | Share a conversation, a game or an afternoon with older adults. | Learn from their experience |
| 🎉 **Events** | Small dinners, pottery, skating, walks and weekend trips. | Make friends and memories |

What people get out of it: **feeling less alone**, **making someone's day**, **learning from elders**, **affection from pets**, **real friendships** and **memories and adventures**.

---

## Take the tour

The landing page includes a working phone. Tap inside it (or just scroll) and it runs through the app: log in, browse, open an event, request to join, see your plans and chat with the group. When the story changes side, the phone spins 360° across the page as a solid 3D device.

<div align="center">
<img src="docs/screenshots/phone-tour.gif" alt="Animated tour of the interactive phone preview on the landing page" width="760">
</div>

---

## Screenshots

### Landing page

| Dark | Light |
|---|---|
| <img src="docs/screenshots/landing-dark.webp" alt="Landing page hero in dark theme"> | <img src="docs/screenshots/landing-light.webp" alt="Landing page hero in light theme"> |
| <img src="docs/screenshots/benefits-dark.webp" alt="Benefits section in dark theme"> | <img src="docs/screenshots/benefits-light.webp" alt="Benefits section in light theme"> |
| <img src="docs/screenshots/phone-dark.webp" alt="Interactive phone preview in dark theme"> | <img src="docs/screenshots/phone-light.webp" alt="Interactive phone preview in light theme"> |

### Log in and sign up

| Log in (dark) | Log in (light) |
|---|---|
| <img src="docs/screenshots/login-dark.webp" alt="Log in page in dark theme"> | <img src="docs/screenshots/login-light.webp" alt="Log in page in light theme"> |

| Custom dropdown | Custom date picker |
|---|---|
| <img src="docs/screenshots/signup-dropdown.webp" alt="Branded gender dropdown on the sign-up form"> | <img src="docs/screenshots/signup-datepicker.webp" alt="Branded date of birth picker on the sign-up form"> |

### Member app

| Home (dark) | Home (light) |
|---|---|
| <img src="docs/screenshots/app-home-dark.webp" alt="Member app home in dark theme"> | <img src="docs/screenshots/app-home-light.webp" alt="Member app home in light theme"> |
| **Explore events** | **Notifications** |
| <img src="docs/screenshots/app-explore.webp" alt="Explore events with filters"> | <img src="docs/screenshots/app-notifications.webp" alt="Notifications popover under the bell"> |
| **My plans** | **Applicant profile** |
| <img src="docs/screenshots/app-plans.webp" alt="Calendar beside the list of upcoming plans"> | <img src="docs/screenshots/app-profile.webp" alt="Applicant profile page with accept and decline"> |

| Safe destructive actions |
|---|
| <img src="docs/screenshots/app-confirm.webp" alt="Confirmation dialog before declining an applicant" width="100%"> |

### Mobile

<div align="center">
<img src="docs/screenshots/mobile.webp" alt="Landing page, member app home and My plans on a phone" width="100%">
</div>

---

## Features

**Landing page**
- Cut-out brand portrait with four glass cards drifting around it
- Interactive phone preview with eight real mini screens, tap and scroll navigation, and a 3D spin
- Benefits bento, how it works, stories carousel and a closing call to action
- Dark and light themes, remembered per browser

**Accounts**
- Separate log in and sign up pages with a password eye toggle and a live password strength meter
- Branded dropdowns and a day / month / year date picker, keyboard friendly
- Demo accounts stored in the browser (see [Demo limits](#demo-limits))

**Member app** (`/app/`)
- Explore shelters, grandfriends homes and events with search, area and budget filters
- Request a visit slot or join an event, then chat with the group
- My plans: compact calendar with activity dots next to the list, cancel with confirmation
- Hosting: create events, auto-accept switch, applicant profiles with green Accept and red Decline
- Saved for later, notifications popover with unread count, profile and budget slider
- Every remove, decline and cancel asks "Are you sure?" first, and every change updates the screen immediately

---

## Pages

| Route | What it is |
|---|---|
| [`/`](https://nardy11.github.io/friends-platform/) | Landing page with the interactive phone tour |
| [`/login/`](https://nardy11.github.io/friends-platform/login/) | Log in |
| [`/signup/`](https://nardy11.github.io/friends-platform/signup/) | Create an account |
| [`/app/`](https://nardy11.github.io/friends-platform/app/) | Member app (home, explore, plans, chats, saved, event requests, profile) |

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) with `output: 'export'` |
| UI | React 19, hand-written CSS with theme tokens, no UI kit |
| Member app | A single static page in `public/app/` with vanilla JavaScript |
| Icons | [Lucide](https://lucide.dev) icon font |
| Fonts | Manrope (display) and DM Sans (body) |
| Hosting | GitHub Pages, deployed by GitHub Actions on every push to `main` |

---

## Project structure

```text
friends-platform/
├── app/
│   ├── page.jsx            # Landing page
│   ├── login/page.jsx      # Log in
│   ├── signup/page.jsx     # Sign up
│   ├── layout.jsx
│   └── globals.css         # Landing and auth styles, theme tokens
├── components/
│   ├── PhoneShowcase.jsx   # Interactive 3D phone tour
│   ├── AuthForm.jsx        # Log in and sign up forms
│   ├── FriendsSelect.jsx   # Branded dropdown
│   ├── DatePicker.jsx      # Branded date picker
│   ├── ThemeToggle.jsx
│   └── FriendsBrand.jsx    # Heart logo mark
├── public/
│   ├── app/index.html      # Member app
│   └── friends-*.webp      # Brand imagery
├── docs/screenshots/       # Images used in this README
├── DESIGN.md               # Visual design system
├── UX-CONTRACT.md          # Navigation and interaction rules
└── .github/workflows/      # Deploy and pull request checks
```

---

## Run it locally

Requires Node.js 20 or newer.

```bash
git clone https://github.com/Nardy11/friends-platform.git
cd friends-platform
npm install
npm run dev
```

The site is served under the GitHub Pages project path:

- Landing page: http://localhost:3000/friends-platform/
- Member app: http://localhost:3000/friends-platform/app/index.html

`npm run build` writes the static site to `out/`.

---

## Deployment

Every push to `main` runs [`deploy.yml`](.github/workflows/deploy.yml): it installs, builds the static export, checks that the landing, login and signup pages exist, and publishes `out/` to GitHub Pages. Pull requests run [`validate.yml`](.github/workflows/validate.yml), which builds and checks every route including `/app/`.

The Pages source must stay set to **GitHub Actions**. The `/friends-platform` base path is set in [`next.config.mjs`](next.config.mjs).

---

## Design

| Token | Dark | Light |
|---|---|---|
| Background | `#171319` | `#efe6e2` |
| Surface | `#211c24` | `#faf4f1` |
| Text | `#f8f1ef` | `#1f171e` |
| Accent | `#ed927f` | `#a4473a` |

Warm plum surfaces with a single coral accent, Manrope for headings and DM Sans for text, rounded 12 to 20px corners and glass only where it sits over imagery. Details live in [DESIGN.md](DESIGN.md) and [UX-CONTRACT.md](UX-CONTRACT.md).

**Accessibility:** native buttons and links, visible focus rings, keyboard support in the custom controls, `aria` labels on icon buttons, and every animation turns off under *Reduce motion*.

---

## Demo limits

This is a front-end prototype on a static host:

- Accounts, plans, saved items and notification states live in **this browser's localStorage**. They do not sync between devices or people.
- Passwords are hashed in the browser before storage, but this is **not production authentication**. Do not use a real password.
- People, events and reviews in the app are sample data.

A production version needs a server-capable host, a database and an authentication provider.

---

## Roadmap

- [ ] Real accounts and a shared backend
- [ ] Native iPhone and Android apps
- [ ] Push notifications and reminders
- [ ] Verified partner shelters and care homes
- [ ] Reviews after each visit or event

---

<div align="center">

Built by [Nardy Michelle](https://github.com/Nardy11) · [nardy11.github.io/friends-platform](https://nardy11.github.io/friends-platform/)

</div>
