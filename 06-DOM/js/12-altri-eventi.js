const copy = document.querySelector('.copiami');

copy.addEventListener('copy', () => {
    console.log('Ehi! Il mio contenuto è protetto da copyright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.innerHTML = `x pos = ${e.offsetX} <br> y pos = ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});