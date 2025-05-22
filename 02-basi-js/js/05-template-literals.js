/* 
    Per non incorrere in errori, problemi di concatenzaione tra stringhe e numeri e per semplificarci il lavoro, possiamo usare i template literals (template string o stringhe template).

    Per utilizzarli, invece di usare apici singoli o doppi, scriviamo la stringa all'interno di una coppia ci backtick. Se vogliamo inserire all'interno di una stringa una variabile, ci basta richiamarla all'interno di parentesi graffe precedute dal simbolo del dollaro ${nomeVariabile}
*/
let title = 'I giochi migliori del 2025';
let author = 'Mario';
let likes = 30;

// metodo concatenazione
let conc = "L'articolo si chiama \"" + title + "\", è stato scritto da " + author + " e ha raggiunto " + likes + " like.";
console.log(conc);

// template literal
let template = `L'articolo si chiama "${title}", è stato scritto da ${author} e finora ha raggiunto ${likes} like.`;
console.log(template);

// I template literals sono perfetti per creare dei template HTML con contenuti dinamici
let htmlTemplate = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>Questo articolo ha ${likes} like</span>
`;

console.log(htmlTemplate);
document.write(htmlTemplate);