/* 
    Come detto, possiamo aggiungere un metodo direttamente a una funzione costruttore, ma non è il modo migliore.
    Sarebbe bene aggiungere i metodi al 'prototipo.'

    Ogni volta che creiamo un oggetto in JS, come una Date, un Array o un Object Literal, tutti i suoi metodi sono all'interno della proprietà Prototype.*

    Sarebbe corretto fare in modo che anche gli oggetti creati da noi si comportassero così.

    Usando class ci pensa JS a farlo automaticamente (anche perché i metodi non li definiamo all'interno della funzione costruttore).
*/
// *
const nums = [1, 2, 3, 4, 5];
console.log(nums);

function User(username, email) {
    this.username = username;
    this.email = email;
    // Così facendo il metodo login non viene salvato nella proprietà Prototype, ma direttamente nell'oggetto
    // this.login = function() {
    //     console.log(`${this.username} ha effettuato il login`);
    // }
}

// Esempio direttamente in console Array.prototype e di User.prototype

// Aggiungiamo quindi i metodi al nostro User.prototype invece che nel costruttore dell'oggetto User
User.prototype.login = function() {
    console.log(`${this.username} ha effettuato il login`);
    // come nelle classi, per poter concatenare i metodi tra loro, dobbiamo fargli restituire l'oggetto stesso
    return this;
};

User.prototype.logout = function() {
    console.log(`${this.username} ha effettuato il logout`);
    return this;
};

const userOne = new User('Link', 'link@kokiri.hy');
const userTwo = new User('Zelda', 'zelda@hyrule.hy');

console.log(userOne, userTwo);
// userOne.login();
// userOne.logout();
userOne.login().logout();