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


//Coding challenge 2
const bills = [125, 555,44];
console.log(bills);
const calcBill = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}
const tip = [calcBill(bills[0]), calcBill(bills[1]), calcBill(bills[2])];
console.log(tip);

const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(total);
