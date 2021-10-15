
const fs = require('fs');

const promise = new Promise((resolve, reject) => {
    fs.readFile("testo.txt", "utf-8", (err, content) => {
        if(err){
            reject(err);
        }
        else {
            resolve(content);
        }
    })
});

promise
    .then((content) => {
        console.log("Contenuto del file:", content);
        return content.split(" ");
    })
    .then(splitted => {
        console.log("splitted", splitted);
        return splitted.slice(0, 10);
    })
    .catch(error => {                                               // se anche solo un processo fallisce, il tutto termina con catch
        console.error("Promise ha generato un errore", error);
        return [];
    })
    .then(array => {                             // in base a ciò che avviene prima, lavora sul array risultante
        if(array.length == 0) {
            throw new Error("Errore ultima then");
        }
        else {
            console.log("Le prime 10 parole:", array);
        }
    })
    .catch(error => {
        console.error("Ultima catch errore", error);
    })
;







