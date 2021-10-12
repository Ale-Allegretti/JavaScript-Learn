
const { fstat } = require("fs");
const readline = require("readline");
const fs = require('fs');
const { rejects } = require("assert");

let rl = readline.createInterface({
    input: process.stdin,               // corrispondono ai system.out/in
    output: process.stdout
});


rl.question("Come ti chiami? ", (answer) => {       // gestione di domanda e risposta ASINCRONA
    console.log("Ciao", answer);                        // cioè in attesa di una risposta dall'utente (CALLBACK)
    rl.question("Quanti anni hai? ", (answer) => {
        console.log("Hai", answer, "anni");
        rl.question("Di dove sei? ", (answer) => {
            console.log("Sei di", answer);
            rl.close();
        })
    })
})

fs.readFile("testo.txt", "utf-8", (err, fileContent) => {       
    if(err){
        console.error("File non trovato", err);
        process.exit();
    }
    console.log("Contenuto del file:", fileContent);
});

/**
 * Questo innesto di callback renderebbe il codice molto confusionario
 * senza innesto il tutto viene eseguito nello stesso momento o quasi
 * 
 * la soluzione è creare funzioni per ogni callback oppure usare le PROMISE
 */
 

 const readline = require("readline");
 const fs = require('fs');
 
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 const chiediNome = (answer) => {
     console.log("Ciao", answer);
     rl.question("Quanti anni hai?", chiediEta);
 };
 
 const chiediEta = (answer) => {
     console.log("Hai", answer, "anni");
     rl.question("Di dove sei?", chiediCitta);
 };
 
 const chiediCitta = (answer) => {
     console.log("Sei di ", answer);
     rl.close();
 };
 
 const gestisciLetturaFile = (err, fileContent) => {
     if (err) {
         console.error(err);
         process.exit();
     }
     console.log("Contenuto del file", fileContent);
     rl.question("Come ti chiami?\n", chiediNome);
 };
 
 console.log("fs", fs);
 
 fs.readFile("testo.txt", "utf-8", gestisciLetturaFile);
 
 fs.readFile("testo.txt", "utf-8", (err, fileContent) => {
     if (err) {
         console.error(err);
         process.exit();
     }
     console.log("Contenuto del file", fileContent);
 
 
     // Eseguire il codice qui dentro
 
     rl.question("Come ti chiami?\n", (answer) => {
         console.log("Ciao", answer);
 
         rl.question("Quanti anni hai?\n", (answer) => {
             console.log("Hai", answer, "anni");
 
             rl.question("Di dove sei?\n", (answer) => {
                 console.log("Sei di", answer);
 
                 rl.close();
             });
 
         });
 
     });
 
 });