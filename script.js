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
    
    console.log(computerChoice)


    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        console.log("you must enter a valid value")
        return
    }
    if (playerChoice === computerChoice) {
        console.log("it's a tie")
        return
    }    //  based on both parameters it should return a string that declares the winner
    if (playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "paper") {  
        return "You lost this round"
    } else {
        return "you won this round"
    }
}
// create game function that will use previous functions
// the game should be a 5 round game
// game should keep score
// make game report a winner