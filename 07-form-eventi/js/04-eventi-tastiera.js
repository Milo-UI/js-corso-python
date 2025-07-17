/*
    Per rendere la vita più facile all'utente e dargli velocemente un feedback sulla correttezza di quelo che scrive, possiamo intercettare eventi della tastiera.
*/

let form = document.querySelector('.signup-form');
let feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // Validazione
    let username = form.username.value;

    if (usernamePattern.test(username)) {
        // feedback positivo
        feedback.textContent = 'Lo username è valido';
        feedback.classList.remove('notOk')
        feedback.classList.add('ok')
        form.username.style.borderColor = '#31c099';
    } else {
        // feedback errore
        feedback.textContent = 'Lo username deve contenere solo lettere e deve essere di almeno 6 caratteri';
        feedback.classList.remove('ok')
        feedback.classList.add('notOk')
        form.username.style.borderColor = 'salmon';
    }
});

// Live feedback
form.username.addEventListener('keyup', e => {
    console.log(e);
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        console.log('ok');
        form.username.classList.add('ok');
        form.username.classList.remove('notOk');
    } else {
        console.log('non ok');
        form.username.classList.add('notOk');
        form.username.classList.remove('ok');
    }
});