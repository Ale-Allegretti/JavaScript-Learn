
// Appunti vari di JS

let numero = 100;

let templateString = `Buongiorno       
a 
tutti 
${numero}`;     // rispetta le righe e da la possibilità di inserire variabili in stringa 

console.log(templateString);



// i tipi primitivi sono gli unici a passare per valore
// il resto passa per riferimento (puntatori)

let oggetto = {
    nome: "Ale",
    cognome: "Allegretti"
} ;

console.log(oggetto.nome);
let oggetto2 = oggetto;
oggetto2.nome = "Marco";
console.log(oggetto.nome);     // quindi chiamato l'oggetto iniziale, stamperà il nome modificato tramite oggetto2


const costante = 100;
// costante = 200;  // errore

const objConst = {
    nome: "Ciao",
    nome2: "Tutti"
} ;

objConst.nome2 = "a Tutti";     //questa modifica è legit
// objConst = "ciao";     // errore



// Tre modi di chiamare una funzione:

function somma(a, b) {
    return a + b;
}

let sommaFunction = (a, b) => {     // fat arrow function
    return a + b;
}
let resultSommaF = sommaFunction(10, 5);

let returnAutomatico = (a, b) => a + b;     // simile ad un lambda, stessa function
let autoResult = returnAutomatico(10, 5);

let oggetto3 = {
    nome: "Ale",
    cognome: "Alleg",
    somma3: function(a, b) {
        return a + b;           // si può inserire anche dentro un oggetto
    },
    'nome-strano': "ciao",
    stampaNome: function() {
        console.log(`Il nome di questo oggetto è ${this.nome}`);
    }
}

oggetto3["nome-strano"];    // richiama la stringa corrispondente 

console.log(oggetto3.somma3(10, 30));




// esempio di oggetto simile a classe e costruttore:

function Persona(nome, cognome, email) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;

    this.stampaGeneralita = function() {
        console.log(this.nome + this.cognome + this.email);
    }
}

let p = new Persona("Alessandro", "Allegretti", "email@email.com");

p.stampaGeneralita();


if(oggetto3) {
    // se è stato valorizzato con assegnamento, entra nel if
}






// FOR EACH 

let array = [11, 21, 35, 48];

for (let index of array) {
    console.log(index);
}
for (let index in array) {
    console.log("index", index, "==> ", array[index]);
}
for (let key in oggetto3) {
    console.log("Proprietà", key, "==> ", oggetto3[key]);
}





// SWITCH CASE

let stringa = "";
switch (stringa) {      // senza il break eseguirebbe comunque tutti i casi dopo quello giusto
                        // per l'uso di più di case, come sotto
    case "+":
    case "somma": {
        //...
        break;
    }
    case "-":
    case "sottrazione": {
        //...
        break;
    }
    default: {
        break;
    }
}






// STRING REGEX

let ciaoMondoSub = ciaoMondo.substring(2, 6);
console.log("Substring(2, 6)", ciaoMondoSub, `Lunghezza ${ciaoMondoSub.length}`);

let ciaoMondoSubError = ciaoMondo.substring(2, 1000);
console.log("Substring(2, 1000)", ciaoMondoSubError, `Lunghezza ${ciaoMondoSubError.length}`);

let ciaoMondoSubstr = ciaoMondo.substr(2, 4);
console.log("Substr(2, 4)", ciaoMondoSubstr, `Lunghezza ${ciaoMondoSubstr.length}`);

let ciaoMondoSubstrError = ciaoMondo.substr(2, 1000);
console.log("Substr(2, 1000)", ciaoMondoSubstrError, `Lunghezza ${ciaoMondoSubstrError.length}`);

let replace = ciaoMondo.replace("Ciao", "Buongiorno");
console.log(replace);
let regex = /(ciao)+/img;
let regexObj = new RegExp("(ciao)+", "img");

regex.test(stringa);

console.log(stringa.replace(regex, "Buongiorno"));

let replaceAll = stringa.replaceAll("Ciao", "Buonasera");


console.log("ReplaceAll", replaceAll);

