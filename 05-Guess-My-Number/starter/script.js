'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);
  const x = Math.floor(Math.random() * 20) + 1;
  console.log(x, typeof x);

  document.querySelector('.number').textContent = x;

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number';
    //document.querySelector('.label-score').textContent = '🤬 Fuck you';
    //document.querySelector('.label-highscore').textContent =
    ('👿 You are an idiot. ');
  } else if (guess) {
    if (guess === x) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      score++;
      document.querySelector('.score').textContent = score;
    } else if (guess > x) {
      document.querySelector('.message').textContent =
        'Too High. Guess again!!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score < 1)
        document.querySelector('.message').textContent = 'Game Over';
    } else if (guess < x) {
      document.querySelector('.message').textContent = 'Too Low. Guess again!!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score < 1)
        document.querySelector('.message').textContent = 'Game Over';
    }
  }
});

//Restart the game with the score of 20
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
});
