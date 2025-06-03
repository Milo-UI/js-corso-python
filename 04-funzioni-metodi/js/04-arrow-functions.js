/*
    Le arrow function sono funzioni scritte in maniera più moderna e concisa, rendono il codice più breve e leggibile 
*/
// const calcArea = function(raggio) {
//     return 3.14 * raggio ** 2;
// };

/*
    - ci liberiamo della parola chiave function
    - se abbiamo un solo parametro, omettiamo le parentesi tonde, ma sono OBBLIGATORIE se abbiamo più parametri o nessun parametro
    - possiamo anche liberarci della parola chiave return e delle parentesi graffe, portando il blocco di codice sulla stessa linea della dichiarazione, ma solo quando abbiamo un semplice return statement
*/
const calcArea = raggio => 3.14 * raggio ** 2;

const area = calcArea(5);
console.log(area);

// Secondo esempio
// const saluta = function () {
//     return 'Hello World'
// };

const saluta = () => 'Hello World';

saluta();

// Terzo esempio
// const scontrino = function(prodotti, tassa) {
//     let totale = 0;

//     for (let i = 0; i < prodotti.length; i++) {
//         totale += prodotti[i] + prodotti[i] * tassa;
//     }

//     return totale;
// };

const scontrino = (prodotti, tassa) => {
    let totale = 0;

    for (let i = 0; i < prodotti.length; i++) {
        totale += prodotti[i] + prodotti[i] * tassa;
    }

    return totale;
};

console.log(scontrino([10, 15, 30], 0.2));