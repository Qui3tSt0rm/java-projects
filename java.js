
let humanScore = 0
let computerScore = 0



const computerChoice = Math.random();

function getComputerChoice() {
      if (computerChoice <= 0.33) {
      return "rock";
    } else if (computerChoice >= 0.66) {
      return "scissors";
    } else {
      return "paper";
    }
  }

let option = window.prompt("Please choose rock, paper, or scissors");
let humanChoice = option.toLowerCase();

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


  function getHumanChoice() {
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



function playRound(i) {
  if (i >=5) {
    return;
  }
  
  if ((humanSelection === computerSelection)) {
    return "It's a tie!";
  } else if ((humanSelection === "rock") && (computerSelection === "paper")) {
    result = 'Lose';
    compWin = ++computerScore;
    return "You lose, paper beats rock";
  } else if ((humanSelection === "paper") && (computerSelection === "scissors")) {
    result = 'Lose';
    compWin =++computerScore;
    return "You lose, scissors beats paper";
  } else if ((humanSelection === "scissors") && (computerSelection === "rock")) {
    result = 'Lose';
    compWin = ++computerScore;
    return "You lose, rock beats scissors";
  } else if ((humanSelection === "rock") && (computerSelection === "scissors")) {
    result = 'Win';
    humanWin = ++humanScore;
    return "You win, rock beats scissors";
  } else if ((humanSelection === "paper") && (computerSelection === "rock"))  {
    result = 'Win';
    humanWin = ++humanScore;
    return "You win, paper beats rock";
  } else if ((humanSelection === "scissors") && (computerSelection === "paper")) {
    result = 'Win';
    humanWin = ++humanScore;
    return "You win, scissors beats paper";
    }
  
  playRound(5)(humanChoice, computerChoice);
  }



console.log(humanSelection, computerSelection);
console.log (playRound (''))
console.log(humanScore, computerScore);







    //playRound(5);
   // getComputerChoice(5);
   // getHumanChoice(5);
  

//playRound(humanSelection, computerSelection);
  
   
//function playGame (getComputerChoice, getHumanChoice) {

 // playRound(5)
 // humanChoice(5)
 // computerChoice(5)
    
   //if (humanScore > computerScore) {
  //  return "You beat the computer!";
  //} else if (humanScore === computerScore) {
 //   return "It's a draw!";
  //} else if (humanScore < computerScore) {
   // return "The computer beat you!";
 // }



// console.log(playGame(''));
  
    // playRound(5);  

  //if (humanScore > computerScore);
   //  return "You beat the computer!";
   //else if (humanScore === computerScore);
   // return "It's a draw"
   // else if (humanScore < comptuterScore);
   // return ("The computer beat you!");



     
    
    


    






  // console.log(getHumanChoice('')); //

  // need to play 5 rounds
  // need prompt each round
  // if comp score > human score after 5 rounds, you lose
  //if human score > comp score after 5 rounds, you win
  // if comp score = human score, it's a draw //