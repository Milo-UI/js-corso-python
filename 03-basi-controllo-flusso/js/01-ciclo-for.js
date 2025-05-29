/*
    Il ciclo for è un loop che esegue un blocco di codice per un numero determinato di volte deciso dalla sua condizione.
    La sintassi prevede:
        - Parola chiave for
        - parentesi tonde che contengono gli elementi necessari per porre la condizione
            - inizializzazione di una variabile
            - condizione per cui la variabile è vera o falsa
            - aggiornamento della variabile
        - parentesi graffe che contengono il blocco di codice da eseguire finché la condizione viene rispettata
*/
for (let i = 0; i < 5; i++) {
    console.log(`In loop: ${i}`);    
}

console.log('Loop finito');

// Difficilmente la condizione conterrà un numero specifico come il 5 qua sopra, il più delle volte cicleremo dei dati di qualche tipo.
let studenti = ['Paolo', 'Marco', 'Andrea', 'Laura'];

for (let i = 0; i < studenti.length; i++) {
    // console.log(i);
    // console.log(studenti[i]);
    let html = `<p>${studenti[i]}</p>`;
    console.log(html);
    document.write(html);        
}

/* -------------------------------------------------------------------------- */
/*                                  ESERCIZI                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- Esercizio 1 ------------------------------ */
// Scrivi un loop che itera da 0 a 15. Per ogni ciclo controlla se il numero è pari o dispari.Mostra il risultato in console.

/* ------------------------------- Esercizio 2 ------------------------------ */
/*
    Scrivi un programma per costruire in console il seguente pattern:

    *
   * *
  *   *
 *     *
*********

*/

/* ------------------------------- Esercizio 3 ------------------------------ */
/*
    Scrivi un programma che stampi in console un pattern come il seguente triangolo, chiedendo all'utente il numero di righe tramite un prompt:

    1
    12
    123
    1234
    12345
*/