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
const bills = [125, 555, 44];
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
const Joey = {
    firstname: "Joey",
    lastname: "Tribyani",
    birthYear: 1990,
    job: "Actor",
    friends: ["Chandler", "Phoebe", "Monica", "Rachel", "Ross"],
    calcAge: function () {
        return 2037 - this.birthYear;
    },
    hasDriverLicense: false,
    theSummary: function () {
        return `${this.firstname} is ${this.calcAge()}-years old and is an ${this.job} and ${this.hasDriverLicense?'has': 'has no'} driver's license`
    }
};
if (Joey.hasDriverLicense) {
    console.log(`${Joey.firstname} is ${Joey.calcAge()}-years old and is an ${Joey.job} and has a driver's license`);
} else {
    console.log(`${Joey.firstname} is ${Joey.calcAge()}-years old and is an ${Joey.job} and has no driver's license`);

}

console.log(`${Joey.firstname} has ${Joey.friends.length} friends and his best friend is ${Joey.friends[0]}`);
console.log(Joey.theSummary());

//Coding Challenge 3

const mark = {
    fullName: "Mark Smith",
    height: 1.69,
    weight: 75,
    calcBMI: function () {
        return this.weight / (this.height ** 2);
    }
};
const Peter = {
    fullName: "Petre Smith",
    height: 1.95,
    weight: 95,
    calcBMI: function () {
        return this.weight / (this.height ** 2);
    }
};
if (mark.calcBMI() > Peter.calcBMI()) {
    console.log(`Mark Smith's BMI is ${mark.calcBMI()} and is higher than Peter's BMI ${Peter.calcBMI()}`);
} else if (mark.calcBMI() < Peter.calcBMI()) {
    console.log(`Mark Smith's BMI is ${mark.calcBMI()} and is higher than Peter's BMI ${Peter.calcBMI()}`);
}

// Coding Challenge 4
const billValue = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.20 * bill;
}

for (let i = 0; i < billValue.length; i++) {
    tips.push((calcTip(billValue[i])));
    totals.push(tips[i] + billValue[i]);
}

console.log(tips);
console.log(totals);


// BONUS Question
let arr = [10, 8, 34, 76, 987, 23, 654, 67];

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(calcAverage(arr) / arr.length);