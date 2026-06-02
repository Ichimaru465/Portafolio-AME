document.addEventListener("DOMContentLoaded", () => {
  // Cambiamos el texto para que coincida con el primer comando de tu terminal
  const text = "whoami"; 
  const typewriter = document.getElementById("typewriter");
  const output = document.getElementById("output-content");

  if (typewriter && output) {
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        index++;
        // Velocidad de escritura
        setTimeout(typeEffect, 100); 
      } else {
        // Pausa antes de mostrar el resultado
        setTimeout(mostrarOutput, 500);
      }
    }

    function mostrarOutput() {
      output.style.display = "block";
      output.style.opacity = 0;

      let opacity = 0;
      const fade = setInterval(() => {
        opacity += 0.05;
        output.style.opacity = opacity;

        if (opacity >= 1) clearInterval(fade);
      }, 30);
    }

    // Iniciar animación con un ligero retraso al cargar la página
    setTimeout(typeEffect, 600);
  }

  // Setup reveal-on-scroll: add .reveal to elements and observe them
  const revealSelectors = [
    '.hero-title',
    '.hero-subtitle',
    '.badge-status',
    '.hero-actions a',
    '.terminal-box',
    '.action-card',
    '.project-card',
    '.skill-card',
    '.timeline-item',
    '.hero-photo img'
  ];

  const elements = [];
  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('reveal');
      elements.push(el);
    });
  });

  // Stagger delays by index
  elements.forEach((el, i) => {
    const delay = Math.min(5, Math.floor(i / 2));
    el.classList.add(`reveal-delay-${delay}`);
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Slightly delay unobserving for smoothness
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));

  // Add float animation to hero images/icons
  document.querySelectorAll('.hero-photo img, .logo span, .title-icon').forEach(el => {
    el.classList.add('float');
  });
  // Add pulse to status dot
  document.querySelectorAll('.dot-pulse').forEach(el => el.classList.add('pulse'));
});