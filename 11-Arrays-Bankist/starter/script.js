'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const html = ``;
  });
};
displayMovements(account1.movements);

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());
console.log([...arr]);

// SPLICE - Mutate the OG array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE - Mutate the OG array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
//Similarly
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

// at any position
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// Last element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1));
console.log(arr3);
// Count from last element
console.log(arr3.at(-1));
console.log(arr3.at(-2));

// Loop using FOREACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('------ FOREACH Method -------');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// FOREACH Map and Set
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// MAP
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

const euroToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}

console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`;
  // }
);
console.log(movementsDescription);

// Create user name
//const user = 'Steven Thomas Williams'; // stw
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
  });
};

createUsername(accounts);
console.log(accounts);

let currentAccount;
currentAccount = accounts.find(acc => acc.owner === inputLoginUsername.value);
console.log(currentAccount);

// Filter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// const withdrawals = [];
// for (const mov of movements) if (mov < 0) withdrawals.push(mov);
// console.log(withdrawals);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

// Similarly
let balance2 = 0;
// let sum = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Arrow function similar to SNOWBALL above
const balance3 = movements.reduce((acc, cur, i, arr) => acc + cur);
console.log(balance3);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
  console.log(`Display Balance: ${balance}`);
};

calcDisplayBalance(account1.movements);
calcDisplayBalance(account2.movements);
calcDisplayBalance(account3.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`;
  console.log(incomes);

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}`;
  console.log(out);

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  console.log(interest);
};

calcDisplaySummary(account1.movements);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(`The maximum deposit value: ${max}`);

// Minimum value
const min = movements.reduce((acc, mov) => {
  if (acc < mov) return acc;
  else return mov;
});

console.log(`The minimum deposit value: ${min}`);

const totalDeopositsUSD = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => mov * euroToUsd)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDeopositsUSD);

// Coding Challenge #3
console.log('-------- Coding Challenge 3');

//Rewrite the 'calcAverageHumanAge' function from the pervious challenge, but this time as an arrow function, and using chaining

//Test Data 1: [5, 2, 4, 1, 15, 8, 3];
//Test Data 2: [16, 6, 10, 5, 6, 1, 4];
/*
const calcAverageHumanAge = function (humanAge) {
  const age = humanAge.map(a => (a + a) / a.length).reduce((h, a) => h + a, 0);
  console.log(age);
};
const human1 = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(human1);
*/

// Find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
const firstDeposit = movements.find(mov => mov > 0);
console.log(firstDeposit);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// findIndex Method
// if (
//   inputCloseUsername.value === currentAccount.username &&
//   Number(inputClosePin.value) === currentAccount.pin
// ) {
//   accounts.splice(index, 1);
// }

// Eqaulity
console.log(movements);
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flatMap and flat
const arr4 = [[1, 2, 3], [4, [5, 6]], 7, 8];
console.log(arr4.flat());

const arrDeep = [
  [[1, 2], 3],
  [4, [5, 6], 7, 8],
];

console.log(arrDeep);
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// Sorting Method

const owners = ['Jonas', 'Ching', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort());

// Ascending
// return < 0, a, b (keep order)
// return >0, B, A (switch order)
/*
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);
*/

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
/*
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);
*/

movements.sort((a, b) => b - a);
console.log(movements);

// More way of create an array or filling
const x = new Array(7);
console.log(x);
x.map(() => 5);
console.log(x);

// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI);

// 23 Array methods
