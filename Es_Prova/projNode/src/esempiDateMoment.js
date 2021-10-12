
const { months } = require('moment');
const moment = require('moment');

let ora = moment();

console.log(ora.get("months"));     // ricava il valore desiderato tramite stringa

let momentOra = moment(ora.toDate());
console.log(momentOra);

console.log(ora.format("dddd DD MMMM YYYY"));     // ricavare dal sito tutti i formati desiderati

// let dataParse = moment("2021-10-05T15:37:12+02:00")  

ora.add(1, "months");
console.log(ora.format("dddd DD MMMM YYYY"));
ora.add(-1, "months");
console.log(ora.format("dddd DD MMMM YYYY"));


