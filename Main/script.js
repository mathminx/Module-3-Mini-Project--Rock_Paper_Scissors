const choices = ['rock', 'paper', 'scissors'];
const minValue = 1;
const maxValue = 3;

const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', (e) => {
  const userChoice = (e.target.id);
  letsPlay(userChoice);
  document.getElementById("user-choice").innerHTML = "You chose " + userChoice + "...";
});

function letsPlay (userChoice) {
  document.getElementById("user-choice").innerHTML = "";
  document.getElementById("computer-choice").innerHTML = "";
  const computerChoice = getComputerChoice();
  whoWon(userChoice, computerChoice);
  playAgain
} 

function getComputerChoice () { 
  let min = Math.ceil(minValue);
  let max = Math.floor(maxValue);
  const computerChoice = choices[(Math.floor(Math.random() * (max - min + 1)) + min)-1];
  document.getElementById("computer-choice").innerHTML = "Computer chose " + computerChoice + "...";
  return computerChoice;
};

function whoWon (userChoice, computerChoice) {
  const userChose = userChoice;
  const computerChose = computerChoice
  let winner = ""
  if (userChose === "rock") {
    if (computerChose === "rock") {
      winner = "It's a tie!";
    }
    else if (computerChose === "paper") {
      winner = "Paper covers rock - computer wins!";
    }
    else {
      winner = "Rock dulls scissors - you win!";
    }
  }
  else if (userChose === "paper") {
    if (computerChose === "rock") {
      winner = "Paper covers rock - you win!";
    }
    else if (computerChose === "paper") {
      winner = "It's a tie!";
    }
    else {
      winner = "Scissors cut paper - computer wins!";
    }
  }
  else {
    if (userChose === "scissors") {
      if (computerChose === "rock") {
        winner = "Rock dulls scissors - computer wins!";
      }
      else if (computerChose === "paper") {
        winner = "Scissors cut paper - you win!";
      }
      else {
        winner = "It's a tie!"
      }
    }
  } 
  document.getElementById("result").innerHTML = winner;
  return winner;
};

function playAgain () {
  if (confirm("Play again?") == false) {
    text = "Thanks for playing!";
    return;
  } else {
    letsPlay ();
  }
}