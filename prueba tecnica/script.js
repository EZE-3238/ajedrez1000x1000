const tablero = document.getElementById('tablero');

// Función para colorear el tablero de ajedrez
function colorearTablero() {
  let esRojo = true;

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      const casilla = document.createElement('div');
      casilla.classList.add('casilla');

      if (esRojo) {
        casilla.classList.add('rojo');
      } else {
        casilla.classList.add('azul');
      }

      tablero.appendChild(casilla);
      esRojo = !esRojo; // Alternamos los colores en cada columna
    }
    // Alternamos los colores en cada fila
    esRojo = !esRojo;
  }
}

colorearTablero();


