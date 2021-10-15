
console.log(process.argv);
let baseAltezza = Number(process.argv[2] || 4);


if(isNaN(baseAltezza)) {
    console.log("Inserire un numero");
} else {
    for (let i = baseAltezza; i >= 1; i--) {
        let asterisco = "";
        for(let j = 1; j <= i; j++) {
            asterisco += "*";
        }
        console.log(asterisco);
    }

    let i = 1;
    console.log("Risoluzione con il while");
    while (i <= baseAltezza) {
        let asterisco = "";
        let j = 1;
        while(j <= i) {
            asterisco += "*";
            j++;
        }
        console.log(asterisco);
        i++;
    }
}
