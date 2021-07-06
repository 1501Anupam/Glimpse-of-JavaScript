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