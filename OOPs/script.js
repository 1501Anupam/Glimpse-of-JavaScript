const Person = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
};

const Jonas = new Person('jonas', 1991);
console.log("This method is depicting construction function", Jonas);
console.log(Jonas instanceof(Person));

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Jonas.calcAge();
console.log(Person.prototype);
console.log(Jonas.__proto__);

Person.prototype.species = 'Homo Sapiens';

console.log(Jonas.hasOwnProperty('firstname'));
console.log(Jonas.__proto__.__proto__);

const arr = [1, 1, 3, 2, 1, 2, 3];

Array.prototype.unique = function () {
  return [...new Set(arr)];
};

console.log(arr.unique());
const h3 = document.querySelector('h3');
console.log(h3);
console.dir(h3);

//Coding challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(this.make + ' going at speed of ' + this.speed + ' km/h');
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log("Accelerated speed of " + this.make + " is " + this.speed);

};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log("Speed after applying the brakes on " + this.make + " is " + this.speed);
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 150);

car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();


//ES6 classes

class PersonCl {
  constructor(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const Jessica = new PersonCl('Jessica', 1998);
console.log(Jessica);
Jessica.calcAge();

//We use getters and setters mostly when we need to put some validation on the properties that already exists like firstname.

class Walt {
  constructor(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  }

  //this is an instance method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  //this is a static method
  static hey() {
    console.log('Hey there!');
  }

  set firstname(name) {
    if (name.includes(' ')) {
      this._firstname = name;
    } else {
      alert("Name is not a full name!");
    }
  }

  get firstname() {
    return this._firstname;
  }
}

const Disney = new Walt('Walt Disney', 1978);
console.log(Disney);
Disney.firstname = 'James Disney';
console.log(Disney);
// Disney.hey(); Not valid with objects
Walt.hey(); //Valid with Class constructor only


//Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  anyfunctionName(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  }
}

const James = Object.create(PersonProto); //Creates the prototype

James.anyfunctionName('James Austin', 1987);
James.calcAge();
console.log(James);

//Coding challenge 2

class Ford {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(currentSpeed) {
    this.speed = currentSpeed * 1.6;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log("Accelerated speed of " + this.make + " is " + this.speed);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log("Speed after applying the brakes on " + this.make + " is " + this.speed);
  }
}

const ford = new Ford('Ford', 120);
ford.accelerate();
ford.brake();
console.log(ford);
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);