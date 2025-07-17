/*
    filter() è un metodo per array che possiamo usare quando per esempio otteniamo dei dati da un database e volessimo filtrare determinati elementi dall'array che riceviamo in base a una certa condizione.
    Il metodo filter() quindi itera un array, come il forEach, ed effettua un controllo su ogni elemento all'interno di una funzione di callback. Se un elemento passa il controllo, questo viene mantenuto all'interno dell'array, ma se non viene passato l'elemento viene rimosso dall'array.

    È un metodo "non distruttivo," cioè non altera l'array originale.
*/
let punteggi = [10, 30, 15, 25, 50, 40, 5];

// punteggi.filter((punteggio) => {
//     return punteggio > 20;
// });

// Essendo non distruttivo, l'array punteggi rimane invariato
// console.log(punteggi);

// Per ottenere l'array filtrato, lo salvo in una variabile
const punteggiFiltrati = punteggi.filter((punteggio) => {
    return punteggio > 20;
});

console.log(punteggiFiltrati);

// Per esempio, possiamo usare il metodo filter() per ottenere dall'elenco degli utenti di un sito solo quelli che hanno un abbonamento premium
const utenti = [{
        nome: 'milo',
        premium: true
    },
    {
        nome: 'allen',
        premium: false
    },
    {
        nome: 'davide',
        premium: false
    },
    {
        nome: 'dario',
        premium: true
    },
];

// const utentiPremium = utenti.filter(utente => {
//     return utente.premium;
// });

// Abbreviazione. Più semplice da leggere e più facile che si trovi nel codice di altri
const utentiPremium = utenti.filter(utente => utente.premium);

console.log(utentiPremium);