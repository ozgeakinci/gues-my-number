'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 13;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔️ No number');
  }
  // when playes wins
  else if (guess === secretNumber) {
    displayMessage(' 🎉 Correct Number ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when guess is too high
  else if (guess !== secretNumber) {
    if (score > 1) {
      // else if (guess > secretNumber) {
      displayMessage(guess > secretNumber ? ' 📈 To high!' : ' 📉 To low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You are lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//when guess is too low
// else if (guess < secretNumber) {
//   if (score > 0) {
//     document.querySelector('.message').textContent = ' 📉 Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You are lost';
//     document.querySelector('.score').textContent = 0;
//   }
// }

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
