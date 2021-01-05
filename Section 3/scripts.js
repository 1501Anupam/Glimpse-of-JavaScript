"use strict"

const temp1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp2 = [13, -2, 6, 1, 'error', 9, 13, 17, -5, 14, -9, 15];

const amplitude = function (temp) {
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