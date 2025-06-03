/*
    Lo scope (ambito) si riferisce alla visibilità delle variabili e delle funzioni in diverse parti del codice.
*/

// Si parla di variabili GLOBALI quando al di fuori di qualsiasi funzione o blocco di codice, sono accessibili da qualsiasi parte del codice
let age = 30;

if (true) {
    console.log('Dentro al blocco:', age); // Accessibile all'interno di un blocco di codice 
}

console.log('Fuori dal blocco:', age); // Accessibile all'esterno di blocchi di codice

// Si parla di variabili LOCALI quando queste vengono dichiarate all'interno di un blocco di codice o all'interno di funzioni
if (true) {
    let varLocale = 'Sono una variabile locale';
    console.log('Dentro al blocco:', varLocale); // Accessibile all'interno del blocco in cui è stata dichiarata
}

// console.log('Fuori dal blocco:', varLocale); // Non accessibile al di fuori del blocco in cui è stata dichiarata

let email = 'mia@mail.com';
console.log(email);

// let email = 'altra@mail.com'; // La parola chiave let non ci permette di dichiarare con lo stesso nome due variabili che si trovano nello stesso scope

if (true) {
    let email = 'ennesima@mail.com'; // Lo scope di questa variabile rimane all'interno del blocco di codice, non ci restituisce errore perché non può essere usata all'esterno
    console.log(email);
}