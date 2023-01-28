//Generates a random number between 1-3 and chooses a RPS choice based on the number
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