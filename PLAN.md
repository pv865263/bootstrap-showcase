# Showcase Plan

Closed inventory. Anything not listed here is out of scope (see `CLAUDE.md`).
"Docs" means the 5.3.8 documentation page inside `ref/src/`. "Example" means `ref/examples/`.

## Phase 0 — Setup (Pedro)

- [ ] Project folder with `CLAUDE.md`, `PLAN.md`, `.claude/settings.json`
- [ ] `ref/examples/` and `ref/src/` extracted
- [ ] `git init`, `.gitignore` with `ref/`
- [ ] Media files in `assets/` (see "Assets")
- [ ] `assets/EMBEDS.md` filled in
- [ ] (Before the Theme page) bootstrap.build export in `theme/`

## Phase 1 — Skeleton

- [ ] `index.html` shell: Bootstrap tags, slots, `<main>` with intro
- [ ] `js/site.js`: partial loader + site switcher
- [ ] `js/docs-snippets.js`: empty file with header comment
- [ ] `partials/top/hdr-01.html` and `partials/footer/ftr-01.html` as defaults
- [ ] `BLOCKS.md` with the catalog table header:
      `| ID | Name | Page | Source | UX ref | Overlay CSS | Known issues |`
- [ ] `assets/CREDITS.md` and `assets/EMBEDS.md` templates

## Phase 2 — Pages (one per session, in this order)

### headers.html — Headers
- [x] Every variant from Example `headers` → `partials/top/hdr-XX.html`, each previewed with `data-partial` and a "Usar no site" button.
- UX: Bootstrap example; NN/g (navigation, utility navigation).

### footers.html — Rodapés
- [x] Every variant from Example `footers` → `partials/footer/ftr-XX.html`, each previewed with a "Usar no site" button.
- UX: Bootstrap example; NN/g (footers).

### navigation.html — Navegação
- [x] Navbars: every static/sticky variant from Example `navbars` and `navbars-offcanvas` → `partials/top/nav-XX.html`, with "Usar no site".
- [ ] Links to fixed navbar layouts (`layouts/navbar-fixed.html`, `layouts/navbar-bottom.html`, `layouts/navbar-static.html`).
- [ ] Link to full-page layout `layouts/sidebars.html`.
- [x] Navs & tabs (Docs): base nav, horizontal alignment, vertical, tabs, pills, underline, fill and justify, with dropdowns, tab panes (JS).
- NAVX-01..63 are inline in navigation.html, wrapper without card-footer and without the "Usar no site" button, because they are not header/footer slot candidates.
- [ ] Dropdowns (Docs): single, split, sizing, directions (centered, dropup, dropend, dropstart), active/disabled items, alignment, responsive alignment, headers/dividers/text/forms, offset, auto close. Exclude "dark dropdowns".
- [ ] Offcanvas (Docs): placements, body scrolling, backdrop options, responsive.
- [ ] Breadcrumbs (Docs dividers + Example `breadcrumbs`).
- [ ] Pagination (Docs): working with icons, disabled/active, sizing, alignment.
- UX: NN/g (navigation, tabs, breadcrumbs, pagination, mega/drop-down menus).

### index.html — Início
- [ ] Page index block (`HOME-00`): list group linking to all pages.
- [ ] Heroes: every variant from Example `heroes`.
- [ ] Features: every variant from Example `features`.
- [ ] Jumbotrons: every variant from Example `jumbotrons`.
- UX: NN/g (hero images, F/Z scanning patterns).

### article.html — Artigo
- [ ] Article layout based on Example `blog` (header, featured post, main + sidebar).
- [ ] Scrollspy table of contents in the sidebar (Docs: list group variant).
- [ ] Typography (Docs): headings, display, lead, inline text elements, abbreviations, blockquotes (source, alignment), lists (unstyled, inline, description list).
- [ ] Images and figures (Docs): responsive, thumbnail, alignment, figure with caption.
- [ ] Tables (Docs): striped rows/columns, hover, active, bordered, borderless, small, group dividers, vertical alignment, caption, responsive.
- [ ] Breadcrumb at top, pagination at bottom.
- UX: Bringhurst (measure 45–75 characters), NN/g (scanning, legibility).

