class Persona {
    nome;
    cognome;
    email;

    constructor(nome, cognome, email) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
    }

    fullName() {
        return `${this.nome} ${this.cognome}`;
    }

    get nome() {
        return this.nome;
    }

    set nome(newName) {
        this.nome = newName;
    }
}

let p = new Persona("Marco", "Agostino", "m.agostino@esis-italia.com");

p.nome = "Mario";

console.log(p);

let { nome, email } = p;

console.log("nome", nome);
console.log("email", email);

function destr({ nome, email }) {
    console.log("nome", nome, "email", email);
}

destr(p);

let arrayNumeri = [1, 2, 3, 4, 5, 6];
let [first, second] = arrayNumeri;

console.log({
    first,
    second: second
});

let cane = {
    nome: "Fido",
    razza: "Pastore tedesco",
    eta: 3
};

let animale = {
    eta: 10,
    citta: "Roma"
};

let caneAnimale = {
    ...cane,
    ...animale,
    sesso: "Maschio",
    stampaNome: function() {
        console.log(this.nome);
    },
    stampaNomeFA: () => {
        console.log(this.nome);
    }
};

console.log(caneAnimale);
console.log(caneAnimale.stampaNome());
// console.log(caneAnimale.stampaNomeFA());


let newArray = [...arrayNumeri, 40, 22, 663];
