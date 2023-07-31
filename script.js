// create getComputerChoice function
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {  // make it return strings for rock, paper or scissors
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}
const container = document.querySelector('#winner');

const computerWins = document.createElement('div');
computerWins.textContent = "Computer wins!";
const playerWins = document.createElement('div');
playerWins.textContent = "Player wins!";


let playerScoreInt = 0
let computerScoreInt = 0


const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')


// create a function that plays a single round of the game
function playRound (playerChoice) {
    const computerChoice = getComputerChoice()  //  function should take two parameters, playerSelection and computerSelection

    console.log(computerChoice, playerChoice);

    if (playerChoice === computerChoice) {
        return "It's a tie"
    }    //  based on both parameters it should return a string that declares the winner
    if (playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "paper") {  
        computerScoreInt += 1
        computerScore.innerHTML = computerScoreInt
        if (computerScoreInt >= 5) {
            console.log('computerwin')
            container.appendChild(computerWins)
        };
    } else {
        playerScoreInt += 1
        playerScore.innerHTML = playerScoreInt
        if (playerScoreInt >= 5) {
            console.log('playerwin')
            container.appendChild(playerWins)
        };
    }
}

const rock = document.querySelector('#rock');

rock.addEventListener('click', () => playRound('rock'));

const paper = document.querySelector('#paper');

paper.addEventListener('click', () => playRound('paper'));

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', () => playRound('scissors'));