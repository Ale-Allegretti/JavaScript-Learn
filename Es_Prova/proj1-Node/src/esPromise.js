
const readline = require("readline");

const scanner = readline.createInterface({
    input: process.stdin,              
    output: process.stdout
});

let tentativi = 5;
const numRandom = Math.round(Math.random() * 100);

console.log("Ho pensato ad un numero. Indovina quale!")

/**
 * L'algoritmo è errato in quanto viene usata una promise ricorsivamente
 * e inserendo un numero errato e poi quello corretto, si blocca non chiudendo
 * il processo
 * 
 */

const richiediDomanda = (suggerimento) => {                
    return new Promise((resolve, reject) => {
        scanner.question(`Indovina il numero. ${suggerimento} Restano ${tentativi} tentativi. Inserisci: `, (answer) => {
            if(isNaN(answer)) {
                console.error("Inserire un numero valido");
                richiediDomanda(suggerimento);
            }
            else {
                tentativi--;
                if(numRandom == answer && tentativi > 0) {
                    resolve(answer);
                }
                else if(tentativi == 0) {
                    reject(new Error("Nessuna risposta data. Tentavi esauriti"));
                }
                else if(tentativi > 0) {
                    console.log("Numero errato, riprova! Tentativi rimasti:", tentativi);
                    richiediDomanda(domanda);
                }
            }
        });
    });
}

let domanda = `Il numero si aggira tra ${numRandom-10} e ${numRandom+10}.`;
richiediDomanda(domanda)
    .then(risposta => {
        console.log(`Risposta ${risposta} esatta!`);
        scanner.close();
    })
    .catch(error => {
        console.error(error);
        scanner.close();
    })
;