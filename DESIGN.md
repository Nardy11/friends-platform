---
version: alpha
colors:
  background: "#211A22"
  surface: "#2B222C"
  surfaceRaised: "#352936"
  text: "#F8EFEC"
  muted: "#C5B5BF"
  coral: "#ED927F"
  border: "#55424F"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
rounded:
  card: "18px"
  control: "11px"
  pill: "999px"
omitted:
  - section: spacing
    reason: "Existing layout rhythm is retained pending a broader component audit."
  - section: components
    reason: "Shared component inventory is incomplete; do not claim a canonical library prematurely."
---

## Overview
Friends is a community platform for meaningful offline connection: animal shelter volunteering, companionship for older adults, and shared social events. The interface should feel like a welcoming community room after sunset: warm, grounded, social, and calm rather than clinical or corporate.

The product uses a hybrid register. The public landing page may be expressive; authenticated workflows prioritize clarity, predictable navigation, readable state, and direct actions.

## Colors
The primary identity is charcoal plum with coral accents. Coral is reserved for primary actions, selected dates, unread indicators, and small moments of emphasis. Light mode uses warm ivory and rose-tinted surfaces with dark plum text. Theme changes preserve semantic meaning and contrast.

## Typography
Manrope is used for display headings and strong labels. DM Sans is used for body copy, forms, and dense information. Labels remain compact but readable.

## Layout
The landing page is editorial and story-led. Authenticated pages use a persistent navigation rail on wide screens, a compact header on small screens, and grouped content panels. Calendar and plan list belong to one My Plans destination.

## Elevation & Depth
Use restrained surface contrast, subtle borders, and soft shadows. Avoid pale grey notification cards on dark backgrounds and green-tinted auth panels.

## Shapes
Cards use 18px radii, controls 11px, and pill shapes only for compact statuses. Focus rings remain visible.

## Components
- Friends wordmark: one shared line-art heart mark across landing, auth, and dashboard.
- Theme toggle: available on landing, login, signup, and dashboard; persists the selected theme.
- Notification control: topbar-only entry point with unread count; preview ends with a View all action.
- My Plans: one navigation destination containing calendar selection and matching activities.
- Empty state: illustration, explanation, and recovery action.

## Do's and Don'ts
- Use warm plum, charcoal, coral, and warm ivory.
- Keep notification states consistent after marking items read.
- Show all activities when no date is selected.
- Do not use teal/green as a dominant auth or dashboard color.
- Do not expose navigation links to missing destinations.
- Do not imply browser-local demo data is server-backed or shared.
