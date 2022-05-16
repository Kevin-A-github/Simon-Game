////////  /HTML Selectors ///////////////////////

const redSquare = document.querySelector('#red');
const greenSquare = document.querySelector('#green');
const yellowSquare = document.querySelector('#yellow');
const blueSquare = document.querySelector('#blue');
const startButton = document.querySelector('#start');

//////////////////////////////////////////////////////////////

/// function to return a random buttons fomr 0-3.
const randomButtons = () => {
  const buttons = [redSquare, greenSquare, yellowSquare, blueSquare];

  return buttons[parseInt(Math.random() * buttons.length)];
};

const sequence = [randomButtons()];
////// Clone of sequence.
let userToGuess = [...sequence];

/////////////////  Function for button animation /////////////////
const flicker = button => {
  return new Promise((resolve, reject) => {
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

const buttonClicked = button => {
  if (!canClick) return;
  ////// Remove first element from the array ///////.
  const correctButton = userToGuess.shift();
};

///////////////// Function For The random Sequence(game runs) /////////////////

const gameSequence = async () => {
  for (const button of sequence) {
    /// Awaits the callBack for the flicker function.
    await flicker(button);
  }
  //// Unti call back is done user can't click.
  canClick = true;
};
gameSequence();
