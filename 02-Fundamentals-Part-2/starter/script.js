/*
================================================
'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive');

const interface = 'Audio';
================================================
*/



/*
================================================

//Function

function logger() {
    console.log('My name is Ching');
}

//Calling / running / invoking function
//logger();
//logger();
//logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//fruitProcessor(5, 0);
let appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

================================================
*/


/*
================================================

// TOPIC: Function declaration

const now = 2023;
function calcAge1(birthYear) {
    return age = `My age is ${now - birthYear} years old`;
}
const age1 = calcAge1(1998);
console.log(calcAge1(1998));
console.log(age1);


//function expression
const calcAge2 = function (birthYear) {
    return age = `My age is ${now - birthYear} years old`;
}

const age2 = calcAge2(1998);
console.log(age1, age2);

================================================
*/

/*
================================================

// TOPIC: Arrow Function
let now = 2023;
//let birthYear = 1998;
const calcAge2 = function (birthYear) {
    return now - birthYear;
}

const calcAge3 = birthYear => now - birthYear;

console.log(calcAge3(1998));

// Arrow function with more calculation
const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 70 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1998));

// Arrow function with multiple parameter (2 param)
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 70 - age;
    return `${firstName} has ${retirement} more years to retire.`;
}

console.log(yearsUntilRetirement2(1998, 'Chingsan'));

================================================
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const now = 2023

// Function to cal calcAge
const calcAge = function (birthYear) {
    return now - birthYear;
}

// Function to cal calcRetirement
const calcRetirement = function (age) {
    return 70 - age;
}

// Main function
const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    //const age = 2023 - birthYear;
    const retirement = calcRetirement(age);
    //const retirement = 70 - age;

    return `${firstName} has ${retirement} more years to retire.`;
}

console.log(yearsUntilRetirement2(1998, 'Ching'));

*/


/*
//Challenge solution

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoala = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoala);

const findWinner = (scoreDolphins, scoreKoala) => {
    if (scoreDolphins > scoreKoala)
        console.log(`Dolphins win (${scoreDolphins}) vs. (${scoreKoala}).`);
    else
        console.log(`Koala win (${scoreKoala}) vs. (${scoreDolphins}).`);
}
findWinner(scoreDolphins, scoreKoala);
*/


/*
//Array

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

const years = new Array(1990, 1991, 1992, 1993);
//const years = [1990, 1991, 1992, 1993];
console.log(years);

//random access of the arrays
console.log(`friends - 1st element of the array start from 0 is ${friends[0]}`);
console.log(`years - 2nd element of the array start from 0 is ${years[1]}`);

//length
console.log(friends.length);
//Last element
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);


const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
//years = [1991, 1992, 1993, 1994, 1995];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
// Array operation
const friends = ['Michael', 'Steven', 'Peter'];

//push to the end
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

//push to the start
friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last 
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven')); // Index

console.log(friends.includes('Steven')); // Check if the element is in the array or not
console.log(friends.includes('Bob'));

if (friends.includes('Steven'))
    console.log(`You have a friend named Steven`);
else
    console.log(`You don't have a friend name Steven`);
*/


/*
// Challenge #2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tip);

let i = 0;
while (i <= bills.length - 1) {
    const total = bills[i] + calcTip(bills[i]);
    console.log(`The total is $${total} includes $${calcTip(bills[i])} tip`);
    i++;
}
*/

/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonasArray);

console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

console.log(jonas.lastName);

const interestedIn = prompt('What do you want to know about me?');
console.log(jonas[interestedIn]);

if (jonas[interestedIn])
    console.log(jonas[interestedIn]);
else
    console.log('Wrong Request!');

jonas.location = 'Cambodia';
jonas['Facebook'] = 'ChingsanLy';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)

*/


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    calcAge: function () {
        return 2037 - this.birthYear;
    }
};

console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1991));