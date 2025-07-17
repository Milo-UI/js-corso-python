/*
    Una volta ottenuto un elemento HTML, possiamo anche ottenere o assegnargli degli attributi. Per farlo, sfruttiamo i metodi getAttribute() e setAttribute().

    getAttribute() ci restituisce il valore dell'attributo specificato nell'argomento del metodo.

    setAttribute() ci permette di cambiare un attributo o di assegnarne uno nuovo. Richiede due argomenti:
        - il nome dell'attributo che ci interessa ottenere o assegnare
        - il valore che vogliamo assegnare all'attributo
*/
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.bottleneck.it');
link.innerText = 'Vai al sito di Bottleneck';

const message = document.querySelector('p');

console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');

/*
    Finora abbiamo cambiato solo attributi che già esistevano nell'HTML, ma possiamo anche di crearne di nuovi.
*/
message.setAttribute('style', 'font-weight: bold');