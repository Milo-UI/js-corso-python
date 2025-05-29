/*
    Gli array ci permettono di memorizzare una collezione di valori correlati tra loro.
    Sono oggetti 0-based, cioè a ogni elemento viene assegnato un indice partendo da 0.

    - Le parentesi quadre indicano l'inizio e la fine di un array
    - Ogni elemento è separato da virgole
*/
let docenti = ['Milo', 'Daniele', 'Valeria', 'Fabio'];

console.log(docenti);

// Si può estrarre un singolo elemento specifico utilizzando la baracket notation, andando a richiamare l'indice dell'array
let primoDocente = docenti[0];
let terzoDocente = docenti[2];

console.log(primoDocente, terzoDocente);

// Gli array accettano elementi di qualsiasi tipo
let ages = [20, 25, 30, 35];
console.log(ages[2]);

// Possono anche accettare elementi di diversi tipi, ma ha poco senso visto che un array contiene valori correlati tra loro
let random = ['Milo', 'Fabio', 34, 30];
console.log(random);

/* ---------------------------- Proprietà length ---------------------------- */
// Possiamo risalire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà length
let numeroDocenti = docenti.length;
console.log(numeroDocenti);

/* -------------------------------------------------------------------------- */
/*                             Metodi degli array                             */
/* -------------------------------------------------------------------------- */
/* ---------------------------- Cambiare elementi --------------------------- */
// Oltre che per estrapolare un elemento, possiamo usare l'indice per modificare l'array cambiando un elemento
docenti[1] = "Dario";
console.log(docenti);

/* --------------------------- Aggiungere elementi -------------------------- */
// Si possono aggiungere elementi alla FINE di un array con la funzione .push()
docenti.push('Marco', 'Paola');
console.log(docenti);

// Se invece volessi aggiungere un elemento all'INIZIO di un array, posso usare il metodo .unshift()
docenti.unshift('Patride');
console.log(docenti);

/* --------------------------- Rimuovere elementi --------------------------- */
// Si può rimuovere l'ULTIMO elemento con il metodo .pop()
docenti.pop();
console.log(docenti);

// Se invece si volesse rimuovere il PRIMO elemento, si userà .shift()
docenti.shift();
console.log(docenti);

/* --------------------------------- join() --------------------------------- */
// Il metodo join() prende gli elementi di un array e li unisce all'interno di una STRINGA separati dal carattere o caratteri che gli passiamo come argomento
let allAges = ages.join(", ");
console.log(allAges);

/* -------------------------------- indexOf() ------------------------------- */
// Come per le stringhe, possiamo risalire all'indice di un elemento
console.log(docenti.indexOf('Valeria'));

/* ------------------------------- Ordinamento ------------------------------ */
// Per ordinare gli elementi dell'array in ordine alfabetico usiamo il metodo sort()
console.log(docenti.sort());

// Invece per l'ordine inverso usiamo reverse()
console.log(docenti.reverse());

/* -------------------------------- concat() -------------------------------- */
// Il metodo concat() prende un array e ne concatena un altro
let nuoviDocenti = ['Egle', 'Stefania'];
let docentiAggiornato = docenti.concat(nuoviDocenti);
console.log(docentiAggiornato);

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/* 
    Lista della spesa:
    - Creare due array.
        - Il primo contiene la lista dei prodotti da comprare
        - Il secondo i prezzi dei prodotti
    - Stampare in console il secondo elemento dell'array e il suo prezzo
    - Popolare la lista della spesa che ha id lista con un list item per ogni prodotto che contenga il nome del prodotto e il suo costo
    
    - Costruire un elemento html p nel quale verrà stampato il subtotale, cioè il totale senza l'iva
    
    - Costruire un elemento html p nel quale verrà stampata l'IVA(22%)
    
    - Calcolare il totale dei prezzi dei prodotti compreso d'iva e scriverlo nel paragrafo con id totale

    - (Facoltativo). All'avvio della pagina comparirà un prompt nel quale verrà chiesto il nome dell'utente. Questo nome verrà stampato in un tag h2 riportante il seguente testo: "Scontrino di nomeUtente"

    MINIMO 8 prodotti
*/

let lista = document.getElementById('lista');
let elTotale = document.getElementById('totale');
let elIva = document.getElementById('iva');
let elGranTotale = document.getElementById('granTotale');

let prodotti = ['Pane', 'Pasta', 'Biscotti', 'Insalata', 'Birra'];
let prezzi = [1.20, 0.99, 4, 0.50, 6.00];

let totale = 0;

console.log(`Il secondo prodotto è ${prodotti[1]} e costa ${prezzi[1]}`);

for (let i = 0; i < prodotti.length; i++) {
    console.log(prodotti[i], prezzi[i]);
    
    lista.innerHTML += `<li>${prodotti[i]} €${prezzi[i].toFixed(2)}</li>`;

    totale += prezzi[i];
}

elTotale.innerHTML = `Totale: €${totale.toFixed(2)}`;

let iva = totale * 0.22;
let subtotale = totale + iva;

elIva.innerHTML = `Costo Iva(22%): €${iva.toFixed(2)}`;
elGranTotale.innerHTML = `GRAN TOTALE: €${subtotale.toFixed(2)}`;