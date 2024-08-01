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
