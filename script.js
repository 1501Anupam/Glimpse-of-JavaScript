// Coding Challenge 1

const marksWeight = 78;
const marksHeight = 1.69

const johnsWeight = 92;
const johnsHeight = 1.95

let bmiOfMark = marksWeight / (marksHeight ** 2);
let bmiOfJohn = johnsWeight / (johnsHeight ** 2);
console.log(bmiOfMark, bmiOfJohn);
let markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`The BMI of Mark is higher than John's`);
    console.log(`BMI of Mark is ${bmiOfMark}`);
} else {
    console.log(`The BMI of John is higher than Mark's`);
    console.log(`BMI of John is ${bmiOfJohn}`);
}


// Coding Challenge 2

let dolphinsAvgScore = (96 + 108 + 89) / 3;
let koalasAvgScore = (88 + 91 + 110) / 3;
let dolphinsBonusScore = (97 + 112 + 101) / 3;
let koalasBonusScore = (109 + 95 + 123) / 3;
let dolbon2 = (97 + 112 + 101) / 3;
let koalbon2 = (109 + 95 + 106) / 3;

console.log(dolphinsAvgScore, koalasAvgScore);
console.log(dolphinsBonusScore, koalasBonusScore);
console.log(dolbon2, koalbon2);

if (dolphinsAvgScore == koalasAvgScore) {
    console.log("Match is draw!");
} else if (dolphinsAvgScore > koalasAvgScore) {
    console.log("Dolphins won!");
} else if ((dolphinsAvgScore == koalasAvgScore) && (dolphinsAvgScore >= 100) && (koalasAvgScore >= 100)) {
    console.log("Both the teams won the trophy");
} else {
    console.log("Koalas won!");
}

if ((dolphinsBonusScore >= 100) && (dolphinsBonusScore > koalasBonusScore)) {
    console.log("Dolphins won the BONUS 1");
} else if ((koalasBonusScore >= 100) && (dolphinsBonusScore < koalasBonusScore)) {
    console.log("Koalas won the BONUS 1");
} else if ((dolphinsBonusScore == koalasBonusScore) && (dolphinsBonusScore >= 100) && (koalasBonusScore >= 100)) {
    console.log("Both the teams won the BONUS 1");
} else {
    console.log("Non of the team won BONUS 1")
}

if ((dolbon2 >= 100) && (dolbon2 > koalbon2)) {
    console.log("Dolphins won BONUS 2");
} else if ((koalbon2 >= 100) && (dolbon2 < koalbon2)) {
    console.log("Koalas won the BONUS 2");
} else if ((dolbon2 == koalbon2) && (dolbon2 >= 100) && (koalbon2 >= 100)) {
    console.log("Both the teams won the BONUS 2");
} else {
    console.log("Non of them won the BONUS 2");
}

// Coding Challenge 3
let day = 'Wednesday';
if (day === 'Monday') {
    console.log("It's Monday!");
} else if (day === 'Tuesday') {
    console.log("It's Tuesday!");
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log("It's two days!");
} else if (day === 'Friday') {
    console.log("It's Friday!");
} else if (day === 'Saturday') {
    console.log("It's Saturday!");
} else {
    console.log("It's not a valid day!");
}

switch (day) {
    case 'Monday':
        console.log("It's Monday!");
        break;
    case 'Tuesday':
        console.log("It's Tuesday!");
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log("It's two days!");
        break;
    case 'Friday':
        console.log("It's Friday!");
        break;
    case 'Saturday':
        console.log("It's Saturday!");
        break;
    default:
        console.log("It's not a valid day!");

}

// Coding Challenge 4
let billValue = 275;
let tip;

((billValue >= 50) && (billValue <= 300)) ? (tip = billValue * 0.15) : (tip = billValue * 0.20);
console.log(`The bill value is ${billValue}, the tip is ${tip} and the final value is ${billValue+tip}`);
