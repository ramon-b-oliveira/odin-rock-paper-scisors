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
// create a function that plays a single round of the game
function playRound (computerChoice, playerChoice) {
    computerChoice = getComputerChoice()  //  function should take two parameters, playerSelection and computerSelection
    playerChoice = prompt().toLowerCase()  // make the function playerSelection parameter case-incensitive


    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        console.log("you must enter a valid value")
        playRound()
    }
    if (playerChoice === computerChoice) {
        return "It's a tie"
    }    //  based on both parameters it should return a string that declares the winner
    if (playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "paper") {  
        return "You lost this round"
    } else {
        return "You won this round"
    }
}
