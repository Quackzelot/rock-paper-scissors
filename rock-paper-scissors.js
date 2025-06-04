// Variables
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

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

// Game logic
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "scissors")
  ) {
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore = ++computerScore;
  } else {
    humanScore = ++humanScore;
  }
  const currentScore = document.createElement("p");
  currentScore.textContent =
    "The current Score is: Human: " +
    humanScore +
    " Computer: " +
    computerScore;
  results.appendChild(currentScore);
}

// results
const results = document.querySelector("#results");

// Play to 5 points
function playGame() {
  if (humanScore < 5 && computerScore < 5) {
    playRound(humanChoice, computerChoice);
    if (humanScore == 5) {
      const victory = document.createElement("h2");
      victory.textContent = "You've won. Congratulations.";
      results.appendChild(victory);
      score();
    } else if (computerScore == 5) {
      const loss = document.createElement("h2");
      loss.textContent = "You've lost. Better luck next time.";
      results.appendChild(loss);
      score();
    }
  }
}

function score() {
  const score = document.createElement("h2");
  score.textContent =
    "Your score is " +
    humanScore +
    " and the computers score is " +
    computerScore;
  results.appendChild(score);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener("click", () => {
  humanChoice = "rock";
  getComputerChoice();
  playGame();
});
paper.addEventListener("click", () => {
  humanChoice = "paper";
  getComputerChoice();
  playGame();
});
scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  getComputerChoice();
  console.log(humanChoice);
  console.log(computerChoice);
  playGame();
});
