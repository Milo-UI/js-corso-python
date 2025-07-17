/*
    I timestamp sono rappresentati in una data come il numero di millisecondi passati dalla mezzanotte del primo gennaio 1970, permettendoci di comparare 2 date tra loro.
*/
const prima = new Date('Novembre 01 2024 02:09:50');
const adesso = new Date();

// console.log(adesso.getTime(), prima.getTime());

const diff = adesso.getTime() - prima.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days);

console.log(`Questo post è stato pubblicato ${days} giorni fa`);

// Convertire i timestamp in date
const timestamp = 1730423390000;
console.log(new Date(timestamp));