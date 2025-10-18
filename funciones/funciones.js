
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



// ===PROGRAMA (programa.html) ===
// Muestra un aviso al hacer clic sobre una fila del programa
if (document.title.includes("Programa")) {
  const filas = document.querySelectorAll(".tabla_programa tbody tr");
  filas.forEach(fila => {
    fila.addEventListener("click", () => {
      const datos = Array.from(fila.children)
        .map(td => td.textContent)
        .join(" - ");
      alert("Has seleccionado: " + datos);
    });
  });
}



// ===EXPOSITORES (expositores.html) ===
// Cambia el color del fondo al pasar el ratón sobre un expositor
if (document.title.includes("Expositores")) {
  const expositores = document.querySelectorAll(".grid-expositores li");

  expositores.forEach(expositor => {
    expositor.addEventListener("mouseenter", () => {
      expositor.style.backgroundColor = "#e6f3ff";
      expositor.style.transition = "background-color 0.3s";
    });

    expositor.addEventListener("mouseleave", () => {
      expositor.style.backgroundColor = "white";
    });
  });
}



// ===REGISTRO (registro.html) ===
// Muestra un mensaje al pasar el raton sobre el enlace a BIRT

const enlace = document.getElementById("enlace-birtlh");
const mensaje = document.getElementById("mensaje-hover");

enlace.addEventListener("mouseover", () => {
  mensaje.textContent = "🌍 ¡Visita la web oficial de BirtLH!";
});

enlace.addEventListener("mouseout", () => {
  mensaje.textContent = ""; // borra el mensaje al salir del enlace
});

// ===CONTACTO (contacto.html) ===
// Al clickar en el mapa nos lleva a Google maps
document.addEventListener("DOMContentLoaded", () => {
  const mapa = document.getElementById("mapa-feria");

  if (mapa) {
    mapa.addEventListener("click", () => {
      // Redirige a la URL deseada
      window.location.href = "https://www.google.com/maps/place/Bilbao+Exhibition+Centre+(BEC)/@43.290582,-2.9921134,17z/data=!3m2!4b1!5s0xd4e506b82c39e51:0x25bc9552401ed833!4m6!3m5!1s0xd4e5a77d9b1bbf7:0x1aeb68f4b3df2298!8m2!3d43.2905781!4d-2.9895385!16s%2Fm%2F0cnzycx?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D";
    });
  }
});