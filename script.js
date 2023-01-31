//Generates the computers choice using random number generation
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //A switch case statement could probably be used here as well but an if statement came to mind first
    if (randomNumber == 1) {
        return "ROCK";
    } else if (randomNumber == 2) {
        return "PAPER";
    } else if (randomNumber == 3) {
        return "SCISSORS";
    } else {
        return NaN;
    }
}

//Used to log the players choice of either rock, paper, or scissors
let input = prompt("Enter your choice here");

function getPlayerChoice() {
    return toUpperCase(input);
}

