const button = document.querySelector('.btn');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.classList.add('show');
});

close.addEventListener('click', () => {
    popup.classList.remove('show');
});

popup.addEventListener('click', e => {
    if (e.target === popup) {
        popup.classList.remove('show');
    }
});

/* -------------------------------- con fade -------------------------------- */
// button.addEventListener('click', () => {
//     popup.style.display = 'block';
//     setTimeout(() => {
//         popup.classList.add('show');
//     }, 10);
// });

// close.addEventListener('click', () => {
//     popup.classList.remove('show');
//     setTimeout(() => {
//         popup.style.display = 'none';
//     }, 500);
// });

// popup.addEventListener('click', e => {
//     if (e.target === popup) {
//         popup.classList.remove('show');
//         setTimeout(() => {
//             popup.style.display = 'none';
//         }, 500);
//     }
// });