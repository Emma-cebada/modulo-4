const lodash = require('lodash');

const students = [
  {
    name: 'Sofía',
    promo: 'k'
  },
  {
    name: 'María',
    promo: 'l'
  },
  {
    name: 'Lucía',
    promo: 'j'
  },
  {
    name: 'Julia',
    promo: 'l'
  }
];

console.log(lodash.sortBy(students, ["promo", "name"]));