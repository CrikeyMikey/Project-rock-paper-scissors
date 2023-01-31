//Generates the computers choice using random number generation
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //A switch case statement could probably be used here as well but an if statement came to mind first
    if (randomNumber === 1) {
        return "ROCK";
    } else if (randomNumber === 2) {
        return "PAPER";
    } else if (randomNumber === 3) {
        return "SCISSORS";
    }
}

//Plays a round of Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    //if statement that will compare the choices given by the player and CPU
    if (playerSelection === computerSelection) {
       return "It's a Tie!";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You Win! rock beats scissors";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Win! Paper beats rock";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You Win! Scissors beats paper";
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}


const playerSelection = prompt("Pick from ROCK, PAPER, or SCISSORS");
const computerSelection = computerChoice();
console.log(playRound(playerSelection, computerSelection));