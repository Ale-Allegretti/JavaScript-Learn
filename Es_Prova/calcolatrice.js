
const eseguiOperazione = (numero1, numero2, operazione) => {
    // console.trace("Trace di eseguiOperazione");
    switch(operazione) {
        case '+': {
            return numero1 + numero2;
        }
        case '-': {
            return numero1 - numero2;
        }
        case '*': {
            return numero1 * numero2;
        }
        case '/': {
            if(numero2 == 0) {
                throw new Error("Attenzione, non è possibile dividere per 0");
            }
            return numero1 / numero2;
        }
        default: {
            throw new Error("Non ho ottenuto un'operazione valida " + operazione);
        }
    }
}


try {
    let parametri = process.argv.length - 2;

    if(parametri != 3) {
        // ERRORE
        throw new Error("Non ho ottenuti i parametri che volevo");
    }
    let numero1 = Number(process.argv[2]);
    let numero2 = Number(process.argv[4]);
    if(isNaN(numero1) || isNaN(numero2)) {
        throw new Error("I parametri numerici non sono numeri " + process.argv[2] + " " + process.argv[4]);
    }

    let operazione = process.argv[3];


    let result = eseguiOperazione(numero1, numero2, operazione);
    console.log(`Il risultato di ${numero1} ${operazione} ${numero2} è ${result}`);
} catch(error) {
    console.error("Messaggio di errore", error.message);
    console.error(error.stack);
} finally {
    console.log("Esecuzione terminata");
    process.exit();
}


