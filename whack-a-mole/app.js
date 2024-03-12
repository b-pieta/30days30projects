const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null; 
let countDownTimerId = null; 

// Removing a mole from our grid
function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole');
    });

    let randomPosition = squares[Math.floor(Math.random() * squares.length)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

// Setting a timer to catch a mole
squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId); 
        clearInterval(countDownTimerId); 
        alert('Game over! Your final score is ' + result);
    }
}

function moveMole() {
    timerId = setInterval(randomSquare, 500); 
}


moveMole();
countDownTimerId = setInterval(countDown, 1000); 
