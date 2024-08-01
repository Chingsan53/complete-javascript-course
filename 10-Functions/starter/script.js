'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 1, 299);
createBooking('LH123', 2, 599);
createBooking('LH125', 2);
console.log(bookings);

/*
const flight = 'LH234';
const chingsan = {
  name: 'Chingsan Ly',
  passport: 24738388282,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24738388282) {
    alert('Check in');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, chingsan);
// console.log(flight);
// console.log(chingsan);

// const flightNum = flight;
// const passenger = chingsan;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(chingsan);
checkIn(flight, chingsan);
*/

// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  // console.log('👋');
};
document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Chingsan');

// The call and apply Methods
const asiana = {
  airline: 'Asiana',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

asiana.book(239, 'Chingsan');
asiana.book(899, 'Chingsien');
console.log(asiana);

const delta = {
  airline: 'Delta',
  iataCode: 'DT',
  bookings: [],
};

const book = asiana.book;
// console.log(typeof book);
// Does not work
// book(23, 'Sarah Williams');

book.call(delta, 23, 'Sarah Williams');
console.log(delta);

book.call(asiana, 239, 'Chingsan Ly');
console.log(asiana);
console.log(asiana.bookings);

const korean = {
  airline: 'Korean Air',
  iataCode: 'KR',
  bookings: [],
};

book.call(korean, 583, 'Mary Cooper');
console.log(korean);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(korean, flightData);
console.log(korean);

book.call(korean, ...flightData);

// Bind Methods
const bookDT = book.bind(delta);
const bookAN = book.bind(asiana);
const bookKR = book.bind(korean);
bookDT(23, 'Steven Liu');
bookAN(43, 'Mario Liu');

const bookDT34 = book.bind(delta, 34);
bookDT34('David Hackathon');
bookDT34('Joana Lee');

// With Event Listeners
asiana.planes = 300;
asiana.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
asiana.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', asiana.buyPlane.bind(asiana));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

// Similarly =>
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// IIFE
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);
(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);

// Closures
// A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.
// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place;
// A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
