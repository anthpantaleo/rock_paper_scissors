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
