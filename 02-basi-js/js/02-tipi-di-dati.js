/*
    JavaScript usa più tipi di dato:
    - String:       serie di caratteri compresi tra apici o virgolette ('hello world' "mail@ciao.com")
    - Number:       numeri di tutti i tipi (1, 2, 3, 100, 3.14)
    - Boolean:      un valore speciale che indica vero o falso (true / false)
    - Null:         lo utilizziamo per indicare esplicitamente che una variabile non ha un valore
    - Undefined:    come Null, ma per variabili non ancora definite e viene assegnato dal browser
    - Object:       strutture complesse di dati con più proprietà e funzioni

    In JavaScript una variabile può contenere qualsiasi tipo di dato e NON siamo obbligati a specificare di che tipo di dato si tratti. Possiamo anche sovrascrivere il valore di una variabile con un diverso tipo di dato.
    JavaScript è un linguaggio debolmente tipizzato, cioè conosce benissimo i tipi di dato, ma non siamo obbligati a dichiararli.
*/
let nomeDocente = 'Milo'; // String
let cognomeDocente = 'Spandre';
let etaDocente = 33; // Number
let nomeCorso = "Python 2025";
let materia = 'JavaScript';
let presenza = true; // Boolean

// Quando in dubbo sul tipo di dato, possiamo utilizzare l'operatore typeof seguito dalla variabile di cui ci interessa conoscere il tipo
console.log(nomeDocente);
