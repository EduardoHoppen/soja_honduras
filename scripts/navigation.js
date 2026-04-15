export function initNavigation() {
  const sections = Array.from(document.querySelectorAll('.slide'));
  const dotsWrap = document.getElementById('navDots');
  const progressBar = document.getElementById('progressBar');

  if (dotsWrap) {
    sections.forEach((section, index) => {
      const anchor = document.createElement('a');
      anchor.href = `#${section.id}`;
      anchor.className = 'dot';
      anchor.setAttribute('aria-label', section.dataset.title || `Slide ${index + 1}`);
      dotsWrap.appendChild(anchor);
    });
  }

  const dots = Array.from(document.querySelectorAll('.dot'));

  if (sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = sections.indexOf(entry.target);
        dots.forEach((dot) => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
      });
    }, { threshold: 0.55 });

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
}
