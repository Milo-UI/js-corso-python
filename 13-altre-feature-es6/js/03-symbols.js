/*
    Symbol è l'ultimo tipo primitivo che ci manca da vedere. Non possono essercene due uguali e una volta creati non possono essere modificati.

    I simboli possono essere usati come chiavi o proprietà di oggetti.
*/
const symbolUno = Symbol('nome');
const symbolDue = Symbol('nome');

console.log(symbolUno, symbolDue, typeof symbolUno); // Sembrano uguali
console.log(symbolUno === symbolDue); // false, perché ogni simbolo è unico

const docente = {};

docente.eta = 33;
docente['materia'] = 'HTML e CSS';
docente['materia'] = 'JavaScript';

docente[symbolUno] = 'allen';
docente[symbolDue] = 'milo';

console.log(docente);
console.log(docente[symbolUno]);