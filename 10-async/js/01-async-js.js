/*
    Async JavaScript, o JavaScript asincrono, è un modo di eseguire del codice che richiede del tempo, senza però bloccare il programma.
    Se per esempio stessimo facendo una chiamata a un server per ottenere dei dati, invece di aspettare che il server risponda, il nostro codice continua a funzionare. Quindi la chiamata inizia, ma finisce quando può, nel mentre viene eseguito il resto del codice.

    JavaScript è un linguaggio sincrono: può eseguire un'istruzione (o statement) alla volta. Questo può causare problemi per azioni come quella di prima, ovvero una chiamata a un database, la quale bloccherebbe il codice per qualche secondo prima di continuare. Se avessimo più chiamate, la nosta applicazione sarebbe molto lenta.

    Entra quindi in gioco async! Che ci permette di iniziare qualcosa nel momento in cui viene letto dal browser, ma finisce dopo, senza bloccare il codice. Per farlo si utilizza una callback function che verrà chiamata una volta che la risposta da parte del server è completa.
*/
// console.log('linea uno');
// console.log('linea due');
// console.log('linea tre');

console.log('linea uno');
console.log('linea due');

// Non blocca il codice
setTimeout(() => {
    console.log('callback function');
}, 2000);

console.log('linea tre');
console.log('linea quattro');