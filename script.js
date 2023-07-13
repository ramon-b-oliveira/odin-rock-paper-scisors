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
// create game function that will use previous functions
function game() {
    let i = 0
    let playerScore = 0  // game should keep score
    let computerScore = 0

    while (i < 5) {  // the game should be a 5 round game
        if (playerScore === 3 || computerScore === 3) {
            break
        }
        let result = playRound()
        if (result === "You lost this round") {
            computerScore++
            i++
        } 
        if (result === "You won this round") {
            playerScore++
            i++
        }
        console.log(result)
        console.log(`You: ${playerScore}   Computer: ${computerScore}`)
    }

    // make game report a winner

    if (playerScore > computerScore) {
        console.log("Good job, you beat the machine!")
    } else {
        console.log("You lost, try again!")
    }
}

game()
