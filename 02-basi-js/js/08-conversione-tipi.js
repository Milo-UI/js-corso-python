/*
    Nel caso dovessimo averne bisogno, possiamo cambiare il tipo di un valore. Per esempio, se abbiamo una stringa che contiene un numero e vogliamo utilizzare quel numero come tale, potremmo avere problemi.
*/
let score = '100';

console.log(score + 1); // il numero che aggiungiamo verrà concatenato alla stringa, perché il + è sia un operatore aritmetico, sia un operatore di concatenazione.

// Possiamo assicurarci che il valore della nostra variabile sia di tipo Number cambiandole il tipo
score = Number(score); // Number in questo caso prende la stringa e la trasforma in numero
console.log(score + 1);

// Se proviamo a trasformare in numero qualcosa che non può esserlo, otteniamo NaN
let saluto = Number('hello');
console.log(saluto);

// Se dovessimo fare il contrario (number -> string)
let result = String(50);
console.log(result, typeof result);

/*
    Possiamo convertire anche i booleani. Ci sono alcuni valori che ci restituiranno true e altri false: 
        numeri positivi e negativi restituiscono true, 
        0 restituisce false, 
        stringhe di qualsiasi lunghezza sono true, 
        stringhe vuote false
*/
// let vittoria = Boolean(100);
// let vittoria = Boolean(0);
// let vittoria = Boolean('0');
let vittoria = Boolean('');

console.log(vittoria, typeof vittoria);
