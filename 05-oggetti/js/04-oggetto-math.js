/*
    JS ha tutta una serie di oggetti built-in a nostra disposizione. Uno di questi è l'oggetto Math.

    Math ha tante proprietà e tanti metodi pronti all'uso e per accedervi dobbiamo ovviamente richiamare l'oggetto Math.
*/
// Stampando l'oggetto a console, possiamo vederne tutte le proprietà e tutti i metodi
console.log(Math);

// Possiamo per esempio utilizzare la proprietà PI di Math se ci serve utilizzare il pi greco in una formula
console.log(Math.PI);

/* --------------------------------- Metodi --------------------------------- */
const area = 7.7;

// Math.round() arrotonda il valore all'intero più vicino
console.log(Math.round(area)); // =8 perché 7.7 è più vicino a 8 che a 7

// Math.floor() arrotonda il valore per difetto
console.log(Math.floor(area)); // =7

// Math.ceil() arrotonda il valore per eccesso
console.log(Math.ceil(area)); // =8

// Math.trunc() elimina i decimali e lascia l'intero
console.log(Math.trunc(area)); // =7

// Math.sqrt() calcola la radice quadrata
console.log(Math.sqrt(144)); // =12

// Math.pow() eleva il primo argomento alla potenza indicata dal secondo argomento
console.log(Math.pow(4, 3)); // =64

// Generare numeri randomici
const random = Math.random();

// Math.random() genera ogni volta che lo chiamiamo un numero randomico compreso tra 0 e 1
console.log(random);

// Per generare un numero randomico compreso tra 1 e 100 possiamo fare così:
console.log(Math.round(Math.random() * 100));