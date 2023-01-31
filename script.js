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

function playerChoice() {
    let choice = prompt("Choose from rock, paper, or scissors");
    return choice.toUpperCase();
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

//Plays a round of Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    //if statement that will compare the choices given by the player and CPU
    const computerSelection = computerChoice();
    const playerSelection = playerChoice();
    
    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        computerScore++;
        round++;
        console.log("You Lose! rock beats paper");
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        playerScore++;
        round++;
        console.log("You win! rock beats scissors");
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        playerScore++;
        round++;
        console.log("You win! paper beats rock");
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        computerScore++;
        round++;
        console.log("You Lose! scissors beats paper");
    } 
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        computerScore++;
        round++;
        console.log("You Lose! rock beats scissors");
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        playerScore++;
        round++;
        console.log("You win! scissors beats paper");
    } else {
        console.log("This round is a Tie!");
    }
}

function game() {
    while(round <= 5) {
        playRound();
        console.log("This is round" + " " + round);
        if (playerScore == 5) {
            return "YOU WIN!";
        }
        else if (computerScore == 5) {
            return "YOU LOSE";
        } else {
            return "Continue playing";
        }
    }
}