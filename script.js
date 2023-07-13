// create getComputerChoice function

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}
console.log(getComputerChoice())
// make it return strings for rock, paper or scissors
// create a dunction that plays a single round of the game
//  function should take two parameters, playerSelection and computerSelection
//  based on bothe parameters it should return a string that declares the winner
// make the function playerSelection parameter case-incensitive
// create game function that will use previous functions
// the game should be a 5 round game
// game should keep score
// make game report a winner