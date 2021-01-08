let scoreZero = document.getElementById("score--0");
let scoreOne = document.getElementById("score--1");
let diceElement = document.querySelector(".dice");
let newGameBtn = document.querySelector(".btn--new");
let holdBtn = document.querySelector(".btn--hold");
let rollBtn = document.querySelector(".btn--roll");
let currentZeroEl = document.getElementById("current--0");
let currentOneEl = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
diceElement.classList.add("hidden");
scoreZero.textContent = 0;
scoreOne.textContent = 0;
let currentScore;
let scores;
let activePlayer;
let playing;


function init() {
    scores = [0, 0];
    currentScore = 0;
    scoreZero.textContent = 0;
    scoreOne.textContent = 0;
    currentZeroEl.textContent = 0;
    currentOneEl.textContent = 0;
    playing = true;
    activePlayer = 0;
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
}

init();

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}

rollBtn.addEventListener("click", function () {
    if (playing) {
        let diceRoll = Math.trunc(Math.random() * 6) + 1;
        diceElement.classList.remove("hidden");
        diceElement.src = `${diceRoll}.png`;

        if (diceRoll !== 1) {
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

holdBtn.addEventListener("click", function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceElement.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            switchPlayer();
        }
    }
});

newGameBtn.addEventListener("click", function () {
    init();
});