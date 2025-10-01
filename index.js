function getComputerChoice(){
    const computerNumber = Math.random()*(3-0)+0 
    /*
    0-1 = Scissor
    1-2 = Rock
    2-3 = Paper
    */
   let computerChoice = ""
   if(computerNumber <= 1 || computerChoice > 0){
    computerChoice = "scissor"
   }
   else if(computerNumber <= 2 || computerNumber > 1){
    computerChoice = "rock"
   }
   else if(computerNumber <= 3 || computerNumber > 2){
    computerChoice = "paper"
   }
   return computerChoice
}
function getHumanChoice(humanInput){
    return humanInput.toLowerCase()
    //console.log(humanChoice)
}
/*
function getScoreBoard(result){
    let humanScore = 0
    let computerScore = 0
    let tie = 0

    if(result === "Human Wins"){
        humanScore += 1
    }
    else if(result === "Computer Wins"){
        computerScore += 1
    }
    else {
        tie += 1
    }
    return humanScore + computerScore + tie;
}
    */
function playRound(humanChoice, computerChoice){
    let result = ""
    if((humanChoice === "rock") && (computerChoice === "scissor")){
        result = "Human Wins"
    }
    else if((humanChoice === "scissor") && (computerChoice === "paper")){
        result = "Human Wins"
    }
    else if((humanChoice === "paper") && (computerChoice === "rock")){
        result = "Human Wins"
    }
    else if((humanChoice === "scissor") && (computerChoice === "rock")){
        result = "Computer Wins"
    }

    else if((humanChoice === "rock") && (computerChoice === "paper")){
        result = "Computer Wins"
    }

    else if((humanChoice === "paper") && (computerChoice === "scissor")){
        result = "Computer Wins"
    }
    else if (humanChoice === computerChoice){
        result = "Tie"
    }
    return result

}
/*
function playAgain(humanScore, computerScore, tie){
    let score = prompt("Human: "+ humanScore + "\nComputer: " + computerScore + "\nTie: " + tie)
    if(humanScore + computerScore + tie !== 5){

    }
}
    */
function startGame(){
    let userInput = prompt(
        "Rock Paper Scissor\n"
        + "Human: "+ humanScore + "\nComputer: " + computerScore + "\nTie: " + tie
    )
        let humanInput = getHumanChoice(userInput)
    let computerInput = getComputerChoice()

    let scoreResult = playRound(humanInput, computerInput)
    if(scoreResult === "Human Wins"){
        humanScore += 1
    }
    else if(scoreResult === "Computer Wins"){
        computerScore += 1
    }
    else {
        tie += 1
    }
    result = humanScore + computerScore + tie;
}
    let humanScore = 0
    let computerScore = 0
    let tie = 0
    let result = humanScore + computerScore + tie
function theGame() {
    while (result != 5){
        startGame()
    }
    let Winner = ""
    if((humanScore > computerScore) && (humanScore > tie)){
        Winner = "Human Wins"
    }
    else if((computerScore > humanScore) && (computerScore > tie)){
        Winner = "Computer Wins"
    }
    else if((tie > computerScore) && (tie > humanScore)){
        Winner = "Tie"
    }
    else{
        Winner = "No Winner"
    }
    alert(Winner)
    humanScore = 0
    computerScore = 0
    tie = 0
    startGame()
}
theGame()

