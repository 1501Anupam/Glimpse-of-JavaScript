const marksWeight = 78;
const marksHeight = 1.69

const johnsWeight = 92;
const johnsHeight = 1.95

let bmiOfMark = marksWeight / (marksHeight ** 2);
let bmiOfJohn = johnsWeight / (johnsHeight ** 2);
console.log(bmiOfMark, bmiOfJohn);
let markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);