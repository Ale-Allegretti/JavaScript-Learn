# Appunti Corso ESIS

## Frontend developer 

### Bootstrap

Inventato per essere quanto più responsive.
Il **container**, già implementato da loro, si adatta per breakpoint di risoluzione.

Il **grid** system, permette di suddividere lo spazio in righe e colonne.
Quindi ragionare per colonne permette di dividere lo spazio per numero di colonne stesso.

Bootstrap è pensato come sviluppo mobyle-first.
In caso si voglia modificare l'approccio iniziale su cui la pagina funzioni, bisogna aggiungere la regola per cui le colonne cambiano comportanmento (Class prefix).

Usare il **localStorage** è utile per salvare (temporaneamente) dei valori tramite key (solo) come String
localStorage.setItem("nome","Alessandro")
localStorage.getItem("nome") = Alessandro
localStorage.length = 1
localStarage.clear()   -> ripulisce

Da lì poi è possibile fare una parse di quello che serve tramite il JSON -> es:
let obj = {nome: "Alessandro", cognome: "Allegretti"};

JSON.stringify(obj) = '{"nome":"Alessandro","cognome":"Allegretti"}

JSON.parse('{"nome":"Alessandro","cognome":"Allegretti"}) -> ritrasforma in oggetto