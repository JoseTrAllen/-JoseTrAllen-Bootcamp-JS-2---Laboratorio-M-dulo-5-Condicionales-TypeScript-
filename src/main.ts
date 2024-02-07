
let puntos: number = 0;
const mostrarFotoCarta = document.getElementById("imagen-carta");
const mensajeAlJugador = document.getElementById("mensaje-al-jugador");
const idPuntuacion = document.getElementById("puntuacion");

const cartaTrasera: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
const asDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
const dosDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
const tresDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
const cuatroDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
const cincoDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
const seisDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
const sieteDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
const sotaDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
const caballoDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
const reyDeCopas: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

function generarNumero () {
  return Math.floor(Math.random() * 11);
}

function obtenerNumero (numeroAleatorio: number) {
  if (numeroAleatorio === 0) {
    return 1;
  }
  return numeroAleatorio > 7 ? numeroAleatorio += 2 : numeroAleatorio;
}

function pintaCarta (numeroCarta: number) {
  switch (numeroCarta) {
    case 1:
      return asDeCopas;
    case 2:
      return dosDeCopas;
    case 3:
      return tresDeCopas;
    case 4:
      return cuatroDeCopas;
    case 5:
      return cincoDeCopas;
    case 6:
      return seisDeCopas;
    case 7:
      return sieteDeCopas;
    case 10:
      return sotaDeCopas;
    case 11:
      return caballoDeCopas;
    case 12:
      return reyDeCopas;
    default:
      return cartaTrasera;    
  }
}

function muestraCarta (urlCarta: string) {
  if (mostrarFotoCarta !== undefined && 
    mostrarFotoCarta !== null &&
    mostrarFotoCarta instanceof HTMLImageElement) {
      mostrarFotoCarta.src = urlCarta;
    }
}

function obtenerPuntosCarta (puntosCarta: number) {
  if (puntosCarta > 7) {
    return puntosCarta = 0.5;
  } else {
    return puntosCarta;
  }
}

function sumarPuntuacion (suma: number) {
  return puntos + suma;
}

function setPuntos (nuevosPuntos: number) {
  return puntos = nuevosPuntos;
}

function mostrarPuntuacion () {
  if (idPuntuacion !== undefined && 
    idPuntuacion !== null &&
    idPuntuacion instanceof HTMLHeadingElement) {
      idPuntuacion.innerHTML = puntos.toString();
    }
}

function gestionarFinalPartida () {
  if (puntos === 7.5) {
    ganarPartida();
  }

  if (puntos > 7.5) {
    perderPartida();
  }
}

function ganarPartida () {
  if (mensajeAlJugador !== undefined && 
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement) {
      mensajeAlJugador.innerHTML = "¡Lo has clavado! ¡Enhorabuena!"
    }
  deshabilitarBotonesAlGanarPartida ();
}

function deshabilitarBotonesAlGanarPartida () {
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && 
    elementoBotonPedirCarta !== undefined && 
    elementoBotonPedirCarta instanceof HTMLButtonElement) {
      elementoBotonPedirCarta.disabled = true;
    }
  const elementoBotonPlantarse = document.getElementById("boton-plantarse");
  if (elementoBotonPlantarse !== null && elementoBotonPlantarse !== undefined && elementoBotonPlantarse instanceof HTMLButtonElement) {
    elementoBotonPlantarse.disabled = true;
  }
}

function perderPartida () {
  if (mensajeAlJugador !== undefined && 
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement) {
      mensajeAlJugador.innerHTML = "GameOver";
    }
  deshabilitarBotonesAlPerderPartida ();
}

function deshabilitarBotonesAlPerderPartida () {
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && 
    elementoBotonPedirCarta !== undefined && elementoBotonPedirCarta instanceof HTMLButtonElement) {
      elementoBotonPedirCarta.disabled = true;
    }
  const elementoBotonPlantarse = document.getElementById("boton-plantarse");
  if (elementoBotonPlantarse !== null && 
    elementoBotonPlantarse !== undefined && 
    elementoBotonPlantarse instanceof HTMLButtonElement) {
      elementoBotonPlantarse.disabled = true;
    }
}