let messaggio = "Questo messaggio verrà spezzettato in tante stringhe";

let parole = messaggio.split(" ");

console.log("Split:", parole, parole.length);

let lettere = messaggio.split("");

console.log("Split:", lettere, lettere.length);






let ora = new Date();       // l'oggetto Date può essere inizializzato in diversi modi
console.log(ora);

// vedi schema metodi sulle date da slide







// ARRAY e vari metodi


let esArray = [];

esArray.push("A", "B", "C", "D");
console.log(esArray);

let eliminato = esArray.pop();
console.log("Ho eliminato " + eliminato);
console.log(esArray);

esArray.unshift("Z");
console.log(esArray);

eliminato = esArray.shift();
console.log("Ho eliminato " + eliminato);
console.log(esArray);

esArray = esArray.concat([1, 2], ["F"]);
console.log(esArray);

let nuovoArray = esArray.slice(0, 2);
console.log(nuovoArray);

esArray.splice(2, 2);
console.log(esArray);

console.log(esArray.join("-----"));

esArray.reverse();
console.log(esArray);






let numeri = [1, 4, 77, 2, -2];

let pari = numeri.filter((element, index, _self) => {       // _self corrisponde all'array stesso
    console.log(index, element);                            // che può essere utilizzato nella funzione stessa
    return element % 2 == 0;
});

console.log(numeri);
console.log(pari);


let numAlQuadrato = numeri.map(element => { 
    return element * element;
});

console.log(numAlQuadrato);



let oggettiNum = numeri.map(element => { 
    return {
        numero: element,
        pari: element % 2 == 0
    };
});

console.log(oggettiNum);

numeri.forEach(element => {
    console.log(element);
})



let trovato = numeri.find(element => {
    return element > 50;
})
console.log("Trovato >50 ->", trovato);

let indTrovato = numeri.findIndex(element => {
    return element > 50;
})
if (indTrovato >= 0 ) {
    console.log("Numero >50 ->", numeri[indTrovato]);
}
else {
    console.log("Nessun numero trovato");
}



let sommaArray = numeri.reduce((acc, element) => {      // lo 0 finale indica dove partire con la somma (indice)
    return acc + element;                               // in questo caso è un indice ma potrebbe essere qualsiasi elemento
}, 0);

console.log(sommaArray);

// da input posso ricevere un numero variabile di elementi (motivo dei ...)
const somme = (...input) => input.reduce((tot, el) => tot + el, 0);         // funzione generica



let maggioriZero = numeri.every(element => {
    return element > 0;
})
console.log("Numeri maggiori di 0? ", maggioriZero);

let almenoUnoMinoreZero = numeri.some(element => {
    return element < 0;
});
console.log("Almeno un numero minore di 0? ", almenoUnoMinoreZero);


let filtratoMap = numeri
    .map(element => {
        return element - 10;
    })
    .filter(element => {
        return element > 10;
    });
console.log(filtratoMap);


numeri.sort();      // modificando l'array sorgente
console.log(numeri);

numeri.sort((a, b) => {     // modifico il tipo di ordinamento
    return b - a;           
});
console.log(numeri);




// GESTIONE ERRORI

let oggettoNull;

try {
    console.log(oggettoNull);
} catch (error) {
    console.error(error);
}
console.log("Fine esecuzione");



// DESTRUTTURAZIONE 

let [first, second] = [1, 2, 3, 4, 5, 6];

console.log({
    first,              // possibile anche senza specificare come in second
    second: second,
    eta: 3
});


let cane = {
    nome: "Fido",
    razza: "Pastore tedesco"
};

let animale = {
    eta: 10,
    citta: "Roma"
};

let caneAnimale = {         // CONCANTENZAZIONE DI OGGETTI O ARRAY
    ...cane,
    ...animale,              // in questo caso eta viene sovrascritto!
    sesso: "Maschio",
    stampaNome: function() {
        console.log(this.nome);
    }
};

console.log(caneAnimale);
console.log(caneAnimale.stampaNome());

let arrayNumeri = [33, 64];
let newArray = [...arrayNumeri, 40, 22];

console.log(newArray);