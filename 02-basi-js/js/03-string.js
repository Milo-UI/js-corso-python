/*
    Usiamo le stringhe per salvare una serie di lettere, numeri o altri caratteri, come un nome o un indirizzo email.
    Per assegnare una stringa come valore a una variabile, bisogna metterla tra virgolette o apici. 
*/
let stringa = "Sono una stringa";
console.log(stringa);

// Se la stringa deve contenere a sua volta virgolette o apostrofi, bisogna far capire che quelli apici fanno parte della stringa e non sono attinenti al codice
// Un modo è quello di usare il backslash (\), che è un carattere di escape, prima di ogni apertura e chiusura di apici
let url = "<a href=\"https://www.youtube.com\">Vai a YouTube</a>";
let nomeLibro = 'L\'uomo del boh';

console.log(url, nomeLibro);

/*
    ALTRI UTILIZZI DEL CARATTERE DI ESCAPE:
    \'  apostrofo o apice singolo
    \"  apici doppi o virgolette
    \\  backslash
    \r  a capo
*/

// Un'alternativa è quella di usare gli apici singoli per dichiarare la stringa e usare gli apici doppi dove serve all'interno o viceversa
let quote = 'Ieri mi ha detto solo "Ciao!"';
console.log(quote);

/*
    Se volessimo unire più stringhe tra loro, possiamo usare quella che si chiama concatenazione e per farlo usiamo l'operatore di concatenazione +
*/
let ourString = 'Io vengo prima.' + 'Io vengo dopo.';
console.log(ourString);

// Possiamo usare l'operatore += per concatenare stringhe
let stringaConc = "Io vengo prima.";
stringaConc += "Io vengo dopo.";
console.log(stringaConc);

// Si possono concatenare le variabili alle stringhe
let myName = "Milo";
let miPresento = "Ciao! Mi chiamo " + myName + ". Tu come ti chiami?";
console.log(miPresento);

// Si possono quindi anche ottenere delle stringhe concatenando solo le variabili che contengono stringhe
let aggettivo = "fantastico!";
let intro = "JavaScript è ";
console.log(intro += aggettivo);

// È possibile calcolare la lunghezza di una stringa utilizzando la proprietà .length
let firstNameLength = 0;
let firstName = 'Milo';

firstNameLength = firstName.length;
console.log(firstNameLength);
console.log(typeof firstNameLength);

// Se invece volessimo trovare la prima lettera di unastringa possiamo utilizzare la bracket notation
let firstLetterOfFirstName = firstName[0]; // Le stringhe sono 0-based, ovvero si inizia a contare da zero e non da 1.
console.log(firstLetterOfFirstName);

// È possibile ricavare l'ultimo carattere di una stringa anche se non se ne conosce la lunghezza esatta
let nome = "Alberto";
let lastLetterOfName = nome[nome.length - 1];
console.log(nome.length, lastLetterOfName);

/* ----------------------------- Metodi Stringhe ---------------------------- */
let txt = "Oggi ho svolto 8 ore di lezione";

// Metodi di ricerca
let search1 = txt.indexOf('lezione'); // restituisce l'indice in cui la parola inizia
console.log(search1);

let search2 = txt.lastIndexOf('o'); // restituisce l'indice dell'ultima occorrenza
console.log(search2);

let search3 = txt.charAt(3); // restituisce il carattere nella posizione specificata
console.log(search3);

// Metodi per il taglio
let testo = "Sono le 18 e tutto va bene";

// I metodi slice() e substring() estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale
let taglio1 = testo.slice(4, 10);
console.log(taglio1);

let taglio2 = testo.substring(4, 10);
console.log(taglio2);

// Metodi per sostituzione
let affermazione = "Il miglior browser del mondo è Internet Explorer";

// Il metodo replace() restituisce una nuova stringa rimpiazzando tutte le ricorrenze del pattern dato con una sostituzione
let sost = affermazione.replace("Internet Explorer", "Google Chrome");
console.log(sost);

// Il metodo toUppercase() converte tutti i caratteri in maiuscolo
let upp = affermazione.toUpperCase();
console.log(upp);

// Il metodo toLowercase() converte tutti i caratteri in minuscolo
let low = affermazione.toLowerCase();
console.log(low);

// Il metodo split() divide una stringa in una lista ordinata di sotto-stringhe, le raggruppa in un array e restituisce questo array. La divisione avviene cercando un pattern fornito come argomento tra le parentesi tondee indica dove il metodo deve andare a separare.
// Fornendo come pattern una stringa vuota, il metodo separa per ogni singolo carattere, spazi compresi
let string1 = "Ciao mi chiamo Milo";

let arr1 = string1.split('');
console.log(arr1);

// Fornendo come pattern uno spazio, il metodo andrà a separare parola per parola, quindi ogni volta che trova uno spazio
let arr2 = string1.split(' ');
console.log(arr2);

// Se si parte invece da un array di stringhe, con il metodo join() è possibile ottenere una stringa unica che concatena tutti gli elementi dell'array separati da virgole oppure dal carattere specificato come parametro del metodo
let arr3 = ['M', 'I', 'L', 'O'];

let string2 = arr3.join('');
console.log(string2);
