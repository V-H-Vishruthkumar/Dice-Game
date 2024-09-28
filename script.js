'use strict';
const palyer0 = document.querySelector('.player--0');
const palyer1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
// we can use getElementBy.. other than querySelector
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

let currentScore, score, activePlayer, playing;
const intialGame = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore = 0;
  playing = true;
  score = [0, 0];
  activePlayer = 0;
  palyer0.classList.remove('player--winner');
  palyer1.classList.remove('player--winner');
  activePlayer = 0;
  score = [0, 0];
  currentScore = 0;
  palyer0.classList.add('player--active');
  palyer1.classList.remove('player--active');
  score0.textContent = score[0];
  score1.textContent = score[1];
  current0.textContent = 0;
  current1.textContent = 0;
  playing = true;
};
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  palyer0.classList.toggle('player--active');
  palyer1.classList.toggle('player--active');
};
intialGame();
//Roll the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dicenum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${dicenum}.png`;
    if (dicenum !== 1) {
      currentScore += dicenum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', intialGame);
