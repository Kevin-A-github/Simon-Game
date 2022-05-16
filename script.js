////////  /HTML Selectors ///////////////////////

const redSquare = document.querySelector('#red');
const greenSquare = document.querySelector('#green');
const yellowSquare = document.querySelector('#yellow');
const blueSquare = document.querySelector('#blue');
let level = document.querySelector('.showLevel');
console.log(level);

let levels = 0;

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
      sequence.push(randomButtons());
      inrcrementLevel();
      userToGuess = [...sequence];
      startFlashing();
    }
  } else {
    /////// End game

    level.innerText = '1';
    startFlashing();
    alert('Game Over');
  }
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

const sound = () => {
  let audio = new Audio();
};
