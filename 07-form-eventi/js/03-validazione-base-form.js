let form = document.querySelector('.signup-form');
let feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Validazione
    let username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,}$/;

    if (usernamePattern.test(username)) {
        // feedback positivo
        feedback.textContent = 'Lo username è valido';
        feedback.classList.remove('notOk')
        feedback.classList.add('ok')
        form.username.style.borderColor = '#31c099';
    } else {
        // feedback errore
        feedback.textContent = 'Lo username deve contenere solo lettere, deve essere di almeno 6 caratteri';
        feedback.classList.remove('ok')
        feedback.classList.add('notOk')
        form.username.style.borderColor = 'salmon';
    }
});