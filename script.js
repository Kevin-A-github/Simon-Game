'use strict';
////////  /HTML Selectors ///////////////////////

const redSquare = document.querySelector('#red');
const greenSquare = document.querySelector('#green');
const yellowSquare = document.querySelector('#yellow');
const blueSquare = document.querySelector('#blue');
const gameOver = document.querySelector('.gameOver');
let level = document.querySelector('.showLevel');

let levels = 0;

//////////////////////////////////////////////////////////////

/// function to return a random buttons fomr 0-3.
const randomButtons = () => {
  const buttons = [redSquare, greenSquare, yellowSquare, blueSquare];

  return buttons[parseInt(Math.random() * buttons.length)];
};

let sequence = [randomButtons()];

////// Clone of  random sequence.
let userToGuess = [...sequence];

/////////////////  Function for button animation /////////////////
const flicker = button => {
  return new Promise(resolve => {
    /// Add css class
    button.className += 'active';
    setTimeout(() => {
      /// removes class.
      button.className = button.className.replace('active', '');
      setTimeout(() => {
        resolve();
      }, 250);
    }, 1000);
  });
};

///////////////// Function for clicking buttons /////////////////

let canClick = false;

const buttonClicked = buttonClicked => {
  if (!canClick) return;
  ////// Remove first element from the array and return ot to user. ///////
  const correctButton = userToGuess.shift();
  if (correctButton === buttonClicked) {
    if (userToGuess.length === 0) {
      ///// Start new sequence
      let audio = new Audio(`./sounds/${buttonClicked.id}.mp3`);
      audio.play();
      sequence.push(randomButtons());
      inrcrementLevel();
      userToGuess = [...sequence];
      startFlashing();
    }
  } else {
    /////// End game
    gameOver.innerText = 'GAME OVER';
    let audio = new Audio(`./sounds/wrong.mp3`);
    audio.play();
    setTimeout(() => {
      gameOver.innerText = '';
      reset();
      levels = 0;
      startFlashing();
    }, 1000);
  }
};

const reset = () => {
  sequence = [randomButtons()];
  userToGuess = [...sequence];
  level.innerText = 0;
};

///////////////// Function For The random Sequence(game runs) /////////////////
const startFlashing = async () => {
  canClick = false;
  for (const button of sequence) {
    /// Awaits the callBack for the flicker function.
    await flicker(button);
  }
  //// Unti call back is done user can't click.
  canClick = true;
};
startFlashing();

const inrcrementLevel = () => {
  levels++;
  level.innerText = levels;
};