### layouts.html — Layouts
- [ ] Gallery of full-page templates. Each template is a standalone file in `layouts/` (no slots), copied from its example: `album`, `pricing`, `product`, `cover`, `blog`, `dashboard`, `sign-in`, `checkout`, `sticky-footer`, `sticky-footer-navbar`, `carousel`, `navbar-static`, `navbar-fixed`, `navbar-bottom`.
- [ ] `layouts/sidebars.html`: sidebars example as a full page, `sidebars.css` byte-for-byte. The `[data-bs-theme="dark"]` selector goes to Known issues.
- [ ] Grid compositions from Example `grid`: single column, sidebar, 2/3 + 1/3, three columns, magazine grid, nesting.
- UX: Müller-Brockmann (grid systems), NN/g (layout, visual hierarchy).

### cards.html — Cards
- [ ] Anatomy (Docs): body; titles, text, links; images; list groups; kitchen sink; header and footer; sizing; text alignment; navigation in header; image caps; image overlay; horizontal; background and color; border.
- [ ] Composed patterns (each needs a source and a UX ref):
  - Article/news card (Example `blog`)
  - Product card (Examples `product`, `album`)
  - Pricing card (Example `pricing`)
  - Feature card (Example `features`, custom cards variant)
  - Profile/team card (Example `album` + `rounded-circle` image)
  - Testimonial card (Docs: card with blockquote)
  - Event card with highlighted date (Docs + NN/g)
  - CTA card (Docs)
  - Fully clickable card (`stretched-link`, Docs helpers) — show the conflict with inner links
  - Card with footer actions (button group)
  - Skeleton card (Docs: placeholders)
- [ ] Grid compositions: equal height (`h-100`), responsive `row-cols`, `card-group`, featured + secondary cards (grid only), horizontal scroll (`flex-nowrap` + `overflow-auto`).
- UX: NN/g (cards), Material Design 3 (card anatomy), Refactoring UI (hierarchy).

### carousel.html — Carrossel
- [ ] Every Docs variant, stacked: slides only, with controls, with indicators, with captions, crossfade, autoplaying, autoplay after interaction, individual interval, autoplay without controls, disable touch swiping, dark variant.
- [ ] Known issue on every autoplay block: no pause control (WCAG 2.2.2), not fixable without custom JS.
- UX: W3C WAI carousel tutorial, NN/g (carousels).

### media.html — Mídia
- [ ] Matrix: containers × media type. Media: local video (`assets/video/`), YouTube embed, local audio (`assets/audio/`), Spotify or SoundCloud embed (`assets/EMBEDS.md`).
- [ ] Containers: ratio 16x9, 4x3, 1x1, 21x9; figure with caption; card (image cap, overlay, horizontal); modal; offcanvas; accordion; tabs; carousel slide; list group playlist; hero with background video (`object-fit-cover` + position utilities); mini player (`fixed-bottom` + card).
- [ ] Known issue on hidden containers: media keeps playing.
- UX: WCAG 2.2 (1.4.2 Audio Control, captions), NN/g (video and audio UX).

### maps.html — Mapas
- [ ] Providers: Google Maps simple embed and OpenStreetMap embed, single location (Av. Paulista), URLs from `assets/EMBEDS.md`.
- [ ] Containers: ratio, card with map cap, modal ("Ver no mapa"), offcanvas, tabs, full-bleed section, card overlaid on map (position utilities), accordion.
- [ ] Every iframe has `loading="lazy"` and a `title`.
- [ ] Known issues: mobile scroll trap, third-party cookies (Google).
- UX: NN/g (maps), WCAG 2.2.

