// Partial loader
async function loadPartial(element) {
  const partial = element.getAttribute('data-partial');
  if (!partial) return;
  try {
    const response = await fetch(`partials/${partial}.html`);
    if (response.ok) element.innerHTML = await response.text();
  } catch (e) {
    console.error(`Failed to load partial: ${partial}`);
  }
}

document.querySelectorAll('[data-partial]').forEach(loadPartial);

// Site switcher
const SHOWCASE_TOP_KEY = 'showcase.top';
const SHOWCASE_FOOTER_KEY = 'showcase.footer';
const DEFAULT_TOP = 'top/hdr-01';
const DEFAULT_FOOTER = 'footer/ftr-01';

async function loadSlot(slotId, key, defaultValue) {
  try {
    const partial = localStorage.getItem(key) || defaultValue;
    const response = await fetch(`partials/${partial}.html`);
    if (response.ok) {
      const slot = document.getElementById(slotId);
      if (slot) slot.innerHTML = await response.text();
    }
  } catch (e) {
    console.error(`Failed to load slot ${slotId}: ${e}`);
  }
}

function setSlot(key, value) {
  try {
    localStorage.setItem(key, value);
    location.reload();
  } catch (e) {
    console.error(`Failed to save preference: ${e}`);
  }
}

window.useTopVariant = (partial) => setSlot(SHOWCASE_TOP_KEY, `top/${partial}`);
window.useFooterVariant = (partial) => setSlot(SHOWCASE_FOOTER_KEY, `footer/${partial}`);

// Data attribute delegates for gallery variant switcher buttons
document.addEventListener('click', (e) => {
  const top = e.target.getAttribute('data-use-top');
  const footer = e.target.getAttribute('data-use-footer');
  if (top) window.useTopVariant(top);
  if (footer) window.useFooterVariant(footer);
});

loadSlot('slot-top', SHOWCASE_TOP_KEY, DEFAULT_TOP);
loadSlot('slot-footer', SHOWCASE_FOOTER_KEY, DEFAULT_FOOTER);
