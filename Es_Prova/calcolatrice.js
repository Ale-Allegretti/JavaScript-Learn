
let ins = process.argv;


if ((ins.length - 2) != 3) {
    console.error("Numero parametri errato")
    process.exit();
}

let ins1 = Number(ins[2]);
let ins2 = Number(ins[4]);

if(isNaN(ins1) || isNaN(ins2)) {
    console.error("Inserire valori numerici")
}
else {
    let result = calc(ins1, ins2, ins[3]);
    console.log(`Il risultato di ${ins1} ${ins[3]} ${ins2} è ${result}`);
}


function calc(a, b, segno) {
    switch (segno) {
        case "+": {
        return a + b;
        }
        case "-": {
        return a - b;
        }
        case "*": {
            return a * b;
        }
        case "/": {
            if(b == 0) {
                console.error("Impossibile divide per 0")
                process.exit();
            }
            return a / b;
        }
        default: {
            return console.log("Non so gestire questa operazione");
        }
    }
}


