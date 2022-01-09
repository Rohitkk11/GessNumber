// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number';
// // document.querySelector('.number').textContent = '45';
// // document.querySelector('.score').textContent = 34;

// document.querySelector('.number.score').textContent = '433';
// console.log((document.querySelector('.guess').value = 54));
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//console.log((document.querySelector('.number').textContent = secretNumber));
//console.log(document.querySelector('.check'));
document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '😢Choose the Current Number !';
    displayMessage('😢Choose the Current Number !');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '😂 Current Number !';
    displayMessage('😂 Current Number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    score--;
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '🙆‍♂️ Too High!' : ' 🙇‍♂️ Too Low !';
      displayMessage(guess > secretNumber ? '🙆‍♂️ Too High!' : ' 🙇‍♂️ Too Low !');
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     ' 🙇‍♂️ you are lost the Game !';
      displayMessage(' 🙇‍♂️ you are lost the Game !');
      document.querySelector('.score').textContent = score;
    }
  }
  // else if (guess < secretNumber) {
  //     score--;
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = ' 🙇‍♂️ Too Low !';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         ' 🙇‍♂️ you are lost the Game !';
  //       document.querySelector('.score').textContent = score;
  //     }
  //   } else if (guess > secretNumber) {
  //     score--;
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = '🙆‍♂️ Too High!';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         ' 🙇‍♂️ you are lost the Game !';
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
