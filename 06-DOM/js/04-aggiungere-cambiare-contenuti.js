/*
    Una volta recuperato un elemento HTML dal DOM, possiamo cambiarne il contenuto HTML o il contenuto testuale.

    Per farlo possiamo utilizzare due diverse proprietà di un elemento HTML:
        - innerText
        - innerHTML
*/
const parag = document.querySelector('p');

console.log(parag.innerText);

// Sostituisco il contenuto testuale. Volessi aggiungere del tetsto lasciando quello già presente, userei += invece del solo =
parag.innerText = 'Il contenuto testuale è cambiato!';

const parags = document.querySelectorAll('p');

parags.forEach(parag => {
    console.log(parag.innerText);
    parag.innerText += ' "nuovo testo"';
});

// Per cambiare l'HTML interno a un elemento dobbiamo usare innerHTML
const content = document.querySelector('.content');

console.log(content.innerHTML);

// content.innerHTML = '<h2>Questo è un nuovo H2</h2>';
content.innerHTML += '<h2>Questo è un nuovo H2</h2>';

/*
    Facciamo finta di recuperare da un DB la lista dei docenti del corso. Utilizzando innerHTML, possiamo aggiungere nella pagina tutti i nomi dei docenti che il DB ci restituisce, mettendoli ognuno nel proprio <p>
*/
const docenti = ['Davide', 'Allen', 'Dario'];

docenti.forEach(docente => {
    content.innerHTML += `<p>${docente}</p>`;
});