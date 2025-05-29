/*
    I booleani rappresentano due valori specifici: true e false
    È impartante capire che, anche se sono parole, non si tratta di stringhe, ma di veri e propri valori che possono venire interpretati dal browser.

    Usiamo i booleani per verificare delle condizioni all'interno del nostro codice, quindi per controllare che determinate cose siano vere o false. Infatti possiamo utilizzare alcuni metodi di stringhe, array, numeri, che ci restituiranno un valore vero o falso, un booleano.
*/
console.log(true, false, 'true', 'false');

// Esempio di metodi che restituiscono booleani
let email = 'milo@mail.com';

let checkString = email.includes('@');
console.log(checkString);

let studenti = ['Pancrazio', 'Enea', 'Gioseppina'];

let checkArray = studenti.includes('Pancrazio');
console.log(checkArray);

// Possiamo anche utilizzare operatori di confronto per comparare due valori tra loro e questi ci restituiranno un valore di true o false
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let nome = 'Milo';

console.log(nome == 'Milo');
console.log(nome == 'milo'); // case sensitive
console.log(nome > 'Laura'); // true perché L viene prima di M nell'alfabeto

// Possiamo effettuare controlli ancora più precisi grazie a === e !== che, oltre a comparare i valori, ne comparano anche il tipo
console.log(age === 25);
console.log(age === '25');