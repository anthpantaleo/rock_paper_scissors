// All played through the alert option for now?

// A paragraph tells the player that it will be a best of 5 game.
// The play will select a start button / or not.
// The game function will start.
// They will have to select either rock, paper, or scissors.
// When they select an option, a function is called to randomly generate a computers selection of rock, paper or scissors
// A function is called to compare the two
// A winner is determined
// A score is updated where it is kept track of
// First to 5 wins
// There is a reset bututon which starts the whole thing again
// They want the information to be determined within the console so we'll start there.

// Randomly chooses between "Rock",  "Paper", and "Scissors"

function getComputerChoice() {
  const random = Math.random();
  if (random <= 0.33) {
    return "Rock";
  } else if (random >= 0.336 && random <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// // Players Choice

// function round(playerSelection, computerSelection) {
//   if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
//     return `You both chose ${playerSelection}. That's a tie!`;
//   } else if (
//     playerSelection.toLowerCase() === "rock" &&
//     computerSelection.toLowerCase() === "paper"
//   ) {
//     return `You chose Rock, and the Computer chose Paper. You lose.`;
//     computerScore++;
//   } else if (
//     playerSelection.toLowerCase() === "rock" &&
//     computerSelection.toLowerCase() === "scissors"
//   ) {
//     return `You chose Rock, and the Computer chose Scissors. You win!`;
//     userScore++;
//   } else if (
//     playerSelection.toLowerCase() === "paper" &&
//     computerSelection.toLowerCase() === "scissors"
//   ) {
//     `You chose Paper, and the Computer chose Scissors. You lose.`;
//     computerScore++;
//   } else if (
//     playerSelection.toLowerCase() === "paper" &&
//     computerSelection.toLowerCase() === "rock"
//   ) {
//     return `You chose Paper, and the Computer chose Rock. You win!`;
//     userScore++;
//   } else if (
//     playerSelection.toLowerCase() === "scissors" &&
//     computerSelection.toLowerCase() === "paper"
//   ) {
//     return `You chose Scissors, and the Computer chose Paper. You win!`;
//     userScore++;
//   } else {
//     return `You chose Scissors, and the Computer chose Rock. You lose.`;
//     computerScore++;
//   }
// }

//Game

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(
      `Humanity has been enslaved. You must play a computer in a best of five Rock, Paper, Scissors match. Enter 'Rock', 'Paper', or 'Scissors'.\n This is round ${i}.`
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    function round(playerSelection, computerSelection) {
      if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `You both chose ${playerSelection}. That's a tie! The score is: Humanity:${userScore}-Computer:${computerScore}`;
      } else if (
        playerSelection.toLowerCase() === "rock" &&
        computerSelection.toLowerCase() === "paper"
      ) {
        return `You chose Rock, and the Computer chose Paper. You lose. The score is: Humanity:${userScore}-Computer:${computerScore}`;
        computerScore++;
      } else if (
        playerSelection.toLowerCase() === "rock" &&
        computerSelection.toLowerCase() === "scissors"
      ) {
        return `You chose Rock, and the Computer chose Scissors. You win! The score is: Humanity:${userScore}-Computer:${computerScore}`;
        userScore++;
      } else if (
        playerSelection.toLowerCase() === "paper" &&
        computerSelection.toLowerCase() === "scissors"
      ) {
        `You chose Paper, and the Computer chose Scissors. You lose. The score is: Humanity:${userScore}-Computer:${computerScore}`;
        computerScore++;
      } else if (
        playerSelection.toLowerCase() === "paper" &&
        computerSelection.toLowerCase() === "rock"
      ) {
        return `You chose Paper, and the Computer chose Rock. You win! The score is: Humanity:${userScore}-Computer:${computerScore}`;
        userScore++;
      } else if (
        playerSelection.toLowerCase() === "scissors" &&
        computerSelection.toLowerCase() === "paper"
      ) {
        return `You chose Scissors, and the Computer chose Paper. You win! The score is: Humanity:${userScore}-Computer:${computerScore}`;
        userScore++;
      } else {
        return `You chose Scissors, and the Computer chose Rock. You lose. The score is: Humanity:${userScore}-Computer:${computerScore}`;
        computerScore++;
      }
    }
  }
  if (userScore > computerScore) {
    return `You WON! Humanity is saved! The score was: Humanity:${userScore}-Computer:${computerScore}`;
  } else {
    return `You Lost :( ! Humanity is doomed! The score was: Humanity:${userScore}-Computer:${computerScore}`;
  }
}
game();
