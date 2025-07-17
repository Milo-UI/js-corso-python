/* 
    Le date in JS sono un tipo di valore che ricade nella categoria degli oggetti. Infatti sono veri e propri oggetti. Si usano per creare cose come la data di creazione di un post o la data di una registrazione al sito o tanto altro.

    Per creare una nuova data in JS dobbiamo usare quello che si chiama costruttore. Ce n'è di diversi tipi e servono a costruire un oggetto.

    La parola chiave new serve a dire che vogliamo creare un nuovo oggetto tramite la funzione costruttore che segue.
*/
const adesso = new Date();

console.log(adesso);
console.log(typeof adesso); // object

// anno, mese, giorno, orario
console.log('getFullYear:', adesso.getFullYear());
console.log('getMonth:', adesso.getMonth()); // Ci restituisce il numero del mese come se fosse il suo indice all'interno di un array immaginario di mesi, quindi 0 based
console.log('getDate:', adesso.getDate());
console.log('getDay:', adesso.getDay()); // Come per i mesi, ma per i giorni della settimana a partire da domenica
console.log('getHours:', adesso.getHours());
console.log('getMinutes:', adesso.getMinutes());
console.log('getSeconds:', adesso.getSeconds());

// timestamp
console.log('timestamp:', adesso.getTime());

// date strings
console.log(adesso.toDateString());
console.log(adesso.toTimeString());
console.log(adesso.toLocaleString()); // data e ora nell'area in cui mi trovo