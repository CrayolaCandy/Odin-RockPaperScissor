const choice = document.querySelectorAll("button")
const result = document.querySelector(".result")


choice.forEach(button =>{
    button.addEventListener("click", (e) =>{
        
        //result.textContent = e.target.id
        //console.log(e.target.id)
        StartGame(e.target.id)
    })
})

const playerPoint = document.querySelector(".playerPoint")
const computerPoint = document.querySelector(".computerPoint")
const tie = document.querySelector(".tie")
let humanScore = 0
let computerScore = 0
let tieScore = 0

function StartGame(userInput){
    // Let computer Pick its Move
    let computerChoice = getComputerChoice()
    let scoreResult = compareResult(userInput, computerChoice)

    if(scoreResult === "Human Wins"){
        humanScore += 1
        playerPoint.textContent = humanScore
    }
    else if(scoreResult === "Computer Wins"){
        computerScore += 1
        computerPoint.textContent = computerScore
    }
    else {
        tieScore += 1
        tie.textContent = tieScore
    }
    let gameResult = EndGameCheck(humanScore, computerScore)

    if(gameResult != " "){
        alert(gameResult)
        humanScore = 0
        computerScore = 0
        tieScore = 0

        playerPoint.textContent = humanScore
        computerPoint.textContent = computerScore
        tie.textContent = tieScore
    }
}


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
function compareResult(humanChoice, computerChoice){
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
function EndGameCheck(humanScore, computerScore){
    if(humanScore === 5){
        return ("Human Win")
    }
    else if(computerScore === 5){
        return ("Computer Win")
    }
    else{
        return " "
    }
}