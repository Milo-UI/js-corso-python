/*
    I form esistono per ottenere dati o informazioni da parte degli utenti della pagina web (es.: username e password in un form di login).

    Per catturare queste informazioni, utilizzeremo degli eventi e più nello specifico, l'evento 'submit' dei form. Cliccare sul bottone presente al fondo dei form fa partire un evento di submit.

    All'interno di un form in genere possiamo anche "ascoltare" eventi da tastiera.

    Quando vogliamo catturare un evento di submit, anche se per lanciarlo l'utente deve cliccare il bottone, dobbiamo "ascoltarlo" sul form. Anche perché il submit può avvenire senza il click sul bottone, ma al semplice invio dell'utente.

    L'azione di default che il submit di un form compie è il refreshare la pagina. Noi raramente vogliamo che questo accada, qundi usiamo il metodo preventDefault() per evitare l'azione di default dell'evento.
*/
let form = document.querySelector('.signup-form');

// Per ottenere le informazioni inserite dall'utente nei campi di input del form, abbiamo un po' di metodi. Possiamo prendere i singoli campi di input e ottenerne il value oppure usare direttamente il form
// let inputUsername = document.querySelector('#username');

form.addEventListener('submit', e => {
    // Impediamo all'evento submit di refreshare la pagina
    e.preventDefault();
    // console.log(inputUsername.value);
    // Dot notation sul form per prendere l'input con l'attributo id o l'attributo name che ci interessa
    console.log(form.username.value);
});