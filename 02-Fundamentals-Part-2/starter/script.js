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
const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991]