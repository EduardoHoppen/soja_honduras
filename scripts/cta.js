import { t } from './i18n.js';

function syncCtaLabel(ctaBtn, ctaAnswer) {
  const isOpen = ctaAnswer.style.display === 'block';
  ctaBtn.textContent = isOpen ? t('ui.hideRecommendation') : t('ui.showRecommendation');
}

export function initCta() {
  const ctaBtn = document.getElementById('ctaBtn');
  const ctaAnswer = document.getElementById('ctaAnswer');

  if (!ctaBtn || !ctaAnswer) return;

  syncCtaLabel(ctaBtn, ctaAnswer);

  ctaBtn.addEventListener('click', () => {
    const isOpen = ctaAnswer.style.display === 'block';
    ctaAnswer.style.display = isOpen ? 'none' : 'block';
    syncCtaLabel(ctaBtn, ctaAnswer);
  });

  window.addEventListener('languagechange', () => {
    syncCtaLabel(ctaBtn, ctaAnswer);
  });
}