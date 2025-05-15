/* -------------------------------- VARIABILI ------------------------------- */
/*
    Le variabili ci permettono di salvare dei valori, come un nome o una mail, e di utilizzare quel valore ogni volta che vogliamo.
*/
// let è una parola chiave per indicare una variabile e impedisce di dichiarare due variabili con lo stesso nome. age è il nome che assegniamo alla variabile, 25 è il valore salvato nella variabile
let age = 25;
let year = 2025;

console.log(age, year);

// è possibile sovrascrivere il valore di una variabile e quindi di cambiarlo
// siccome la variabile age è già stata dichiarata e noi vogliamo solo cambiarne il valore, basta richiamare la variabile utilizzando il suo nome e assegnarle il valore che preferiamo
age = 34;

console.log(age);

// posso dichiarare una variabile e assegnarle un valore in un secondo momento
let firstName;
firstName = "Milo";

console.log(firstName);

/* -------------------------------- COSTANTI -------------------------------- */
/*
    Se vogliamo creare una variabile con un valore che non deve mai cambiare, allora ci serve una costante.
    Per creare una costante, utilizziamo la parola chiave const (per convenzione, il nome è scritto in maiuscolo, ma non è obbligatorio):
*/
const POINTS = 100;

// Se proviamo a cambiare il valore, il codice ci impedirà di farlo e la console ci restituirà un errore
// POINTS = 50;

console.log(POINTS);

/*
    Esiste una terza perola chiave per dichiarare le variabili: var, che NON impedisce di dichiarare due variabili con lo stesso nome. Sta cadendo in disuso, grazie all'arrivo di let e const.
*/
var score = 75;

console.log(score);

/* -------------------------- NOMI DELLE VARIABILI -------------------------- */
/*
    I nomi delle variabili seguono delle regole precise e delle convenzioi che aiutano a rendere leggibile il codice a chiunque:

    - niente spazi (errore)
    - possiamo usare il camel-case (myAge)
    - può contenere solo lettere, numeri, underscore o $, ma non possono mai cominciare con un numero (errore)
    - non possiamo utilizzare le parole chiave adottate da JS come let, const, ecc
    - il nome deve avere un senso, deve far capire all'istante cosa viene salvato in quella variabile
*/

// Metodo per stampare direttamente nella pagina web (vecchio e deprecato)
document.write("<h2>" + firstName + " " + age + " anni.</h2>");

// Chiediamo all'utente come si chiama e stampiamolo in console
let nomeUtente = prompt("Come ti chiami?");

console.log("L'utente ha detto di chiamarsi " + nomeUtente);
