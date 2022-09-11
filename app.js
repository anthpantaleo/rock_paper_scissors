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
// Scores & Round Number

let computerScore = 0;
let userScore = 0;
let roundNumber = 0;

const selection = document.querySelectorAll(".element");
const gameinfo = document.querySelector(".gameinfo");
const playerScore = document.querySelector(".player1-score");
const computerDisplayScore = document.querySelector(".computer-score");
const playAgain = document.querySelector(".playagain");

// checks for round to exist

function doesGameExist() {
  if (roundNumber == 5 || computerScore == 3 || userScore == 3) {
    if (computerScore == 3 || computerScore > userScore) {
      gameinfo.innerText = `You've lost... Refresh or Select Start Over to try again.`;
    } else if (userScore == 3 || userScore > computerScore) {
      gameinfo.innerText = `You've won! Goodjob. You beat a computer that randomly chooses an option. Nice..? Refresh or Select Start Over to try again.`;
    } else {
      gameinfo.innerText = `That's a tie folks! Refresh or choose that Start Over Button to start again.`;
    }
  } else if (roundNumber == 4 && computerScore == 2 && userScore == 0) {
    gameinfo.innerText = `You've lost before 5 rounds... Refresh or Select Start Over to try again.`;
  } else if (roundNumber == 4 && computerScore == 0 && userScore == 2) {
    gameinfo.innerText = `You've won in 4 rounds! Goodjob. You beat a computer that randomly chooses an option. Nice..? Refresh or Select Start Over to try again.`;
  } else {
  }
}

//Clickies

selection.forEach((selection) => {
  selection.addEventListener("click", function () {
    // Starts the round function
    round(selection.value);
  });
});

playAgain.addEventListener("click", function () {
  window.location.reload();
});

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

function round(playerSelection) {
  if (roundNumber < 5 && computerScore != 3 && userScore != 3) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
      roundNumber++;
      gameinfo.innerText = `You both chose ${playerSelection}... Choose again.`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      roundNumber++;
      playerScore.innerText = userScore;
      computerDisplayScore.innerText = computerScore;
      gameinfo.innerText = `You chose ${playerSelection}, and the Computer chose ${computerSelection}. Choose again.`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      userScore++;
      roundNumber++;
      playerScore.innerText = userScore;
      computerDisplayScore.innerText = computerScore;
      gameinfo.innerText = `You chose ${playerSelection}, and the Computer chose ${computerSelection}.  Choose again.`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore++;
      roundNumber++;
      playerScore.innerText = userScore;
      computerDisplayScore.innerText = computerScore;
      gameinfo.innerText = `You chose ${playerSelection}, and the Computer chose ${computerSelection}.  Choose again.`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      userScore++;
      roundNumber++;
      playerScore.innerText = userScore;
      computerDisplayScore.innerText = computerScore;
      gameinfo.innerText = `You chose ${playerSelection}, and the Computer chose ${computerSelection}.  Choose again.`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
      roundNumber++;
      playerScore.innerText = userScore;
      computerDisplayScore.innerText = computerScore;
      gameinfo.innerText = `You chose ${playerSelection}, and the Computer chose ${computerSelection}.  Choose again.`;
    } else {
      // scissors player, paper computer
      userScore++;
      roundNumber++;
      playerScore.innerText = userScore;
      computerDisplayScore.innerText = computerScore;
      gameinfo.innerText = `You chose ${playerSelection}, and the Computer chose ${computerSelection}.  Choose again.`;
    }
  }
  doesGameExist();
}

// Updates Display

computerDisplayScore.innerText = computerScore;
playerScore.innerText = userScore;
