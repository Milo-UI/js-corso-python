/*
    Può capitare di voler organizzare o riordinare un array di dati in un modo particolare (ordine alfabetico, ordine crescente, da chi ha il punteggio più alto in giù, ecc).
    È un metodo distruttivo, quindi agisce sull'array originale.

    Se volessimo invertire l'ordine di un array, potremmo usare il metodo reverse(), quindi, per ordinare gli elementi di un array in ordine alfabetico ma partendo dalla z fino ad arrivare alla a, potremmo fare sort() e poi reverse().
*/
/* ---------------------- Esempio 1 - ordinare stringhe --------------------- */
const nomi = ['mario', 'yoshi', 'luigi', 'peach', 'bowser'];

// sort() di default riarrangia l'array in ordine alfabetico, quindi non ho bisogno di fare nulla
nomi.sort(); // Non restituisce un nuovo valore, non crea un nuovo valore, ma cambia quello originale.

console.log(nomi);

/* ----------------------- Esempio 2 - ordinare numeri ---------------------- */
const punteggi = [10, 50, 20, 5, 35, 70, 45];

// Senza specificare nulla, tiene in considerazione solo il primo numero della cifra
// punteggi.sort();

// Ordino dal più grande al più piccolo
punteggi.sort((a, b) => b - a);

// Ordino dal più piccolo al più grande
punteggi.sort((a, b) => a - b);

console.log(punteggi);

/* ----------------------- Esempio 3 - ordinare ogetti ---------------------- */
const giocatori = [{
        giocatore: 'mario',
        punteggio: 20
    },
    {
        giocatore: 'yoshi',
        punteggio: 10
    },
    {
        giocatore: 'peach',
        punteggio: 50
    },
    {
        giocatore: 'luigi',
        punteggio: 30
    },
    {
        giocatore: 'bowser',
        punteggio: 70
    }
];

// Non funziona perché non sa cosa guardare per capire come ordinare gli oggetti (giocatore o punteggio?)
// giocatori.sort();

// Usiamo quindi una funzione come argomento del metodo, la funzione di comparazione. Questa funzione accetta due parametri che rappresentano due elementi consecutivi all'interno dell'array. Nella funzione li compareremo per capire chi viene prima. 
// giocatori.sort((a, b) => {
//     if (a.punteggio > b.punteggio) {
//         return -1;
//     } else if (b.punteggio > a.punteggio) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// giocatori.sort((a,b) => {
//     return b.punteggio - a.punteggio
// });

giocatori.sort((a, b) => b.punteggio - a.punteggio);

console.log(giocatori);