### components.html — Componentes
- [ ] Every Docs variant of: Accordion (default, flush, always open), Alerts (all, link color, additional content, icons, dismissing, live), Badges, Buttons (variants, outline, sizes, disabled, block, toggle states), Button group (basic, mixed, outlined, checkbox/radio toggles, toolbar, sizing, nesting, vertical), Close button, Collapse (default, horizontal, multiple targets), List group (all Docs sections), Modal (all Docs sections), Placeholders, Popovers, Progress, Spinners, Toasts (all Docs sections), Tooltips.
- UX: NN/g (feedback, modal dialogs, tooltips), GOV.UK (notification banners).

### contact.html — Contato
- [ ] Form controls (Docs): sizing, disabled, readonly, plaintext, file input (single, multiple, disabled, sizes), color, datalist.
- [ ] Select (Docs): default, sizing, multiple, size attribute, disabled.
- [ ] Checks and radios (Docs): checks, indeterminate, disabled, radios, switches, default stacked, inline, reverse, without labels, toggle buttons (checkbox, radio, outlined).
- [ ] Range (Docs): default, disabled, min/max, steps.
- [ ] Input group (Docs): every section.
- [ ] Floating labels (Docs): every section.
- [ ] Layout (Docs): utilities, form grid, gutters, horizontal form, column sizing, auto-sizing, inline forms.
- [ ] Validation (Docs): custom styles, browser defaults, server-side, supported elements, tooltips.
- [ ] Buttons: submit, reset, disabled, loading with spinner.
- [ ] On valid submit: no request, show a toast "Mensagem enviada (simulação)".
- UX: GOV.UK Design System (forms, question pages, error messages), NN/g (form design).

### theme.html — Tema
- [ ] Specimen of global tokens with HEX values read from the active CSS: theme colors, body colors, emphasis/subtle/border variants, grays.
- [ ] Typography: families, base size, headings scale, display, lead, weights, line height.
- [ ] Borders: widths, radius scale (`sm`, default, `lg`, `xl`, `xxl`, `pill`). Shadows: `sm`, default, `lg`. Spacers 0–5.
- [ ] Global options preview: `$enable-shadows`, `$enable-gradients`, `$enable-rounded` (explained, with the classes that show them).
- [ ] Component impact strip: buttons, alerts, form, card, nav.
- [ ] Default CSS / custom theme toggle (hidden when `theme/bootstrap.min.css` is missing).
- [ ] Short how-to: customize on bootstrap.build, export `_variables.scss` + `bootstrap.min.css` into `theme/`.

## Phase 3 — Catalog review

- [ ] `BLOCKS.md` complete: every ID, source, UX ref, overlay CSS, known issues.
- [ ] Full-site audit (same checklist as per page).

## Assets (Pedro downloads from Pexels and Pixabay)

Images (JPG or WebP, ~1600 px wide, under 400 KB):
- `assets/img/landscape-01..06` (16:9)
- `assets/img/portrait-01..03` (3:4)
- `assets/img/square-01..03` (1:1)
- `assets/img/edge-light-01..02` (very bright: sky, white walls)
- `assets/img/edge-dark-01..02` (very dark)
- `assets/img/edge-busy-01..02` (busy texture: foliage, crowds)

Video (MP4 H.264, 720p or 1080p, 10–20 s, under 10 MB):
- `assets/video/clip-01.mp4` (general)
- `assets/video/hero-loop.mp4` (calm, loopable, for background)

Audio (MP3, 30–90 s):
- `assets/audio/track-01.mp3`, `assets/audio/track-02.mp3`

`assets/EMBEDS.md` (Pedro fills in):
- YouTube video URL
- Spotify or SoundCloud embed code
- Google Maps embed code (Share → Embed a map, Av. Paulista)
- OpenStreetMap embed code (Share → HTML, Av. Paulista)

`assets/CREDITS.md`: one line per file — file, author, source URL, license.
