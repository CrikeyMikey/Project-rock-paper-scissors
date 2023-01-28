//create function getComputerChoice() {
    //use a variable to hold a number randomly choose a number between 0-3
    //if number is equal to 1 
        //return "rock"
    //if numbber is equal to 2 
        //return "paper"
    //if number is equal to 3 
        //return "scissors"
    //else return NaN
//}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //A switch case statement could probably be used here as well but an if statement came to mind first
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else if (randomNumber == 3) {
        return "scissors";
    } else {
        return NaN;
    }
}