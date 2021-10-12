
const fs = require('fs');

const contenuto = fs.readFileSync("testo.txt", "utf-8");
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;



console.log(contenuto);

let splitter = contenuto.split(" ");
let result = [];

for(let word in splitter) {
    result[word] = splitter[word].toLowerCase().replace(regex, '')
    .replace(/[\n\r]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

}


let risultato = {} ;

for(let word of result) {
    if(!risultato[word]) {          // se la proprietà di oggetto non è stato già istanziato
        risultato[word] = 1;        // allora lo crea, sennò incrementa
    }
    else {
        risultato[word]++;
    }

    // let save = `La parola "${word}" appare ${count} volta/e`;
    // alternativa writeFileSync(...)
    // fs.appendFileSync("nuovaFile.txt", (save + "\n"), "utf-8");
}

console.log(risultato);



let oggettoJSON = JSON.stringify(risultato);

fs.writeFileSync("risultato.json", oggettoJSON, "utf-8");

let json = JSON.parse("{\"nome\": \"Alessandro\"}");

console.log(json);





