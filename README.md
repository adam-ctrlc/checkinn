# CheckInn — Hotel Management System

A luxury hotel marketing site and room‑availability browser, built as a Svelte 5 single‑page app with Vite. It features an editorial landing page and an interactive room‑selection page with live filtering, shareable URLs, and a details modal.

## Features

**Landing (`/`)**
- Full‑bleed hero with cursive display typography
- About, Amenities, Gallery and CTA sections with scroll‑reveal animations
- **Experiences** — a horizontal carousel driven by vertical scroll (pinned section)
- Themed slide‑out sidebar (mobile nav) and a footer with working links (tel/mailto/maps, section anchors, newsletter)

**Rooms (`/room`)**
- Search by room number + status filters (Available / Occupied / Reserved / Maintenance)
- Filter and search state is synced to the URL, e.g. `#/room?filter=available&q=305` (shareable & back/forward friendly)
- Rooms grouped by floor, each floor with its own background texture
- Room details in a dialog that becomes a bottom sheet on mobile
- Prices in Philippine peso (₱)

**Across the app**
- Fully responsive, mobile‑first
- Width‑capped, lazy‑loaded imagery for fast loads
- Accessible, SVG‑icon UI

## Tech stack

- [Svelte 5](https://svelte.dev) (runes) + [Vite](https://vite.dev)
- [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) for hash‑based routing
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [shadcn-svelte](https://shadcn-svelte.com) components (built on `bits-ui` + `tailwind-variants`)
- [phosphor-svelte](https://github.com/haruaki07/phosphor-svelte) icons
- Fonts via Fontsource: Geist (sans/mono), Playfair Display (serif), Cormorant (cursive display)

## Getting started

Requires [Node.js](https://nodejs.org) 18+ and [pnpm](https://pnpm.io).

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server (http://localhost:5173)
```

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite dev server |
| `pnpm build` | Build for production into `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Type‑check with `svelte-check` |

## Project structure

```
src/
  App.svelte                 # router setup
  main.js                    # app entry
  app.css                    # Tailwind theme, fonts, textures
  routes/
    Landing.svelte           # "/"  composition + layout
    Rooms.svelte             # "/room" — filtering, URL sync, floor sections
  lib/
    components/
      landing/               # Navbar, Hero, About, Amenities, Experiences, Gallery, Cta, SiteFooter, Sidebar
      rooms/                 # RoomsHeader, RoomSearch, RoomCard, RoomDialog
      ui/                    # shadcn-svelte primitives (button, input, card, badge, dialog, sheet, …)
    data/rooms.js            # room data, statuses, generator
    reveal.js                # scroll‑reveal action
    utils.js                 # cn() class helper
```

## License

Licensed under the [Apache License 2.0](./LICENSE).
