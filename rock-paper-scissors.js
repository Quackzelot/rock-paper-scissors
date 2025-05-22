// Computer Choice
let pcChoice;
function getComputerChoice() {
  pcChoice = Math.random();
  if (pcChoice >= 0 && pcChoice <= 0.33) {
    pcChoice = "Rock";
  } else if (pcChoice >= 0.34 && pcChoice <= 0.66) {
    pcChoice = "Paper";
  } else {
    pcChoice = "Scissors";
  }
}

// Test Computer Choice
getComputerChoice();
console.log(pcChoice);

// Human Choice
let humanChoice;
function getHumanChoice()
{
  humanChoice = prompt("Please make your choice", "Rock, Paper, Scissors");
}

// Test Human Choice
getHumanChoice();
console.log(humanChoice);