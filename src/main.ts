
const mostrarFotoCarta = document.getElementById("imagen-carta");

const cartaTrasera = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
const asDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
const dosDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
const tresDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
const cuatroDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
const cincoDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
const seisDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
const sieteDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
const sotaDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
const caballoDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
const reyDeCopas = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

//PEDIR CARTA

function dameCarta () {
  let cartaRandom: number = Math.floor(Math.random() * 10);
  
  if (cartaRandom > 7) {
  cartaRandom += 2;
  } else {
    if (cartaRandom === 0) {
      cartaRandom ++;
    }
  }
  
  switch (cartaRandom) {
    case 1:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = asDeCopas;
      }
      break;
    case 2:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = dosDeCopas;
      }  
      break;
    case 3:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = tresDeCopas;
        }
      break;
    case 4:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = cuatroDeCopas;
        }
      break;
    case 5:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = cincoDeCopas;
        }
      break;
    case 6:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = seisDeCopas;
        }
      break;
    case 7:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !==  undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = sieteDeCopas;
        }
      break;
    case 10:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = sotaDeCopas;
        }
      break;
    case 11:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = caballoDeCopas;
        }
      break;
    case 12:
      if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
        mostrarFotoCarta.src = reyDeCopas;
        }
      break;
  }
}

//PUNTUACION

let puntos: number = 0;
const puntuacion = document.getElementById("puntuacion");

function muestraPuntuacion () {
  if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {

    switch (mostrarFotoCarta.src) {
    
      case asDeCopas:
        puntos++;
        break;
      case dosDeCopas:
        puntos += 2;
        break;
      case tresDeCopas:
          puntos += 3;
          break;
      case cuatroDeCopas:
          puntos +=4;
        break;
      case cincoDeCopas:
        puntos += 5;
        break;
      case seisDeCopas:
        puntos += 6;
        break;
      case sieteDeCopas:
        puntos += 7;
        break;
      case sotaDeCopas:
        puntos += 0.5;
        break;
      case caballoDeCopas:
        puntos += 0.5;
        break; 
      case reyDeCopas:
        puntos += 0.5;
        break;   
    }
  }  

  if (puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLHeadingElement) {
    puntuacion.innerHTML = puntos.toString();
  }
  
}

//PLANTARSE

let mensajeFinalPartida: string = "";
const mensajeAlJugador = document.getElementById("mensaje-al-jugador");

function plantarse () {
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && elementoBotonPedirCarta !== undefined && elementoBotonPedirCarta instanceof HTMLButtonElement) {
    elementoBotonPedirCarta.disabled = true;
  }

  if (puntos <= 4.5) {
    mensajeFinalPartida = "Has sido muy conservador";
  } else {
    if (puntos === 5 || puntos === 5.5) {
      mensajeFinalPartida = "Te ha entrado el canguelo ¿eh?";
    } else {
      if (puntos === 6 || puntos === 6.5 || puntos === 7) {
        mensajeFinalPartida = "Casi casi...";
      } else {
        if (puntos === 7.5) {
          mensajeFinalPartida = "¡Lo has clavado!. ¡Enhorabuena!";
        }
      }
    }
  }

  if (mensajeAlJugador != null && mensajeAlJugador != undefined && mensajeAlJugador instanceof HTMLParagraphElement) {
    mensajeAlJugador.innerHTML = mensajeFinalPartida;
  } 
  
  const elementoBotonPlantarse = document.getElementById("boton-plantarse");
  if (elementoBotonPlantarse !== null && elementoBotonPlantarse !== undefined && elementoBotonPlantarse instanceof HTMLButtonElement) {
    elementoBotonPlantarse.disabled = true;
  }
  
  const elementoBotonQuePasaria = document.getElementById("boton-que-pasaria");
  if (elementoBotonQuePasaria !== null && elementoBotonQuePasaria !== undefined && elementoBotonQuePasaria instanceof HTMLButtonElement) {
    elementoBotonQuePasaria.style.display = 'block';
  }
}

const botonPlantarse = document.getElementById("boton-plantarse");
if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", plantarse);
  }

//  QUE PASARIA SI...

function quePasaria () {
  dameCarta();
  muestraPuntuacion();
}
const botonQuePasaria = document.getElementById("boton-que-pasaria");
if (botonQuePasaria !== null && botonQuePasaria !== undefined && botonQuePasaria instanceof HTMLButtonElement) {
botonQuePasaria.addEventListener("click", quePasaria);
}

//GAME OVER

function gameOver () {
  
  if (puntos > 7.5) {
    if (mensajeAlJugador !== null && mensajeAlJugador !== undefined && mensajeAlJugador instanceof HTMLParagraphElement) {
      mensajeAlJugador.innerHTML = "Game Over";
    } 
    
    const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
    if (elementoBotonPedirCarta !== null && elementoBotonPedirCarta !== undefined && elementoBotonPedirCarta instanceof HTMLButtonElement) {
      elementoBotonPedirCarta.disabled = true
    }
    
    const elementoBotonPlantarse = document.getElementById("boton-plantarse");
    if (elementoBotonPlantarse !== null && elementoBotonPlantarse !== undefined && elementoBotonPlantarse instanceof HTMLButtonElement) {
      elementoBotonPlantarse.disabled = true
    }

  }
}

//REINICIAR PARTIDA

function reinicioPartida () {
  puntos = 0;
  if (puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLHeadingElement) {
    puntuacion.innerHTML = puntos.toString();
  }

  if (mostrarFotoCarta !== null && mostrarFotoCarta !== undefined && mostrarFotoCarta instanceof HTMLImageElement) {
    mostrarFotoCarta.src = cartaTrasera;
    }
  
  if (mensajeAlJugador !== null && mensajeAlJugador !== undefined && mensajeAlJugador instanceof HTMLParagraphElement) {
    mensajeAlJugador.innerHTML = "";
  } 
  
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && elementoBotonPedirCarta !== undefined && elementoBotonPedirCarta instanceof HTMLButtonElement) {
    elementoBotonPedirCarta.disabled = false;
  }
  
  const elementoBotonPlantarse = document.getElementById("boton-plantarse");
  if (elementoBotonPlantarse !== null && elementoBotonPlantarse !== undefined && elementoBotonPlantarse instanceof HTMLButtonElement) {
    elementoBotonPlantarse.disabled = false;
  }
  
  const elementoBotonQuePasaria = document.getElementById("boton-que-pasaria");
  if (elementoBotonQuePasaria !== null && elementoBotonQuePasaria !== undefined && elementoBotonQuePasaria instanceof HTMLButtonElement) {
    elementoBotonQuePasaria.style.display = "none";
  }
  
}

const botonReiniciar = document.getElementById("boton-volver-jugar");
if (botonReiniciar !== null && botonReiniciar !== undefined && botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", reinicioPartida);
}


// PROCESO DEL JUEGO

function procesoJuego () {
  dameCarta();
  muestraPuntuacion();
  gameOver()
}

const botonPedirCarta = document.getElementById("boton-pedir-carta");
if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement) {
botonPedirCarta.addEventListener("click", procesoJuego);
}
