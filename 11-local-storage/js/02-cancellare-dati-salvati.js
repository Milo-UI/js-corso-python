// Salvare dati in local storage: localStorage('key', 'value')
localStorage.setItem('name', 'milo');
localStorage.setItem('age', 33);

// Recuperare dati dalla local storage: getItem('key')
let nome = localStorage.getItem('name');
let eta = localStorage.getItem('age');

console.log(nome, eta);

// Cancellare dati dalla local storage: removeItem('key')
// localStorage.removeItem('name');
localStorage.clear(); // Non richiede argomenti perché cancella tutti i dati dalla local storage

nome = localStorage.getItem('name');

eta = localStorage.getItem('age');

console.log(nome, eta); // Otteniamo null perché non trova il valore