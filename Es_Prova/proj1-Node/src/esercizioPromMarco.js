/*
    Scrivere un programma che genera un numero random tra 0 e 100 e
    l'utente deve cercare di indovinarlo in un massimo di 5 tentativi.

    Ad ogni risposta, controllare:
    - Se la risposta è corretta, interrompere l'esecuzione e comunicarlo
    - Se la risposta non è corretta, dare un suggerimento (Sto pensando a un numero più grande/piccolo)
*/

const readline = require("readline");
const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tentativi = 5;
const numeroRandom = Math.round(Math.random() * 100);

console.log("Ho pensato ad un numero. Indovina qual è!", `Ho pensato a (${numeroRandom})`);

const richiediDomanda = (suggerimento) => {
    return new Promise((resolve, reject) => {
        if(!suggerimento) {
            suggerimento = "";
        }
        scanner.question(`Indovina il numero. Restano ${tentativi} tentativi. ${suggerimento}\n`, (answer) => {
            const answerNumber = Number(answer);
            --tentativi;
            if(tentativi == 0) {
                reject(new Error("Non sei riuscito a indovinare!"));
            }
            if (answerNumber == numeroRandom) {
                // L'utente ha indovinato
                resolve("indovinato");
            } else {
                // Controllare se il numero è maggiore o minore e dare un suggerimento all'utente
                if (answerNumber > numeroRandom) {
                    // Numero è più piccolo
                    resolve("minore");
                } else {
                    // Numero è più grande
                    resolve("maggiore");
                }
            }
        });
    });
}

const gestisciRisposta = (risposta) => {
    switch (risposta) {
        case 'indovinato':
            throw new Error("Hai indovinato!");
        case 'maggiore':
            return richiediDomanda("Il numero che ho pensato è maggiore della tua risposta.");
        case 'minore':
            return richiediDomanda("Il numero che ho pensato è minore della tua risposta.");
    }
}



richiediDomanda()
    .then(gestisciRisposta)
    .then(gestisciRisposta)
    .then(gestisciRisposta)
    .then(gestisciRisposta)
    .then(gestisciRisposta)
    .then(() => {
        scanner.close();
    })
    .catch(error => {
        console.error(error.message);
        scanner.close();
    });
