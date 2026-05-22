# Cal State Wake — Website

Static, multi-page marketing website for **Cal State Wake**, a family-owned Centurion &
Supreme boat dealership in Castaic, California. Built with plain HTML and CSS on top of
Bootstrap 4 — no build step, no framework.

---

## Tech stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Markup         | Static HTML5                                        |
| Layout / grid  | Bootstrap 4.6.2 (CDN)                               |
| Styling        | One custom stylesheet — `assets/css/style.css`      |
| Fonts          | Montserrat (Google Fonts), Acumin Pro (local)       |
| Icons          | Font Awesome 7 (CDN)                                |
| Carousels      | Owl Carousel 2 (CDN)                                |
| Lightbox       | Fancybox (CDN)                                      |
| Scripting      | jQuery 3.7 + `assets/js/script.js`                  |

No installation or build is required — all dependencies load from CDNs.

---

## Getting started

Open any `.html` file directly in a browser, or serve the folder with any static server
so relative paths and embedded maps resolve correctly:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000/home.html`.

---

## Project structure

```
cal-state-wake-html/
├── home.html                 # Home
├── service.html              # Service center
├── service-individual.html   # Single service detail
├── brand-page.html           # Supreme brand / inventory
├── sell-trade.html           # Sell or trade your boat
├── financing.html            # Financing + payment calculator
├── proshop.html              # Pro Shop
├── events.html               # Events & promotions list
├── event-detail.html         # Single event detail
├── blog.html                 # News & articles list
├── blog-detail.html          # Single article
├── about.html                # About / company story
├── contact.html              # Contact
├── crew.html                 # Meet the crew
├── crew-dept.html            # Crew grouped by department
├── team-bio.html             # Individual team member bio
├── README.md
└── assets/
    ├── css/style.css         # All site styles (single source of truth)
    ├── js/script.js          # Nav, mega-menu and carousel behaviour
    ├── fonts/                # Acumin Pro font files
    ├── images/               # Page-specific image folders
    └── videos/               # Home page background video
```

---

## Pages

16 pages, all sharing the same header, footer and design system.

| Page                  | File                     | Summary                                                  |
| --------------------- | ------------------------ | -------------------------------------------------------- |
| Home                  | `home.html`              | Hero video, brand cards, new arrivals, services, promos  |
| Service               | `service.html`           | Service intro, feature rows, request-service form, FAQs  |
| Service Individual    | `service-individual.html`| Single service breakdown                                 |
| Brand Page            | `brand-page.html`        | Supreme intro, model cards, available-inventory grid     |
| Sell & Trade          | `sell-trade.html`        | Why-sell features, process steps, valuation form         |
| Financing             | `financing.html`         | Finance benefits + payment calculator                    |
| Pro Shop              | `proshop.html`           | Brand strip, "What's in store", store location + map     |
| Events                | `events.html`            | Events & promotions card grid                            |
| Event Detail          | `event-detail.html`      | Date/venue card, gallery, brands, inventory, RSVP form   |
| Blog                  | `blog.html`              | Category filter + article card grid                      |
| Blog Detail           | `blog-detail.html`       | Article body + "Similar Posts" sidebar                   |
| About                 | `about.html`             | Origins, culture, community, crew, "Join our journey"    |
| Contact               | `contact.html`           | Contact form + location map                              |
| Crew                  | `crew.html`              | Crew member grid                                         |
| Crew by Department    | `crew-dept.html`         | Crew grouped into Admin / Sales / Service                |
| Team Bio              | `team-bio.html`          | Member bio, contact form, their listings                 |

---

## Design system

All styling lives in `assets/css/style.css`. Reusable building blocks keep the pages
consistent — extend these before writing anything new.

**Typography & color**

- Font: Montserrat throughout.
- Brand colors: Blackish `#191919`, Gold `#B08830`, ADA Gold `#906F27`,
  light grays `#D9D9D9` / `#E6E6E6` / `#FAFAFA`.
- Headings: `.headerHeading` (80px), `.csw-page-title` (48px), `.mainHeading` /
  `.mainHeadingWhite` (40px), `.backLinkTitle` (24px).
- Body text: `.blackPara`, `.whitePara`, `.lgBlackPara`; `.goldColor` recolors text gold.

**Buttons** — `.yellowBtn` (gold), `.whiteBtn` (outline), `.blackBtn` (dark).

**Shared sections** — the header nav + inventory mega-menu, the footer, the
`.csw-services-*` hero/form/FAQ blocks, `.csw-feature-*`, `.csw-process*`,
`.csw-section` spacing, and the `grid-*` boat-listing card are reused across pages.

### Conventions

- Reuse existing classes first; only add new ones when a layout genuinely has no
  equivalent. New, page-specific classes use the `csw-` prefix.
- Every page repeats the same `<header>` nav, inventory mega-menu and `<footer>`
  markup so they stay visually identical.
- Layout is responsive via the Bootstrap grid (breakpoints at 1200 / 991 / 768 / 576px).
- Image folders live under `assets/images/<page>/`. Where final assets were not yet
  supplied, `assets/images/home/grey.webp` is used as a grey placeholder for
  CMS-driven content (inventory cards, crew photos, galleries).

---

## Notes

- Inventory, crew, event and blog cards are **templates** (`Year Make Model`,
  `Name Lastname`, etc.) intended to be populated from a CMS or listings feed.
- Forms post to `#` — wire them to a real endpoint before launch.
- Maps use keyless Google Maps embeds.

---

Powered by MDS Brand.
