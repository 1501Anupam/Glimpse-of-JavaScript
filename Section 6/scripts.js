let scoreZero = document.getElementById("score--0");
let scoreOne = document.getElementById("score--1");
let diceElement = document.querySelector(".dice");
let newGameBtn = document.querySelector(".btn--new");
let holdBtn = document.querySelector(".btn--hold");
let rollBtn = document.querySelector(".btn--roll");
let currentZeroEl = document.getElementById("current--0");
let currentOneEl = document.getElementById("current--1");
diceElement.classList.add("hidden");
scoreZero.textContent = 0;
scoreOne.textContent = 0;


rollBtn.addEventListener("click", function () {
    let diceRoll = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove("hidden");
    diceElement.src = `${diceRoll}.png`;

    if (diceRoll !== 1) {
        currentZeroEl.textContent = diceRoll;
    } else {
        document.getElementById("current--0").textContent = 0;
    }

});