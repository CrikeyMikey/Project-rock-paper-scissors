let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const resultDiv = document.querySelector('.result')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

const computerChoice = () => {
    const arrChoices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * arrChoices.length);
    return arrChoices[randomNumber];
}

const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p')
    if (playerSelection === computerSelection) {
        p.innerText = `You tied! You both picked ${playerSelection}`
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        p.innerText = 'You Lose! rock beats scissors'
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        p.innerText = 'You Win! scissors beats paper'
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        p.innerText = 'You Lose! Paper beats rock'
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        p.innerText = 'You Won! rock beats scissors'
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        p.innerText = 'You Lose! scissors beats paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        p.innerText = 'You Won! paper beats rock'
    }
    resultDiv.appendChild(p);
}

const winCheck = (playerScore, computerScore) => {
    const h2 = document.createElement('h2')
    if (playerScore === 5) {
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${computerScore}, congratulations!`
    } 
    else if (computerScore === 5) {
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${computerScore}, game over`
    }
    resultDiv.append(h2)
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Your Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    winCheck(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore)
    winCheck(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore)
    winCheck(playerScore, computerScore)
})
