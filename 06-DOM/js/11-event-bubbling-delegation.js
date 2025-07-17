/*
    Quando un evento viene attivato su un elemento, l'evento si propaga "risalendo" attraverso la gerarchia degli elementi genitori.

    - Attivazione dell'evento
    Quando un evento, come un clic, si verifica su un elemento, l'evento inizia a propagarsi dal target dell'evento (l'elemento cliccato) fino all'elemento radice del documento.

    - Propagazione
    Durante la fase di bubbling, l'evento viene passato a ciascun elemento genitore, in ordine gerarchico, fino a raggiungere l'elemento document.

    - Gestione degli eventi
    Ogni elemento lungo il percorso può avere dei gestori di eventi associati. Se un gestore di eventi è definito su un elemento genitore, può "catturare" l'evento e reagire ad esso.

    Se vogliamo impedire che l'evento continui a propagarsi, possiamo utilizzare il metodo stopPropagation()
*/
const todoList = document.querySelector('.lista');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Nuova cosa da fare';
    todoList.append(li);
});

const listItems = document.querySelectorAll('.lista li');

// Qui aggiungiamo un eventListener su ogni elemento della lista. Questo è un dispendio di memoria e potrebbe rallentare il programma. In più non funziona sugli elementi che aggiungiamo dopo il caricamento della pagina
// listItems.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log("evento su LI");
//         // Impedisco all'evento di propagarsi fino al genitore
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

todoList.addEventListener('click', e => {
    // console.log("evento su UL");
    console.log(e.target); // Controllo che l'evento parta sull'elemento cliccato

    // Se volessimo eliminare l'item cliccato, dobbiamo prima controllare che sia effettivamente stato cliccato un LI e non l'UL
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});