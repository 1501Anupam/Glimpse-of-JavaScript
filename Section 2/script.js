// Coding Challenge 1
'use strict'

const avgScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const averageScoreOfDolphins = avgScore(44, 23, 71);
const averageScoreOfKoalas = avgScore(65, 54, 49);

console.log(averageScoreOfDolphins, averageScoreOfKoalas);

const checkWinner = function (averageScoreOfDolphins, averageScoreOfKoalas) {
    if (averageScoreOfDolphins >= 2 * averageScoreOfKoalas) {
        console.log(`Dolphins Won! ${averageScoreOfDolphins} vs ${averageScoreOfKoalas}`);
    } else if (averageScoreOfKoalas >= 2 * averageScoreOfDolphins) {
        console.log("Koalas won!")
    } else {
        console.log("No team won!");
    }
}
checkWinner(averageScoreOfDolphins, averageScoreOfKoalas);
checkWinner(112, 30);
