"use strict"

// Coding Challenge 1

const temp1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp2 = [13, -2, 6, 1, 'error', 9, 13, 17, -5, 14, -9, 15];

let amplitude = function (temp) {
    let max = temp[0];
    let min = temp[0];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === 'error') {
            continue;
        }
        if (temp[i] > max) {
            max = temp[i];
        }
        if (temp[i] < min) {
            min = temp[i];
        }
    }
    console.log(`Amplitude is max ${max} - min ${min} which is ${max - min}`);
    return max - min;
}

console.log(amplitude(temp1.concat(temp2)));

// Coding Challenge 2

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `...${arr[i]}°C in ${i+1} days `;
    }
    console.log(str);
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));