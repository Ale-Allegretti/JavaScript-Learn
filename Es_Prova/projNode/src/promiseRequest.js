
const readline = require("readline");

const scanner = readline.createInterface({
    input: process.stdin,              
    output: process.stdout
});


// new Promise((resolve, reject) => {
//         scanner.question("Come ti chiami? ", (answer) => {
//             resolve(answer);
//         });
//     })
//     .then(risposta => {
//         console.log("risposta", risposta);
//         new Promise((resolve, reject) => {
//             scanner.question("Quanti anni hai? ", (answer) => {
//                 resolve(answer);
//             });
//         })
//     })
//     .then(risposta2 => {
//         console.log("Anni:", risposta2);
//     })
//     .then(() => {
//         scanner.close();
//     })
// ;


// ancora più comodo implementare il tutto in una funzione esterna

const readline = require('readline');

const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const richiediDomanda = (domanda) => {
    return new Promise((resolve, reject) => {
        scanner.question(domanda, (answer) => {
            resolve(answer);
        });
    });
}

// m.agostino@esis-italia.com

// const start = async () => {

// }

async function start() {
    try {
        let risposta = await richiediDomanda("Come ti chiami?\n");
        console.log("risposta", risposta);

        let risposta2 = await richiediDomanda("Quanti anni hai?\n");
        console.log("Risposta2", risposta2);
    } catch (error) {
        console.error("La promise ha lanciato un errore");
    } finally {
        return true;
    }
}

start()
    .then(result => {
        if (result) {
            scanner.close();
        }
    });


// richiediDomanda("Come ti chiami?\n")
//     .then(risposta => {
//         console.log("risposta", risposta);
//         return richiediDomanda("Quanti anni hai?\n");
//     })
//     .then(risposta2 => {
//         console.log("risposta2", risposta2);
//         return richiediDomanda("Di dove sei?\n");
//     })
//     .then(risposta3 => {
//         console.log("risposta3", risposta3);
//     })
//     .then(() => {
//         scanner.close();
//     })
//     .catch(error => {
//         scanner.close();
//     });



    