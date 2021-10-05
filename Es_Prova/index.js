
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