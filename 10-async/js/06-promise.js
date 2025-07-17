/*
    Una Promise è un qualcosa che rappresenta un'operazione asincrona (che quindi ci mette del tempo a risolversi) e il suo eventuale completamento (o fallimento) nel futuro.

    Una Promise può trovarsi in uno dei seguenti tre stati:

    - Pending (in attesa): Lo stato iniziale, né completato né rifiutato.
    - Fulfilled (completato): L'operazione è stata completata con successo.
    - Rejected (rifiutato): L'operazione è fallita.
*/
// 2
const getTodos = (risorsa) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Non sono riuscito a recuperare i dati');
            }
        });

        request.open('GET', risorsa);
        request.send();
    });
};

getTodos('db/todos/milo.json')
    .then(data => {
        console.log('Promise risolta:', data);
    })
    .catch(err => {
        console.log('Promise rifiutata', err);
    });

// 1
// Esempio promise
const getQualcosa = () => {
    // La Promise accetta come parametro una funzione che a sua volta ci dà accesso a altri due parametri: resolve, reject. Questi sono funzioni già pronte all'interno della Promise
    return new Promise((resolve, reject) => {
        // recuperiamo qualcosa
        resolve('Dati recuperati'); // Nella resolve passiamo i dati recuperati
        // reject('Errore'); // Nella reject passiamo l'errore nel caso si presenti
    });
};

// Richiamando la funzione restituiamo la Promise, che dice "farò qualcosa a un certo punto che potrà risolversi o venir rifiutata". Quindi utilizziamo il metodo then() per dire cosa deve succedere quando la Promise si risolve e prende come parametro due funzioni. La prima nel caso in cui la promise si risolve e la seconda in caso venga rifiutata.
getQualcosa().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

// Esiste un metodo più chiaro per scrivere tutto questo utilizzando il metodo catch() che partirà nel caso in cui la Promise venga rifiutata.
getQualcosa()
    .then(data => console.log(data))
    .catch(err => console.log(err));