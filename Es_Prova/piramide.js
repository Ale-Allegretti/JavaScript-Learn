
/* let i = 0;
let y = "*";
while (i < 4) {
    console.log(y);
    y = y.replace("*", "**");
    i++;
} */


let aster = process.argv;

let input = Number(aster[2]);
let y = "*";
for (let i = 0; i < input; i++) {
    console.log(y);
    y = y.replace("*", "**");
}
console.log("");

y = y.replace("**", "*");
for (let i = input; i > 0 ; i--) {
    console.log(y);
    y = y.replace("**", "*");
}
