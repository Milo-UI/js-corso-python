/*
    I cicli while funzionano esattamente come i cicli for, non c'è differenza tranne la sintassi.

    Infatti il while tra parentesi richiede solo la condizione, ma questo porta qualche problema, per esempio se diciamo che la condizione deve essere (i < 5), otteniamo un errore, dal momento che la variabile i non è mai stata dichiarata.
    
    Se dichiariamo i fuori dal ciclo e la inizializziamo a 0, la condizione sarà sempre vera, quindi il programma entrerà in un loop infinito.

    Dobbiao ricordarci di aggiornare la variabile all'interno del blocco di codice che il ciclo deve eseguire ogni volta che la condizione è vera.
*/
let i = 0;

while (i < 5) {
    console.log(`In loop: ${i}`);

    i++;
}

let index = 0;
let studenti = ['Nome1', 'Nome2', 'Nome3', 'Nome4', 'Nome5', 'Nome6'];

while (index < studenti.length) {
    console.log(studenti[index]);
    index++;
}

let input;
while (input !== 'esci') {
    input = prompt("Inserisci un comando (digita 'esci' per uscire):");
}