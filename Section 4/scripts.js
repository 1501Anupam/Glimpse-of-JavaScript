let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0

document.querySelector(".again").addEventListener("click", function () {
    // location.reload();
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#110f7f";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";

});

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess);
    if (!guess) {
        document.querySelector(".message").textContent = "❌ No number";
    } else if (guess === secretNumber) {
        document.querySelector("body").style.backgroundColor = "#377f0f";
        document.querySelector(".number").style.width = "20rem";
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "🔥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});