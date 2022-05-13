////////  /HTML Selectors ///////////////////////

const redSquare = document.querySelector('#block1');
const redGreen = document.querySelector('#block2');
const redYellow = document.querySelector('#block3');
const redBlue = document.querySelector('#block4');
const buttons = document.querySelectorAll('.grid');

//////////////////////////////////////////////////////////////

let sequence = [];
let playerSequence = [];

const clickedButton = () => {
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
    });
  });
};
clickedButton();
