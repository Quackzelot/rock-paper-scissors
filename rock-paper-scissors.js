// Variables
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let result;

// Computer Choice
function getComputerChoice() {
  computerChoice = Math.random();
  if (computerChoice >= 0 && computerChoice <= 0.33) {
    computerChoice = "rock";
  } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

// Human Choice
function getHumanChoice() {
  humanChoice = prompt("Please make your choice", "Rock, Paper, Scissors");
}

// Get Computer Choice
getComputerChoice();

// Get Human Choice
getHumanChoice();

// Game logic
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice == "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
    result = "Draw. Try again.";
  }
  else if (humanChoice === "rock" && computerChoice == "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
    result = "You lose. Better luck next time.";
    computerScore = ++computerScore;
  }
  else {
    result = "You win. Nice one.";
    humanScore = ++humanScore;
  }
}

// Output results and score
playRound(humanChoice, computerChoice);
console.log(result);
console.log(computerScore);
console.log(humanScore);