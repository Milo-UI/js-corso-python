/* 
    Un oggetto in JS è molto simile a un oggetto nella vita vera: ha delle proprietà e delle funzionalità.
*/
// Un array è un tipo di oggetto in JS
const names = ['milo', 'yoshi'];
console.log(names);

// Un altro modo di creare un array è quello di usare una funzione costruttore
const eta = new Array(20, 25, 30);
console.log(eta);

// Chiaramente possiamo creare un oggetto usando la sintassi letterale
const userOne = {};
console.log(userOne);

// Ma possiamo usare una funzione costruttore anche per gli oggetti
const userTwo = new Object();
console.log(userTwo);

// Non tutto in JS è un oggetto però. Abbiamo anche stringhe, numeri e booleani, tipi primitivi. Ma come facciamo allora ad avere anche proprietà e metodi per questi tipi di dato?
const nome = 'milo';
console.log(nome);
console.log(nome.length);
console.log(nome.toUpperCase());

// Quando proviamo ad accedere a una proprietà o a un metodo di un tipo primitivo, JS lo "wrappa" temporaneamente in un wrapper object e sarà questo oggetto ad avere le proprietà e i metodi che usiamo. Una volta che i metodi e le proprietà richieste vengono usati, JS rimuove il wrapper e ci restituisce il tipo primitivo.
const nomeDue = new String('yoshi');
console.log(nomeDue);

const numero = new Number(5);
console.log(numero);

const booleano = new Boolean(true);
console.log(booleano);