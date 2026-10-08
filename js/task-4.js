'use strict';

//define function which take array of objects and return total balance by gender
const getTotalBalanceByGender = (users, gender) =>
  users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0);

//test array of objects
const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

//display results
console.log(getTotalBalanceByGender(clients, 'male'));
console.log(getTotalBalanceByGender(clients, 'female'));
