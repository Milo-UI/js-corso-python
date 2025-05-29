/*
    Un if statement viene usato per prendere decisioni all'interno del codice:
        la parola chiave if dice allo script di eseguire un blocco di codice che si trova tra le parentesi graffe se viene rispettata la condizione riportata tra le tonde.
*/
let age = 25;

if (age > 20) {
    console.log('Tu hai più di 20 anni');
}

// Possiamo usare un if statement anche per controllare dati
let studenti = ['Mario', 'Luigi', 'Peach'];

if (studenti.length > 2) {
    console.log("Abbiamo più di 2 studenti");
}

/* --------------------------------- if else -------------------------------- */
// Grazie a else possiamo aggiungere un blocco di codice da eseguire nel caso in cui la condizione non venga rispettata
let password = 'password';

if (password.length >= 8) {
    console.log('La tua password è abbastanza lunga');
} else {
    console.log('La password deve contenere almeno 8 caratteri');
}

/* --------------------------------- else if -------------------------------- */
// Quando abbiamo la necessità di controllare molteplici condizioni, possiamo ricorrere all'uso di else if
let username = 'bohchenesoio!';

if (username.length > 12) {
    console.log('Lo username non deve superare i 12 caratteri');
} else if (username.length >= 8) {
    console.log('Il tuo username è perfetto');
} else {
    console.log('Lo username deve essere di almeno 8 caratteri');
}

/* --------------------------- operatore ternario --------------------------- */
// L'operatore ternario è un modo conciso per scrivere una condizione che restituisce uno dei due valori in base a una valutazione booleana.Viene usato come alternativa compatta all'istruzione if-else, ma solo quando si hanno solo due opzioni.
// condizione ? veloreSeVero : valoreSeFalso
let eta = 18;
let stato = (eta >= 18) ? "Maggiorenne" : "Minorenne";
console.log(stato);