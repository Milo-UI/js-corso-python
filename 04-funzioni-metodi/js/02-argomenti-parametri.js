/*
    I parametri di una funzione sono dei segnaposto che verrano poi valorizzati quando la funzione viene chiamata.
*/
const saluta = function(nome) {
    console.log(`Buongiorno ${nome}!`);
};

saluta('Laura'); // Passo il valore di nome quando richiamo la funzione -> argomento
saluta('Paolo');
saluta('Undefined');

const salutaMeglio = function(nome, tempo) {
    console.log(`${tempo} ${nome}`);
};

salutaMeglio('Milo', 'Buon pomeriggio');

// Se richiamiamo una funzione che richiede dei parametri senza passargli degli argomenti, i parametri assumono il valore di undefined. Per evitare che questo accada, possiamo assegnare dei valori di default.
const salutaSicuro = function(nome = 'Utente', tempo = 'Salve') {
    console.log(`${tempo} ${nome}`);
};

salutaSicuro();
salutaSicuro('Paola', 'Buongiorno');

/*
    - Un parametro è la variabile elencata tra parentesi nella dichiarazione della funzione (fa parte della dichiarazione).
    - Un argomento è il valore passato alla funzione quando viene chiamata (fa parte della chiamata).
*/