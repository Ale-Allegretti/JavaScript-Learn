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

const tentativi = 5;
const numeroRandom = Math.round(Math.random() * 100);

console.log("Ho pensato ad un numero. Indovina qual è!", `Ho pensato a (${numeroRandom})`);

const richiediDomanda = (suggerimento, tentativi) => {
    return new Promise((resolve, reject) => {
        if(!suggerimento) {
            suggerimento = "";
        }
        scanner.question(`Indovina il numero. Restano ${tentativi} tentativi. ${suggerimento}\n`, (answer) => {
            const answerNumber = Number(answer);
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
        case 'maggiore':
            return ("Il numero che ho pensato è maggiore della tua risposta.");
        case 'minore':
            return ("Il numero che ho pensato è minore della tua risposta.");
    }
}


const start = async (tentativi) => {
    try {
        let suggerimento = "";
        do {
            let risposta = await richiediDomanda(suggerimento, tentativi);
            if(risposta == 'indovinato') {
                return true;
            }
            else {
                tentativi--;
                suggerimento = gestisciRisposta(risposta);
            }
        } while(tentativi > 0);
        return false;
    } catch (error) {
        throw error;
    }

}

start(tentativi) 
    .then(result => {
        if(result) {
            console.log("Numero indovinato. Complimenti!");
        }
        else {
            console.log("Numero tentativi esaurito. Il numero era", numeroRandom);
        }
        scanner.close();
    })
    .catch(error => {
        console.error(error);
        scanner.close();
    })
