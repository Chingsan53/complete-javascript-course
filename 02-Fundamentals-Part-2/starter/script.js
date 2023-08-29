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

console.log(typeof jonasArray);
console.log(typeof jonas);