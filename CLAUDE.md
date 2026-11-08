# Bootstrap Showcase — Rules for Claude Code

## Purpose

A personal library of Bootstrap 5.3.8 blocks. Every block is copied from an official Bootstrap source, labeled with a stable ID, and cataloged in `BLOCKS.md` so it can be reused in other sites by ID.

You are an assembler, not an author. Your job is to locate official markup, copy it, replace content with lorem ipsum and local assets, label it, and catalog it.

## Source of truth (read-only)

- `ref/examples/` — official examples (`bootstrap-5.3.8-examples.zip`).
- `ref/src/` — official 5.3.8 source code. The documentation pages (with every component snippet) live inside it; search for the page file by name (for example `card.mdx`, `carousel.mdx`).
- Never edit anything in `ref/`.
- Never write Bootstrap markup from memory. Find it in `ref/` first.
- If no official source exists for a block, stop and ask. Do not improvise.
- Do not use web search. Do not copy markup from third-party sites.

## Stack

- Bootstrap 5.3.8 from jsDelivr, exactly these tags:

```html
<link id="css-default" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
```

- Plain HTML, one file per page. No npm, no build step, no frameworks, no jQuery, no extra libraries, no icon fonts. SVG icons only when they are part of the copied official markup.
- Local server: `python -m http.server 8000` (run by Pedro in a separate terminal).
- `<html lang="pt-BR">`. UI labels in Portuguese (pt-BR). Body copy in lorem ipsum. Code, comments and docs in English.

## Hard limits

1. **No custom CSS.** No `<style>` blocks in any HTML file, no `custom.css`. Only two exceptions. Both live in `css/examples/`, are linked only from the partials or pages that need them, and are listed by file name in the "Overlay CSS" column of `BLOCKS.md` for every block that depends on them:
   - **(a) Shipped CSS files.** CSS files that an official example ships (for example `headers.css`), copied byte-for-byte.
   - **(b) Inline example rules.** Rules from the inline `<style>` block of an official example, only when a rule applies to markup you copy into a block. Before writing any file for a block, inspect the example's `<style>` block and list the rules that apply and the ones that do not. Copy the applicable rules verbatim (no edits, no additions) into `css/examples/<example>-inline.css`, one file per example (for example `headers-inline.css`). If it is unclear whether a rule applies, stop and ask.
2. **Inline `style=""`** only when the source snippet has the identical attribute.
3. **External fonts:** if an example loads a web font (Google Fonts or similar), omit the font link and note it in `BLOCKS.md`.
4. **Custom JS:** only `js/site.js`, max 70 lines. Allowed scope, nothing else:
   - Partial loader (site slots and gallery previews).
   - Site switcher (top slot and footer slot, persisted in `localStorage`, wrapped in `try/catch`).
   - Contact form: prevent real submit; show the toast when the form is valid.
   - Checkbox `indeterminate` state for the demo checkbox.
   - Theme page: HEX readout of CSS variables and default/custom CSS toggle.
5. **Official doc snippets** (tooltip and popover init, form validation, live toast and alert triggers) go verbatim into `js/docs-snippets.js`, each with a `// source:` comment. They do not count toward the 70 lines.
6. **No color modes.** No `data-bs-theme` anywhere. Only exception: the carousel dark variant block, exactly as in the docs.
7. **Allowed changes to official markup:** text to lorem ipsum, image and media `src` to files in `assets/`, IDs made unique, nav links remapped to showcase pages. Nothing else. No "improvements". Shortening or deleting source text is not allowed: replace it with lorem ipsum of similar length.
8. **Scope:** anything not listed in `PLAN.md` is out of scope. Ask before adding.
9. **Media in hidden containers does not pause.** Do not add code for it. Document it in `BLOCKS.md` under "Known issues".
10. **Forbidden skills in this repo:** `theme-factory`, `brand-guidelines`, `canvas-design`, `frontend-design`.
11. **Never edit** `theme/` (Pedro exports it from bootstrap.build) or `assets/` media files.

## Block format

Every block uses this exact structure. The label sits outside the markers so the block can be copied cleanly.

```html
<div class="d-flex align-items-center gap-2 mb-2">
  <span class="badge text-bg-secondary">CARD-07</span>
  <small class="text-body-secondary">Pricing card</small>
</div>
<!-- block:start CARD-07 | name: Pricing card | src: ref/examples/pricing/index.html | ux: NN/g Cards -->
...official markup...
<!-- block:end CARD-07 -->
```

