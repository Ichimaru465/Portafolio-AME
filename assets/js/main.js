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
});