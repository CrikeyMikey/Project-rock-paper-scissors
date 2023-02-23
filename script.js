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

//Initializes a prompt in the browser to get the users choice
function playerChoice() {
    let choice = prompt("Choose from rock, paper, or scissors");
    return choice.toUpperCase();
}

//variables for the score of the player and the computer, plus the round number
let playerScore = 0;
let computerScore = 0;
let round = 0;

//Plays a round of Rock, Paper, Scissors, calls the choice variables and runs them through a gauntlet of if statements
function playRound() {
    const computerSelection = computerChoice();
    const playerSelection = playerChoice();
    //if statement that will compare the choices given by the player and CPU
    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        //in each statement the score and round number is updated accordingly
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

//primary game function which will run through the round function until either the player or computer score reaches 5
function game() {
    while (playerScore < 5 || computerScore < 5) {
        //calls the round function which gathers the player and CPU choices
        playRound();
        //if the scores of either the player or CPU reach 5 halt execution and display one of 2 messages
        if (playerScore >= 5) {
            return("You Win! you have beaten the machine!");
        }
        else if (computerScore >= 5) {
            return("You Lose! the machine won");
        }
        else {
            console.log("Continue Playing");
        }
    }
}
