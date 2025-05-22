// Variables
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

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

// Game logic
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice == "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
  }
  else if (humanChoice === "rock" && computerChoice == "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
    computerScore = ++computerScore;
  }
  else {
    humanScore = ++humanScore;
  }
}

// Play 5 Rounds
function playGame() {
  while (rounds < 5) {
  getComputerChoice();
  getHumanChoice();
  playRound(humanChoice, computerChoice);
  rounds = ++rounds;
  }
  if (humanScore > computerScore) {
    console.log("You've won. Congratulations.");
  }
  else if (computerScore > humanScore) {
    console.log("You've lost. Better luck next time.");
  }
  else {
    console.log("Draw. Better luck next time.");
  }
  console.log("Your score is " + humanScore + " and the computers score is " + computerScore);
}



playGame()