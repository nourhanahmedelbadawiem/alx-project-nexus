## StaySmart – Property Listing Platform

StaySmart is a modern, responsive web application for browsing property listings, exploring rich property details, and discovering curated stays through a clean, accessible, and performant UI.  
It is built with **Next.js**, **TypeScript**, and **TailwindCSS** to support scalable, production-ready development.

---

## Project Overview

StaySmart focuses on:

- **Clean browsing experience**: Users can scan featured and future properties quickly via cards and clear visual hierarchy.
- **Detail-first mindset**: Each property is modelled with key information (location, price, bedrooms, bathrooms, imagery).
- **Modern front-end foundation**: Built using the Next.js App Router, React Server Components, and TailwindCSS v4.
- **Accessibility and responsiveness**: Layouts and components are designed to work well across devices and assistive technologies.

The initial version ships with a **featured properties landing page**, mock data, and a scalable folder structure that makes it easy to plug in real data, filters, authentication, and dashboards later.

---

## Features

- **Featured property grid**
  - Curated list of properties rendered as responsive cards.
  - Each card displays title, location, price per night, bedroom/bathroom counts, and an optional tag (e.g., “Featured”, “New”).
- **Modern layout**
  - `SiteHeader` with product branding and primary actions.
  - `SiteFooter` with concise product messaging.
  - Constrained content width for readability and centered layout on large screens.
- **Design & UX**
  - Tailwind utility classes for consistent spacing, typography, and color system.
  - Subtle shadows, rounded corners, and motion for a refined feel.
- **Accessibility**
  - Semantic sections for hero, listing grid, and “Why StaySmart” feature list.
  - High-contrast color palette and responsive typography.
- **Scalable architecture**
  - Typed property model and reusable components ready for extension (search, filters, server data, etc.).

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 (`@tailwindcss/postcss` pipeline)
- **Runtime**: React 19
- **Tooling & Quality**
  - ESLint with `eslint-config-next`
  - Strict TypeScript configuration

---

## Folder Structure

High-level structure of the app:

- **`app/`**: App Router entry points and global styles
  - `app/layout.tsx` – Root layout for the entire application.
  - `app/page.tsx` – Home page with hero section and featured property grid.
  - `app/globals.css` – Global styles and TailwindCSS import.
- **`components/`**: Reusable UI components
  - `components/layout/SiteHeader.tsx` – Application header (branding & primary actions).
  - `components/layout/SiteFooter.tsx` – Application footer with short tagline.
  - `components/properties/PropertyCard.tsx` – Card component for rendering a single property.
- **`types/`**
  - `types/property.ts` – Shared `Property` type used across the app.
- **`lib/`**
  - Placeholder for future shared utilities (e.g., data fetching, formatting, API clients).
- **`hooks/`**
  - Placeholder for shared React hooks (e.g., filters, responsive helpers, feature toggles).

This structure is intentionally minimal yet scalable; as the platform grows, you can introduce feature-based folders (e.g., `features/properties`, `features/auth`) or domain-specific modules under `app/` and `components/`.

---

## Getting Started

### Prerequisites

- **Node.js**: v20.9+ recommended  
- **Package manager**: npm (default for this project)

### Installation

1. Clone or download the repository:

```bash
git clone https://github.com/<your-username>/alx-project-nexus.git
cd alx-project-nexus
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser to view the app.

---

## Development Notes

- **Home page entry**: Main UI lives in `app/page.tsx`.
- **Property model**: Update or extend the `Property` type in `types/property.ts` as new attributes are needed (e.g., amenities, rating, host data).
- **Styling**: Tailwind utility classes are preferred for layout and components. If you need custom tokens or design primitives, they can be defined in `app/globals.css` with CSS variables and `@theme`.
- **Images**: Remote images are currently loaded from `images.pexels.com` and configured in `next.config.ts`. Add more domains there as you integrate real property photos.

---

## Roadmap Ideas

Potential next steps for StaySmart:

- Property search and advanced filtering (location, price, room count, amenities).
- Dedicated property detail pages with richer media galleries.
- User accounts, favorites, and saved searches.
- Host onboarding and property management flows.
- SEO enhancements (metadata, Open Graph tags, sitemap).

---

## License

This project is currently unlicensed for public use.  
Update this section with your preferred license (e.g., MIT) if you intend to open source the repository.

