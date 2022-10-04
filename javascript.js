let humanScore = 0;
let computerScore = 0;

const btnPiedra = document.querySelector("#piedra");
const btnPapel = document.querySelector("#papel");
const btnTijera = document.querySelector("#tijera");
const resultadosDiv = document.querySelector(".resultadosDiv");
const resultado = document.createElement("div");
const puntuacion = document.createElement("div");
const puntuacionMaquina = document.createElement("div");
const ganador = document.createElement("div");

resultado.classList.add("resultadoJuego");
puntuacion.classList.add("puntuacionHumano");

btnPiedra.addEventListener("click", () => console.log(playRound("Piedra")));
btnPapel.addEventListener("click", () => console.log(playRound("Papel")));
btnTijera.addEventListener("click", () => console.log(playRound("Tijera")));

resultadosDiv.appendChild(resultado);
resultadosDiv.appendChild(puntuacion);
resultadosDiv.appendChild(puntuacionMaquina);
resultadosDiv.appendChild(ganador);

/*
==== FUNCION QUE TOMA LA MANO DE LA COMPUTADORA ====
*/

function getComputerChoice() {
  const opciones = ["Piedra", "Papel", "Tijera"];
  let rand = Math.random();
  let opcion = " ";

  rand *= opciones.length;
  rand = Math.floor(rand);
  opcion = opciones[rand];
  console.log(opcion);
  return opcion;
}

/*
==== FUNCION QUE TOMA LA MANO DEL JUGADOR ====
*/

function playerSelection() {
  let manoJugador = prompt("Elija su mano");
  let primeraLetra;
  let manoContinuacion;
  let manoFinal;

  manoJugador = manoJugador.toLowerCase();
  primeraLetra = manoJugador.charAt();
  manoContinuacion = manoJugador.substring(1, manoJugador.length);
  manoFinal = primeraLetra.toUpperCase() + manoContinuacion.toLowerCase();
  return manoFinal;
}
/*
==== FUNCION QUE JUEGA UNA RONDA ====
*/

function playRound(playerSelect, computerSelect) {
  computerSelect = getComputerChoice();

  if (playerSelect === computerSelect) {
    resultado.textContent = "A tie game";
  }

  if (playerSelect === "Piedra" && computerSelect === "Papel") {
    computerScore++;
    resultado.textContent = "You Lose, Papel beats Rock";
  } else if (playerSelect === "Piedra" && computerSelect === "Tijera") {
    humanScore++;
    resultado.textContent = "You Win, Rocks beats Scisors";
  }

  if (playerSelect === "Papel" && computerSelect === "Tijera") {
    computerScore++;
    resultado.textContent = "You Lose, Scisors beats Papel";
  } else if (playerSelect === "Papel" && computerSelect === "Piedra") {
    humanScore++;
    resultado.textContent = "You Win, Papel beats Rock";
  }

  if (playerSelect === "Tijera" && computerSelect === "Piedra") {
    computerScore++;
    resultado.textContent = "You Lose, Rock beats Scisors";
  } else if (playerSelect === "Tijera" && computerSelect === "Papel") {
    humanScore++;
    resultado.textContent = "You Win, Scisors beats Papel";
  }
  puntuacion.textContent = humanScore;
  puntuacionMaquina.textContent = computerScore;

  if (humanScore === 5) {
    ganador.textContent = "El humano gana";
  }

  if (computerScore === 5) {
    ganador.textContent = "La maquina es la ganadora";
  }
}

/*
==== FUNCION QUE REALIZA EL JUEGO ====
*/

/*
function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (computerScore > humanScore) {
    console.log("You lose the game mate!");
  } else if (computerScore === humanScore) {
    console.log("Tie game");
  } else {
    console.log("You win the game mate!");
  }
}
*/
