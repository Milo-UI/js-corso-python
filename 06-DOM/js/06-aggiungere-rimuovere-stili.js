/*
    Utilizzando setAttribute() possiamo cambiare il valore di un attributo, ma se ad esempio si tratta di un attributo style già esistente, andremo a sovrascrivere il valore presente nell'html. Per evitare questo problema, dovremmo andare a controllare qual è il valore e riportarlo nel momento in cui andiamo ad apportare la modifica, ma questa cosa non è pratica.

    Possiamo quindi sfruttare la proprietà style.
*/
const title = document.querySelector('h2');

// title.setAttribute('style', 'font-size: 40px;');

console.log(title.style);
console.log(title.style.color);

title.style.fontSize = '40px';
title.style.color = 'salmon';
title.style.textAlign = 'center';
title.style.textAlign = '';