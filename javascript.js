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

function playRound(playerSelect, computerSelect) {
  playerSelect = playerSelection();
  computerSelect = getComputerChoice();

  if (playerSelect === computerSelect) {
    return "A tie game";
  }

  if (playerSelect === "Piedra" && computerSelect === "Papel") {
    computerScore++;
    return "You Lose, Papel beats Rock";
  } else if (playerSelect === "Piedra" && computerSelect === "Tijera") {
    humanScore++;
    return "You Win, Rocks beats Scisors";
  }

  if (playerSelect === "Papel" && computerSelect === "Tijera") {
    computerScore++;
    return "You Lose, Scisors beats Papel";
  } else if (playerSelect === "Papel" && computerSelect === "Piedra") {
    humanScore++;
    return "You Win, Papel beats Rock";
  }

  if (playerSelect === "Tijera" && computerSelect === "Piedra") {
    computerScore++;
    return "You Lose, Rock beats Scisors";
  } else if (playerSelect === "Tijera" && computerSelect === "Papel") {
    humanScore++;
    return "You Win, Scisors beats Papel";
  }
}

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

let humanScore = 0;
let computerScore = 0;

game();
