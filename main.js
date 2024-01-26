//first interactive game
let playGame = confirm("shall we play rock paper scissors?");
if (playGame) {
  let playerChoice = prompt("please enter rock, paper or scissors:");
  //player clicks ok
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
      //player enters value
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      //generates random value
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      let result =
        playerOne === computer
          ? "Tie Game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne : ${playerOne}\nComputer ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne : ${playerOne}\nComputer ${computer}\nComputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne : ${playerOne}\nComputer ${computer}\nComputer wins!`
          : `playerOne : ${playerOne}\nComputer ${computer}\nPlayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("okay, Thanks for playing");
      //if player clicks ok then page reloads
    } else {
      alert("you didn't enter rock, paper or scissors.");
      //if player doesn't enter anything in the box
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
    //player clicks cancel in the prompt box
  }
} else {
  alert("Ok, maybe next time.");
  //cancel in the first box
}
