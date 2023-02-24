let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const resultDiv = document.querySelector('.result')

const computerChoice = () => {
    const arrChoices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * arrChoices.length);
    return arrChoices[randomNumber];
}

const playRound = (playerSelection, computerSelection) => {
    console.log('1 ', playerSelection, '2 ', computerSelection)
    if (playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText = `You tied! You both picked ${playerSelection}`
        resultDiv.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! rock beats scissors'
        resultDiv.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You Win! scissors beats paper'
        resultDiv.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! Paper beats rock'
        resultDiv.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You Won! rock beats scissors'
        resultDiv.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! scissors beats paper'
        resultDiv.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You Won! paper beats rock'
        resultDiv.appendChild(p);
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
})

//const game = () => {
//    while (playerScore < 5 || computerScore < 5) {
//        playRound();
//        if (playerScore >= 5) {
//            return("You Win! you have beaten the machine!");
//        }
//        else if (computerScore >= 5) {
//            return("You Lose! the machine won");
//        }
//        else {
//            console.log("Continue Playing");
//        }
//    }
//}