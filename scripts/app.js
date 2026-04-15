import { initNavigation } from './navigation.js';
import { initReveal } from './reveal.js';
import { initPrint } from './print.js';
import { initCta } from './cta.js';
import { initI18n } from './i18n.js';

function initIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initIcons();
  initNavigation();
  initReveal();
  initCta();
  initPrint();
});