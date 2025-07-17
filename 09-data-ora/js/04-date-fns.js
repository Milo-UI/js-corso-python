const now = new Date();

// Controlla che la data passata corrisponda a quella corrente (boolean)
console.log(dateFns.isToday(now));

// Formattare data e ora
console.log(dateFns.format(now, 'yyyy'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'eeee'));
console.log(dateFns.format(now, 'eee'));
console.log(dateFns.format(now, 'do'));
console.log(dateFns.format(now, 'eeee do MMMM yyyy'));

// Comparing dates
const before = new Date('Febbraio 1 2024 12:00:00');

console.log(dateFns.formatDistance(now, before, {
    addSuffix: true
}));