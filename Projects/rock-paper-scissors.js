const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let resultEmoji = "";

displayScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else {
      result = "You Win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else {
      result = "You Lose";
    }
  } else {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else {
      result = "Tie";
    }
  }

  if (result === "You Win") {
    score.wins += 1;
    resultEmoji = "😄";
  } else if (result === "You Lose") {
    score.losses += 1;
    resultEmoji = "😢";
  } else {
    score.ties += 1;
    resultEmoji = "😐";
  }

  document.querySelectorAll(".rpc-game-result-emoji").forEach((i) => {
    i.innerHTML = resultEmoji;
  });

  localStorage.setItem("score", JSON.stringify(score));

  displayScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML =
    `You <img src="icons/${playerMove}-emoji.png" class="rpc-game-move-icon"> - <img src="icons/${computerMove}-emoji.png" class="rpc-game-move-icon"> Computer `;

  //         alert(
  //           `You Picked ${playerMove}. Computer Picked ${computerMove}. ${result}
  // Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`,
  //         );
  // Code Commented as the same feature is implemented using DOM
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissor";
  }

  return computerMove;
}

function displayScore() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  displayScore();
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-move").innerHTML = "";
  document.querySelectorAll(".rpc-game-result-emoji").forEach((i) => {
    i.innerHTML = "";
  });

  //         alert(`The Score is Reset
  // Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`);
  // Code Commented as the same feature is implemented using DOM
}
