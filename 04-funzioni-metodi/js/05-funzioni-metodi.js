/*
    La differenza tra metodi e funzioni è principalmente legata al contesto in cui vengono utilizzati.

    Una funzione è un blocco di codice progettato per eseguire un'operazione specifica. Può essere definita e chiamata in modo indipendente. Le funzioni possono essere chiamate in qualsiasi punto del codice e non sono legate a nessun oggetto specifico.

    Un metodo è una funzione che è associata a un oggetto (o data type). In altre parole, è una funzione che è una proprietà di un oggetto. Quindi i metodi vengono chiamati in relazione all'oggetto a cui appartengono tramite la dot notation.
    
    Le differenze principali quindi sono: 
        - come vengono richiamati
        - dove vengono definiti
*/
let nome = 'milo';

// funzioni
const saluta = () => `Ciao ${nome}`;

let resultOne = saluta();
console.log(resultOne);

// metodi
let resultTwo = nome.toUpperCase();
console.log(resultTwo);