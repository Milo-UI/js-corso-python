// Seleziona l'elemento con ID 'demo'
let elemento = document.getElementById('demo');

// Modifica il contenuto dell'elemento
// elemento.innerHTML = 'IL MIO TESTO È CAMBIATO!!!';

// Modifica il contenuto dell'elemento al click di un bottone
function cambiaTesto() {
    elemento.innerHTML = 'IL MIO TESTO È CAMBIATO!!!';
}

let btn = document.getElementById('btn');

// Faccio sì che il bottone registri l'azione di click dell'utente per lanciare una funzione
btn.addEventListener('click', cambiaTesto);