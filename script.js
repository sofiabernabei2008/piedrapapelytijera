const opciones = ["Piedra", "Papel", "Tijera"];

function jugar(eleccionUsuario) {
  // 1. El usuario ya ingresó su valor al hacer clic en el botón
 
  // 2. Elegir un valor al azar usando Math.random()
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  const eleccionComputadora = opciones[indiceAleatorio];

  // 3. Determinar quién ganó
  let mensaje = "";
  if (eleccionUsuario === eleccionComputadora) {
    mensaje = "¡Es un empate! 🤝";
  } else if (
    (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijera") ||
    (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
    (eleccionUsuario === "Tijera" && eleccionComputadora === "Papel")
  ) {
    mensaje = "¡Ganaste! 🎉";
  } else {
    mensaje = "Perdiste. Ganó la computadora 🤖";
  }

  // Mostrar resultados en pantalla
  document.getElementById("elecciones").textContent =
    `Elegiste ${eleccionUsuario} | La computadora eligió ${eleccionComputadora}`;
  document.getElementById("mensaje-ganador").textContent = mensaje;
  document.getElementById("resultado").classList.remove("oculto");

  // Desactivar botones principales hasta que decida volver a jugar
  alternarBotones(true);
}

// 4. Función para volver a jugar
function reiniciarJuego() {
  document.getElementById("resultado").classList.add("oculto");
  alternarBotones(false);
}

function alternarBotones(estado) {
  const botones = document.querySelectorAll(".botones button");
  botones.forEach(boton => boton.disabled = estado);
}
