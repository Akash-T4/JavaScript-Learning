const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let resultEmoji = "";

displayScore();

let intervalKey;
let isAutoPlay = false;

document
  .querySelector(".js-rpc-game-auto-play-button")
  .addEventListener("click", () => {
    autoPlay();
  });

function autoPlay() {
  if (!isAutoPlay) {
    intervalKey = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    document.querySelector(".js-rpc-game-auto-play-button").innerText =
      "Stop Play";
    isAutoPlay = true;
  } else {
    clearInterval(intervalKey);
    document.querySelector(".js-rpc-game-auto-play-button").innerText =
      "Auto Play";
    isAutoPlay = false;
  }
}

document
  .querySelector(".js-rpc-game-rock-move-button")
  .addEventListener("click", () => {
    playGame("Rock");
  });

document
  .querySelector(".js-rpc-game-paper-move-button")
  .addEventListener("click", () => {
    playGame("Paper");
  });

document
  .querySelector(".js-rpc-game-scissor-move-button")
  .addEventListener("click", () => {
    playGame("Scissor");
  });

document.body.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame("Paper");
  } else if (event.key === "s") {
    playGame("Scissor");
  } else if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    resetScore();
  }
});

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

document
  .querySelector(".js-rpc-game-reset-score-button")
  .addEventListener("click", () => {
    resetScore();
  });

function resetScore() {
  console.log(score);
  if (score.wins || score.losses || score.ties) {
    document.querySelector(".js-rpc-reset-score-confirmation").innerHTML = `
  Are you sure you want to reset the score ? 
  <button class="reset-score-confirmation-yes-btn">Yes</button>
  <button class="reset-score-confirmation-no-btn">No</button>`;

    document
      .querySelector(".reset-score-confirmation-yes-btn")
      .addEventListener("click", () => {
        resetScoreYes();
      });

    document
      .querySelector(".reset-score-confirmation-no-btn")
      .addEventListener("click", () => {
        resetScoreNo();
      });

    document.body.addEventListener("keydown", (event) => {
      if (event.key === "y") {
        resetScoreYes();
      }
    });

    document.body.addEventListener("keydown", (event) => {
      if (event.key === "n") {
        resetScoreNo();
      }
    });

    function resetScoreYes() {
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
      clearInterval(intervalKey);
      document.querySelector(".js-rpc-reset-score-confirmation").innerHTML = "";
    }

    function resetScoreNo() {
      document.querySelector(".js-rpc-reset-score-confirmation").innerHTML = "";
    }

    //         alert(`The Score is Reset
    // Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`);
    // Code Commented as the same feature is implemented using DOM
  }
}
