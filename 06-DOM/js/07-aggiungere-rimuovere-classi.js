/*
    Siccome non è consigliabile lavorare sullo stile in linea (tranne che per alcune eccezioni), è meglio imparare come fare ad aggiungere e rimuovere classi CSS.

    La proprietà classList ci permette di vedere l'elenco di classi di un dato elemento HTML.
    Per aggiungere una classe, possiamo utilizzare il metodo di classList add().
    Per rimuovere una classe, possiamo utilizzare il metodo di classList remove().
    Esiste poi il metodo toggle() che aggiunge una classe se non presente nella classList e la rimuove se presente.
*/
const content = document.querySelector('p');

console.log(content.classList);

// aggiungo la classe error
// content.classList.add('error');
// // rimuovo la classe error
// content.classList.remove('error');
// // aggiungo la classe success
// content.classList.add('success');

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    // textContent ci prende tutto il testo, a differenza di innerText che ignorerebbe il testo nascosto, a cui magari è stato dato display: none
    if (paragraph.textContent.includes('error')) {
        paragraph.classList.add('error');
    }

    if (paragraph.textContent.includes('success')) {
        paragraph.classList.add('success');
    }
});

const title = document.querySelector('.title');

// "togglo" la classe .test sul titolo
title.classList.toggle('test');
title.classList.toggle('test');