function plantarse () {
  if (puntos <= 4.5) {
    mostrarMensajePlantarse("Has sido muy conservador");
  }
  if (puntos === 5 || puntos === 5.5) {
    mostrarMensajePlantarse("Te ha entrado el canguelo ¿eh?");
  }
  if (puntos === 6 || puntos === 6.5 || puntos === 7) {
    mostrarMensajePlantarse("Casi casi...");
  }
  deshabilitarBotonesAlPlantarse ();
}

function mostrarMensajePlantarse (mensaje: string) {
  if(mensajeAlJugador !== undefined &&
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement){
      mensajeAlJugador.innerHTML = mensaje;
    }
}

function deshabilitarBotonesAlPlantarse () {
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && 
    elementoBotonPedirCarta !== undefined && 
    elementoBotonPedirCarta instanceof HTMLButtonElement) {
      elementoBotonPedirCarta.disabled = true;
    }
  const elementoBotonQuePasaria = document.getElementById("boton-que-pasaria");
  if (elementoBotonQuePasaria !== null && 
    elementoBotonQuePasaria !== undefined && 
    elementoBotonQuePasaria instanceof HTMLButtonElement) {
      elementoBotonQuePasaria.style.display = 'block';
    }
  if (botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement) {
      botonPlantarse.disabled = true;
    }
}

const botonPlantarse = document.getElementById("boton-plantarse");
if (botonPlantarse !== null && 
  botonPlantarse !== undefined && 
  botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", plantarse);
  }

function quePasaria () {
  procesoJuego();
  if(mensajeAlJugador !== undefined &&
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement){
      mensajeAlJugador.innerHTML = "Esto habría pasado...";
    }
}

const botonQuePasaria = document.getElementById("boton-que-pasaria");
if (botonQuePasaria !== null && 
  botonQuePasaria !== undefined && 
  botonQuePasaria instanceof HTMLButtonElement) {
    botonQuePasaria.addEventListener("click", quePasaria);
  }

function reinicioPartida () {
  puntos = 0;
  if (idPuntuacion !== undefined && 
    idPuntuacion !== null &&
    idPuntuacion instanceof HTMLHeadingElement) {
    idPuntuacion.innerHTML = puntos.toString();
  }
  if (mostrarFotoCarta !== undefined && 
    mostrarFotoCarta !== null &&
    mostrarFotoCarta instanceof HTMLImageElement) {
    mostrarFotoCarta.src = cartaTrasera;
  }
  if(mensajeAlJugador !== undefined &&
    mensajeAlJugador !== null &&
    mensajeAlJugador instanceof HTMLParagraphElement){
    mensajeAlJugador.innerHTML = "";
  }
  const elementoBotonPedirCarta = document.getElementById("boton-pedir-carta");
  if (elementoBotonPedirCarta !== null && 
    elementoBotonPedirCarta !== undefined && 
    elementoBotonPedirCarta instanceof HTMLButtonElement) {
    elementoBotonPedirCarta.disabled = false;
  }
  
  const elementoBotonPlantarse = document.getElementById("boton-plantarse");
  if (elementoBotonPlantarse !== null && 
    elementoBotonPlantarse !== undefined && 
    elementoBotonPlantarse instanceof HTMLButtonElement) {
    elementoBotonPlantarse.disabled = false;
  }
  
  const elementoBotonQuePasaria = document.getElementById("boton-que-pasaria");
  if (elementoBotonQuePasaria !== null && 
    elementoBotonQuePasaria !== undefined && 
    elementoBotonQuePasaria instanceof HTMLButtonElement) {
    elementoBotonQuePasaria.style.display = "none";
  }
}
const botonReiniciar = document.getElementById("boton-volver-jugar");
if (botonReiniciar !== null && 
  botonReiniciar !== undefined && 
  botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", reinicioPartida);
}

function procesoJuego () {
  let numeroRandom = generarNumero();
  numeroRandom = obtenerNumero(numeroRandom);
  let tipoCarta = pintaCarta(numeroRandom);
  muestraCarta(tipoCarta);
  let puntosCarta = obtenerPuntosCarta(numeroRandom);
  let puntosSumados = sumarPuntuacion(puntosCarta);
  setPuntos(puntosSumados);
  mostrarPuntuacion();
  gestionarFinalPartida ();
}


const botonPedirCarta = document.getElementById("boton-pedir-carta");
if (botonPedirCarta !== null && 
  botonPedirCarta !== undefined && 
  botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.addEventListener("click", procesoJuego);
  }
