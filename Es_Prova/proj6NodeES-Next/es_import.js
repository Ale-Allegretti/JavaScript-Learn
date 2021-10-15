

import{ somma, name as nameImport } from './modulo.js';
import moment from 'moment';

console.log("La somma di 3+6: ", somma(3, 6));

console.log("Il nome presente è: ", nameImport);

console.log("Oggi è il", moment().toDate());