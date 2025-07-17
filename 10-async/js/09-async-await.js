/*
    async e await sono due parole chiave introdotte recentemente che ci permettono di concatenare tra loro delle Promise in maniera facile e leggibile.

    Possiamo mettere tutto il nostro codice asincrono all'interno di una funzione asincrona e usare la parola chiave await all'interno per concatenare le Promise.
*/
const getTodos = async () => {

    // 2
    // la fetch restituisce una promise e la parola chiave await ferma JavaScript in modo da assegnare il valore alla variabile response solo quando la Promise si risolve
    const response = await fetch('db/todos/yoshi.json');
    // console.log(response);

    // La response non ci restituisce ancora i dati, dobbiamo quindi usare il metodo json() che ci restituisce a sua volta una Promise. Quindi utilizziamo di nuovo await
    const data = await response.json();
    // console.log(data);

    // Possiamo concatenare quante Promise vogliamo
    // const response2 = await fetch('db/todos/mario.json');
    // const data2 = await response2.json();
    // const response3 = await fetch('db/todos/milo.json');
    // const data3 = await response3.json();

    return data;
};

console.log(1);
console.log(2);

// 1
// Quando richiamiamo una funzione asincrona, ci viene sempre restituita una Promise
getTodos()
    .then(data => console.log('Risolta:', data));
// console.log(test);

console.log(3);
console.log(4);