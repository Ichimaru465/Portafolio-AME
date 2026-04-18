document.addEventListener("DOMContentLoaded", () => {
  const text = "Sobre Mí";
  const typing = document.getElementById("typing-about");
  const content = document.getElementById("profile-content");

  if (typing && content) {
    let i = 0;
    typing.textContent = ""; // Nos aseguramos de que empiece vacío

    function escribir() {
      if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(escribir, 80);
      } else {
        setTimeout(() => {
          content.style.display = "block";
          content.style.opacity = 0;

          let op = 0;
          const fade = setInterval(() => {
            op += 0.05;
            content.style.opacity = op;
            if (op >= 1) clearInterval(fade);
          }, 40);

        }, 400);
      }
    }

    escribir();
  }
});