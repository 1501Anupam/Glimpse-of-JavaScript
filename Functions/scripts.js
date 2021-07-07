//Default parameters

bookings = [];

const bookFlight = function (flightName, numOfPassengers = 1, price = numOfPassengers * 30) {
    // ES5
    // numOfPassengers = numOfPassengers || 1;
    // price = price || 199;
    // ES6 we will add the default values in formal parameters itself

    flight = {
        flightName,
        numOfPassengers,
        price
    };
    console.log(flight);
    bookings.push(flight);
}

bookFlight('AH123', 10, 300);
console.log(bookings);
bookFlight('AH123', 12); // Starting 2 params will passed and last param will use default value
console.log(bookings);
bookFlight('AH123', undefined, 300); //If we want to skip a parameter in between then we need to set it undefined
console.log(bookings);


//JS call by value and pass the reference not pass by reference

flightNum = 'CFR8577';

const personPassport = function (flightNum, Person) {
    flightNum = 'AH2321';
    console.log(flightNum);
    Person.passportNum = 86238468325;
    console.log(flightNum, Person);
    if (Person.passportNum === 86238468325) {
        alert("Checked In");
    } else {
        alert("wrong details");
    }
}

Person = {
    passportNum: 2124324534,
    name: "Jonas",
    age: 32
};

personPassport(flightNum, Person);

console.log(Person);
console.log(flightNum);

const CheckedIn = function (Person) {
    if (Person.passportNum === 2124324534) {
        alert("Checked In");
    } else {
        alert("Wrong details!", Person.passportNum);
    }
}

CheckedIn(Person);
console.log(Person.passportNum);