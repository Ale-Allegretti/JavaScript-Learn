
let variabili = process.argv;


/**
 * process riguarda principalmente node
 * argv recupera gli argomenti che scrivono su riga di comando:
 * node processvar.js argomento1 argomento2
 * 
 */


let lung = variabili.length;
// console.log(variabili);
console.log("La lunghezza del array è " + (lung - 2));

if(lung > 5) {
    console.error("Inserire al massimo 3 parametri");
}
else {
    for(let i = 2; i < lung; i++) {
        let temp = Number(variabili[i]);
        if(isNaN(temp)) {
            console.error(`Il valore "${variabili[i]}" non è un numero`);
        }
        else if(temp % 2 == 0) {
            console.log(`Il numero ${variabili[i]} è pari`);
        }
        else {
            console.log(`Il numero ${variabili[i]} è dispari`);
        }
    }
}

let fattoriale = 1;
for(let i = variabili[2]; i > 0; i--) {
    fattoriale = fattoriale * i;
}
console.log(fattoriale);

