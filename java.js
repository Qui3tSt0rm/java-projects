let humanScore = 0

let computerScore = 0

const computerChoice = Math.random();
    
function getComputerChoice(string) {
      if (computerChoice <= 0.33) {
      return "rock";
    } else if (computerChoice >= 0.66) {
      return "scissors";
    } else {
      return "paper";
    }
  }

   // console.log(getComputerChoice('')); //

  let option = window.prompt("Please choose rock, paper, or scissors");

  function getHumanChoice(string) {
    if (option === "rock") {
    return "rock";
  } else if (option === "paper") {
    return "paper";
  } else if (option === "scissors") {
    return "scissors";
  } else {
    return "error";
  }
}



let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    if ((humanSelection) === (computerSelection)) {
      return "It's a tie!";
    } else if ((humanSelection = "rock") && (computerSelection = "paper")) {
      return "You lose, paper beats rock";
    } else if ((humanSelection = "paper") && (computerSelection = "scissors")) {
      return "You lose, scissors beats paper";
    } else if ((humanSelection = "scissors") && (computerSelection = "rock")) {
      return "You lose, rock beats scissors";
    } else if ((humanSelection = "rock") && (computerSelection = "scissors")) {
        return "You win, rock beats scissors";
    } else if ((humanSelection = "paper") && (computerSelection = "rock"))     {
        return "You win, paper beats rock";
    } else if ((humanSelection = "scissors") && (computerSelection = "paper")) {
        return "You win, scissors beats paper";
    }
  }
        




console.log (humanSelection, computerSelection);
console.log (playRound(''));



 //playRound(humanSelection, computerSelection); //


  // console.log(getHumanChoice('')); //


    
    
  


