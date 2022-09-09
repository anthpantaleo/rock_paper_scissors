// All played through the alert option for now?

// A paragraph tells the player that it will be a best of 5 game.
// The play will select a start button / or not.
// The game function will start.
// They will have to select either rock, paper, or scissors.
// When they select an option, a function is called to randomly generate a computers selection of rock, paper or scissors
// A function is called to compare the two
// A winner is determined
// A score is updated where it is kept track of
// Best of 5
// There is a reset bututon which starts the whole thing again
// They want the information to be determined within the console so we'll start there.

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const gameinfo = document.querySelector(".gameinfo");
const playerScore = document.querySelector(".player1-score");
const computerDisplayScore = document.querySelector(".computer-score");

// Scores

let computerScore = 0;
let userScore = 0;
let roundNUmber = 0;
let userChoice = "";

playerScore.innerText = userScore;
computerDisplayScore.innerText = computerScore;
//Clickies

rock.addEventListener("click", round("rock"));
paper.addEventListener("click", round("paper"));
scissors.addEventListener("click", round("scissors"));

// Randomly chooses between "Rock",  "Paper", and "Scissors"
function getComputerChoice() {
  const random = Math.random();
  if (random <= 0.33) {
    return "rock";
  } else if (random >= 0.336 && random <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function game(playerSelection, computerSelection){
//   for(let i =1 ; i < 6; i++ ){
//     gameinfo.innerText =
//   }
// }

// round

function round(playerSelection) {
  // for (let i = 1; i < 6; i++) {
  //   console.log(`${playerSelection}`);
  // }
  console.log(`${playerSelection}`);
}

// function round(playerSelection, computerSelection) {
//   for (let i = 1; i < 6; i++) {
//     if (playerSelection.toLowerCase() === computerSelection) {
//       console.log(
//         `You both chose ${playerSelection}. That's a tie! The score is: Humanity:${userScore} - Computer:${computerScore}`
//       );
//     } else if (playerSelection === "rock" && computerSelection === "paper") {
//       computerScore++;
//       console.log(
//         `You chose Rock, and the Computer chose Paper. You lose. The score is: Humanity:${userScore} - Computer:${computerScore}`
//       );
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//       userScore++;
//       console.log(
//         `You chose Rock, and the Computer chose Scissors. You win! The score is: Humanity:${userScore} - Computer:${computerScore}`
//       );
//     } else if (
//       playerSelection === "paper" &&
//       computerSelection === "scissors"
//     ) {
//       computerScore++;
//       console.log(
//         `You chose Paper, and the Computer chose Scissors. You lose. The score is: Humanity:${userScore} - Computer:${computerScore}`
//       );
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//       userScore++;
//       console.log(
//         `You chose Paper, and the Computer chose Rock. You win! The score is: Humanity:${userScore} - Computer:${computerScore}`
//       );
//     } else if (
//       playerSelection === "scissors" &&
//       computerSelection === "paper"
//     ) {
//       userScore++;
//       console.log(
//         `You chose Scissors, and the Computer chose Paper. You win! The score is: Humanity:${userScore} - Computer:${computerScore}`
//       );
//     } else {
//       computerScore++;
//       console.log(
//         `You chose Scissors, and the Computer chose Rock. You lose. The score is: Humanity:${userScore} - Computer Aliens:${computerScore}`
//       );
//     }
//   }
// }

//Game

// function game() {
//   for (let i = 1; i < 6; i++) {
//     gameinfo.innerText = `You selected ${playerSelection}...`;
//   }
// }

// function game() {
//   for (let i = 1; i < 6; i++) {
//     const playerGameInput = prompt(
//       `Humanity has been attacked by Computer Aliens. You have been chosen to play against them in a Rock Paper Scissors match. First to 5. Choose one. The score is: Humanity: ${userScore} - Computer :${computerScore}. This is round ${i}.`
//     );
//     const computerGameChoice = getComputerChoice();
//     round(playerGameInput, computerGameChoice);
//   }
//   if (userScore === computerScore) {
//     console.log(
//       `Refresh, let's play again. The score was ${userScore} - ${computerScore}`
//     );
//   } else if (userScore > computerScore) {
//     console.log(
//       `Humanity is saved thanks to you. The score was: ${userScore} - ${computerScore}`
//     );
//   } else {
//     console.log(
//       `Humanity is dead. You've lost to the Computer Aliens ${computerScore} - ${userScore}`
//     );
//   }
// }

// game();