ID prefixes: `HOME`, `ART`, `LAYOUT`, `HDR`, `NAV`, `NAVX` (navs, dropdowns, sidebars, breadcrumbs, pagination), `FTR`, `CARD`, `CAR`, `MEDIA`, `MAP`, `COMP`, `FORM`, `THEME`. Number with two digits, in page order. IDs never change once published.

Allowed UX references: the Bootstrap example itself, Nielsen Norman Group, GOV.UK Design System, Material Design 3, W3C WAI tutorials, WCAG 2.2.

## Layout rules

- Align every element to the grid. No manual positioning, no negative margins.
- Running text never spans the full container: use `col-lg-8` (or `col-md-10 mx-auto` when centered).
- Typographic hierarchy only with native classes: `display-*`, `h1`–`h6`, `.lead`, `fw-*`, `.small`, `text-body-secondary`. No custom font sizes.
- Spacing only from the spacer scale (0–5). Sections use `py-5`; elements inside sections use `mb-3` / `mb-4`.
- Left-aligned text, except heroes and short CTAs.
- One `h1` per page. Heading levels never skip. Use `header`, `nav`, `main`, `footer` landmarks.
- Each page starts with a short intro: `h1`, one `.lead` sentence, and an in-page index (list of block IDs as anchor links).

## Site switcher

- Every showcase page has `<div id="slot-top"></div>` before `<main>` and `<div id="slot-footer"></div>` after it.
- Top variants live in `partials/top/` (`hdr-XX.html` for headers, `nav-XX.html` for navbars). Footer variants live in `partials/footer/` (`ftr-XX.html`).
- A partial is self-contained: it includes any SVG symbols it references and, if needed, its own `<link rel="stylesheet" href="css/examples/....css">`.
- `localStorage` keys: `showcase.top` (default `hdr-01`), `showcase.footer` (default `ftr-01`).
- Gallery pages show variants with `<div data-partial="top/hdr-03"></div>` plus a button `data-use-top="hdr-03"` or `data-use-footer="ftr-02"` labeled "Usar no site". One source of truth: the partial file.
- Every gallery preview is a card: section.card.mb-5 > .card-header (badge row) + .card-body (partial) + .card-footer.bg-body ('Usar no site' button).
- Navbars with `fixed-top` or `fixed-bottom` are never partials. They appear only as full-page layouts in `layouts/`.
- Header and navbar partials keep the example's link count. Map links to: Início, Layouts, Cards, Componentes, Contato. Footer partials with link columns list all pages, grouped.

## Theme files

- `theme/_variables.scss` and `theme/bootstrap.min.css` are exported by Pedro from bootstrap.build.
- Pages also include `<link id="css-custom" href="theme/bootstrap.min.css" rel="stylesheet" disabled>`. The toggle flips the `disabled` property of both links and persists in `showcase.css`. Hide the toggle when `theme/bootstrap.min.css` does not exist.

## Workflow per page

1. Work in plan mode first. Read the page section in `PLAN.md` and present a block plan: ID, name, source file in `ref/`, UX reference. Wait for approval.
2. Build the page.
3. Audit and report as a checklist:
   - Every block has `block:start` / `block:end`, `src` and `ux`.
   - No `<style>` in any HTML file, no CSS outside `css/examples/`, and every file in `css/examples/` is listed in the "Overlay CSS" column of `BLOCKS.md`.
   - No `data-bs-theme` (except the carousel dark block), no inline `style` that differs from the source.
   - One `h1`; heading levels never skip.
   - `js/site.js` is 70 lines or fewer.
   - Every asset and partial loads (no 404 in the server log).
   - Accessibility, static review: report the findings of a manual WCAG 2.2 AA check of the page markup (landmarks, heading order, link and button names, form labels, image alt text, duplicate IDs across the page and its loaded partials, focus order). Do not claim a contrast or screen-reader result you cannot measure.
   - Accessibility, automated: Pedro runs Lighthouse (Accessibility category) in Chrome DevTools on the served page and pastes the failures. Do not try to run it yourself.
4. Add the page's rows to `BLOCKS.md` and tick the page in `PLAN.md`.
5. Commit with message `page: <filename>`.
6. Stop. One page per session.
