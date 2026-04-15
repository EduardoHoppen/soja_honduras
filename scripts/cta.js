export function initCta() {
  const ctaBtn = document.getElementById('ctaBtn');
  const ctaAnswer = document.getElementById('ctaAnswer');

  if (!ctaBtn || !ctaAnswer) return;

  ctaBtn.addEventListener('click', () => {
    const isOpen = ctaAnswer.style.display === 'block';
    ctaAnswer.style.display = isOpen ? 'none' : 'block';
    ctaBtn.textContent = isOpen
      ? 'Ver enfoque recomendado'
      : 'Ocultar enfoque recomendado';
  });
}
