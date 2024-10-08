
function getComputerChoice() {
let computerChoice = Math.random();

  if (computerChoice <= 0.33) {
    return "rock";
  } else if (computerChoice >= 0.66) {
    return "scissors";
  } else {
    return "paper";
    }
  }

  function getHumanChoice() {
  let humanChoice = window.prompt("Please choose rock, paper, or scissors").toLowerCase();

  
    if (humanChoice === "rock") {
    return "rock";
  } else if (humanChoice === "paper") {
    return "paper";
  } else if (humanChoice === "scissors") {
    return "scissors";
  } else {
    return "error";
  }
  }

  let humanScore = 0;
  let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let result = "";
 
if ((humanChoice === computerChoice)) {
    result =  "It's a tie!";
  } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
    result = "You lose, paper beats rock";
    computerScore++;
  } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
    result =  "You lose, scissors beats paper";
    computerScore++;
  } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
    result = "You lose, rock beats scissors";
    cmputerScore++;
  } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
    result = "You win, rock beats scissors";
    humanScore++;
  } else if ((humanChoice === "paper") && (computerChoice === "rock"))  {
    result = "You win, paper beats rock";
    humanScore++;
  } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
    result = "You win, scissors beats paper";
    humanScore++;
    }
 console.log(humanChoice, computerChoice);
 console.log(result);
 console.log(humanScore, computerScore);

  }

  function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

 playGame();
 playGame();
 playGame();
 playGame();
 playGame();

 function gameOver() {
  if (computerScore === humanScore) {
    return "It's a draw!";
  } else if (computerScore > humanScore) {
      return "The computer beat you!";
    } else if 
      (computerScore < humanScore) {
      return "You beat the computer!"
      }
    }

    console.log(gameOver());

    
  
 
  
  

 

  



 
        
              
        
                  
                    



  
   
  
   
 
 


    
  
    


/*playGame();
playGame();
playGame();
playGame();
playGame();
  


  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);

}
*/
  

  

  


/*
function playGame() {


let humanScore = 0
let computerScore = 0

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    console.log(playRound()); // Play one round and display the result
    
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("The game ended in a tie!");
  }
}
}

playGame(); */