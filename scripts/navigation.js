import { getSlideTitle } from './i18n.js';

function buildDots(sections, dotsWrap) {
  if (!dotsWrap) return [];

  dotsWrap.innerHTML = '';

  sections.forEach((section, index) => {
    const anchor = document.createElement('a');
    anchor.href = `#${section.id}`;
    anchor.className = 'dot';
    anchor.setAttribute('aria-label', getSlideTitle(index, section.id));
    dotsWrap.appendChild(anchor);
  });

  return Array.from(dotsWrap.querySelectorAll('.dot'));
}

export function initNavigation() {
  const sections = Array.from(document.querySelectorAll('.slide'));
  const dotsWrap = document.getElementById('navDots');
  const progressBar = document.getElementById('progressBar');

  let dots = buildDots(sections, dotsWrap);

  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = sections.indexOf(entry.target);
          dots.forEach((dot) => dot.classList.remove('active'));
          if (dots[index]) dots[index].classList.add('active');
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  const updateProgressBar = () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();

  window.addEventListener('languagechange', () => {
    dots = buildDots(sections, dotsWrap);
  });
}