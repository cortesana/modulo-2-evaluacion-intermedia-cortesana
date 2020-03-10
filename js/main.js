'use strict'

const chosenNum = document.querySelector('#chosenNum');
const clue = document.querySelector('#clue');
const attempts = document.querySelector('#attempts');
const tryNum = document.querySelector('#try-number');
let randNum;

function generateRandomNumber() {
    randNum = Math.ceil(Math.random() * 100);
    console.log(`Mi número aleatorio es ${randNum}`);
}

function increaseAttemptCounter() {
    let attemptCounter = parseInt(attempts.innerHTML);
    attemptCounter++;
    attempts.innerHTML = attemptCounter;
}

function compareGuess() {
    if(chosenNum.value < randNum) {
        clue.innerHTML = 'Demasiado bajo.'
    }
    else if(chosenNum.value > randNum) {
        clue.innerHTML = 'Demasiado alto.'
    }
    else {
        clue.innerHTML = 'Has ganado, máquina'
    }
}

function guessTheNumber() {
    if(!(chosenNum.value < 101 && chosenNum.value > 0)) {
        clue.innerHTML = 'El número debe estar entre 1 y 100.';
    }
    else {
        increaseAttemptCounter();
        compareGuess();
    }
}

generateRandomNumber();
tryNum.addEventListener('click', guessTheNumber);