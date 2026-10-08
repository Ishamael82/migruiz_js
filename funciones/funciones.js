
// === INICIO (index.html) ===
// Muestra un saludo dinámico según la hora del día
if (document.title.includes("Inicio")) {
  const hora = new Date().getHours();
  let saludo;

  if (hora < 12) {
    saludo = "¡Buenos días! 🌞";
  } else if (hora < 20) {
    saludo = "¡Buenas tardes! 🌇";
  } else {
    saludo = "¡Buenas noches! 🌙";
  }

  const mensaje = document.createElement("p");
  mensaje.textContent = saludo;
  mensaje.style.fontWeight = "bold";
  mensaje.style.textAlign = "center";
  mensaje.style.fontSize = "1.2rem";
  document.querySelector(".contenido")?.appendChild(mensaje);
}


// Muestra el numero de caracteres restantes al escribir en el campo de comentarios.
document.addEventListener("DOMContentLoaded", () => {
  const comentarios = document.getElementById("comentarios");
  const contador = document.getElementById("contador");
  const maxCaracteres = 500;

  if (comentarios && contador) {
    comentarios.addEventListener("input", () => {
      const usados = comentarios.value.length;
      contador.textContent = `${usados} / ${maxCaracteres} caracteres`;

      // Cambia el color del texto si se acerca al límite
      if (usados > maxCaracteres * 0.9) {
        contador.style.color = "red";
      } else {
        contador.style.color = "#333";
      }
    });
  }
});


// ===GENERAL (registro.html) ===
// Muestra un mensaje al pasar el raton sobre el enlace a BIRT

const enlace = document.getElementById("enlace-birtlh");
const mensaje = document.getElementById("mensaje-hover");

enlace.addEventListener("mouseover", () => {
  mensaje.textContent = "🌍 ¡Visita la web oficial de BirtLH!";
});

enlace.addEventListener("mouseout", () => {
  mensaje.textContent = ""; // borra el mensaje al salir del enlace
});