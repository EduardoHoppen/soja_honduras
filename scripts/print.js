import { forceRevealAllVisuals } from './reveal.js';

function waitForImages() {
  const images = Array.from(document.images || []);

  return Promise.all(images.map((image) => {
    if (image.complete) return Promise.resolve();

    return new Promise((resolve) => {
      const done = () => resolve();
      image.addEventListener('load', done, { once: true });
      image.addEventListener('error', done, { once: true });
    });
  }));
}

function showAllForPrint() {
  document.body.classList.add('exporting-pdf');
  forceRevealAllVisuals();

  const ctaAnswer = document.getElementById('ctaAnswer');
  if (ctaAnswer) ctaAnswer.style.display = 'block';
}

export function initPrint() {
  const printBtn = document.getElementById('printPdfBtn');
  if (!printBtn) return;

  const restoreAfterPrint = () => {
    document.body.classList.remove('exporting-pdf');
    printBtn.disabled = false;
    printBtn.textContent = 'Baixar PDF';
    printBtn.style.visibility = 'visible';
  };

  window.addEventListener('afterprint', restoreAfterPrint);

  printBtn.addEventListener('click', async () => {
    printBtn.disabled = true;
    printBtn.style.visibility = 'hidden';

    showAllForPrint();
    await waitForImages();
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    window.print();

    window.setTimeout(() => {
      if (!document.hidden) restoreAfterPrint();
    }, 800);
  });
}
