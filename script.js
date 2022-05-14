////////  /HTML Selectors ///////////////////////

const redSquare = document.querySelector('#red');
const redGreen = document.querySelector('#green');
const redYellow = document.querySelector('#yellow');
const redBlue = document.querySelector('#blue');
const buttons = document.querySelectorAll('.grid');

//////////////////////////////////////////////////////////////

let buttonColors = ['red', 'green', 'yellow', 'blue'];
let sequence = [];
let userSequence = [];

const clickedButton = () => {
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      userSequence.push(button);
      console.log(userSequence);
    });
  });
};
clickedButton();

/////////////// Returns random color ////////////
const nextSequence = () => {
  let randomNum = Math.floor(Math.random() * 4);
  sequence.push(buttonColors[randomNum]);
};
nextSequence();
