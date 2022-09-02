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

// Randomly chooses between "Rock",  "Paper", and "Scissors"

let computerScore = 0;
let userScore = 0;

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

// round

function round(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log(
      `You both chose ${playerSelection}. That's a tie! The score is: Humanity:${userScore} - Computer:${computerScore}`
    );
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    computerScore++;
    console.log(
      `You chose Rock, and the Computer chose Paper. You lose. The score is: Humanity:${userScore} - Computer:${computerScore}`
    );
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    userScore++;
    console.log(
      `You chose Rock, and the Computer chose Scissors. You win! The score is: Humanity:${userScore} - Computer:${computerScore}`
    );
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    computerScore++;
    console.log(
      `You chose Paper, and the Computer chose Scissors. You lose. The score is: Humanity:${userScore} - Computer:${computerScore}`
    );
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    userScore++;
    console.log(
      `You chose Paper, and the Computer chose Rock. You win! The score is: Humanity:${userScore} - Computer:${computerScore}`
    );
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    userScore++;
    console.log(
      `You chose Scissors, and the Computer chose Paper. You win! The score is: Humanity:${userScore} - Computer:${computerScore}`
    );
  } else {
    computerScore++;
    console.log(
      `You chose Scissors, and the Computer chose Rock. You lose. The score is: Humanity:${userScore} - Computer Aliens:${computerScore}`
    );
  }
}

//Game

function game() {
  for (let i = 1; i < 6; i++) {
    const playerGameInput = prompt(
      `Humanity has been attacked by Computer Aliens. You have been chosen to play against them in a Rock Paper Scissors match. First to 5. Choose one. The score is: Humanity: ${userScore} - Computer :${computerScore}. This is round ${i}.`
    );
    const computerGameChoice = getComputerChoice();
    round(playerGameInput, computerGameChoice);
  }
  if (userScore === computerScore) {
    console.log(
      console.log(
        `Refresh, let's play again. The score was ${userScore} - ${computerScore}`
      )
    );
  } else if (userScore > computerScore) {
    console.log(
      `Humanity is saved thanks to you. The score was: ${userScore} - ${computerScore}`
    );
  } else {
    console.log(
      `Humanity is dead. You've lost to the Computer Aliens ${computerScore} - ${userScore}`
    );
  }
}

game();
