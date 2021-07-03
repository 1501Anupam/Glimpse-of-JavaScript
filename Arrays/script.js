function calcTip(billAmt) {
    if (billAmt > 50 && billAmt < 300) {
        tip = 0.15 * billAmt;
        return tip;
    } else {
        tip = 0.20 * billAmt;
        return tip;
    }
}

bills = [125, 555, 44];
tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("here is the tip" + tip);

total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log("Here is the total" + total);