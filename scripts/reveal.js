function setRainBarHeights() {
  document.querySelectorAll('#slide-6 .month-bar').forEach((bar) => {
    const targetHeight = bar.dataset.height || '0%';
    bar.style.setProperty('--bar-height', targetHeight);
  });
}

function revealPhotoperiodWaves() {
  const waveHN = document.getElementById('waveHN');
  const waveBR = document.getElementById('waveBR');

  if (waveHN) waveHN.style.strokeDashoffset = '0';
  if (waveBR) waveBR.style.strokeDashoffset = '0';
}

function revealRainBars() {
  document.querySelectorAll('#slide-6 .month-bar').forEach((bar) => {
    bar.classList.add('is-visible');
  });
}

export function initReveal() {
  setRainBarHeights();

  const revealTargets = document.querySelectorAll('.fade-up, .hero-fade');
  if (!revealTargets.length) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');

      if (entry.target.closest('#slide-4')) {
        revealPhotoperiodWaves();
      }

      if (entry.target.closest('#slide-6')) {
        revealRainBars();
      }
    });
  }, { threshold: 0.18 });

  revealTargets.forEach((element) => revealObserver.observe(element));
}

export function forceRevealAllVisuals() {
  document.querySelectorAll('.fade-up, .hero-fade').forEach((element) => {
    element.classList.add('visible');
    element.style.opacity = '1';
    element.style.transform = 'none';
  });

  document.querySelectorAll('#slide-6 .month-bar').forEach((bar) => {
    bar.style.setProperty('--bar-height', bar.dataset.height || '0%');
    bar.classList.add('is-visible');
    bar.style.visibility = 'visible';
  });

  document.querySelectorAll('#slide-6 .month-col').forEach((column) => {
    column.style.opacity = '1';
    column.style.visibility = 'visible';
  });

  const waveHN = document.getElementById('waveHN');
  const waveBR = document.getElementById('waveBR');

  if (waveHN) {
    waveHN.style.strokeDashoffset = '0';
    waveHN.style.opacity = '1';
  }

  if (waveBR) {
    waveBR.style.strokeDashoffset = '0';
    waveBR.style.opacity = '1';
  }
}
