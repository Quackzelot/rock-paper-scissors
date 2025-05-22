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
getComputerChoice();
console.log(pcChoice);
