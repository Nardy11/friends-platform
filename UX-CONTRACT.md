# Friends UX Contract

## Platform
Next.js 15 App Router with static export on GitHub Pages. Landing/auth pages are shells with client-side interactive forms. The dashboard is a client component. localStorage is the current demo persistence boundary.

## Navigation
- Landing: Home, Why Friends, How It Works, Impact, Stories, Log in, Get Started, theme toggle.
- Auth: separate Login and Signup routes with shared branding and theme toggle.
- Dashboard: Home, Explore, one My Plans destination. Notifications open from the topbar, not a sidebar item.
- My Plans contains calendar and activity list together.

## Calendar and plans
- Selecting a date filters activities to that exact date.
- Selecting it again or pressing Clear date restores all upcoming activities.
- Dates with activities have an indicator; selected date uses coral.
- Empty state has an illustration, explanation, and View all upcoming plans action.
- Creating/removing plans updates and persists browser-local state.

## Notifications
- Topbar control displays unread count and opens a preview.
- Preview ends with View all notifications.
- Expanded view lists all notification records.
- Mark all as read updates unread state without a washed-out disabled appearance.
- Notification state persists in the current browser.

## Theme
- Theme toggle exists on landing, login, signup, and dashboard.
- Selected theme is stored in localStorage and applied to the document root.
- Theme changes preserve selected, unread, booked, requested, and disabled semantics.

## Auth and persistence limits
- Current login/signup are browser-local demo flows, not production authentication.
- Static export cannot execute Next.js route handlers or server actions.
- Plans and notifications do not sync between devices/users. Production auth, server persistence, permissions, and delivery require server-capable hosting and a secure provider.

## Accessibility
- Use native button/link semantics and accessible names for icon-only controls.
- Calendar days are buttons; empty cells are disabled.
- Reduced motion is respected.
- Dashboard collapses to one column on narrow screens.
