/* 
    Ora che abbiamo la possibilità di creare il nostro oggetto User, assegnandogli proprietà con la funzione costruttore e metodi tramite il suo prototipo, potremmo voler creare l'oggetto Admin.

    Con le classi far ereditare metodi e parametri a una sottoclasse è facile. Ma come facciamo senza usare le classi?

    Abbiamo intanto bisogno di un costruttore per Admin.

    * Far vedere l'ereditarietà di new Array, new Object() e new XMLHttpRequest *
*/
function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.login = function() {
    console.log(`${this.username} ha effettuato il login`);
    return this;
};

User.prototype.logout = function() {
    console.log(`${this.username} ha effettuato il logout`);
    return this;
};

function Admin(username, email, title) {
    // this.username = username;
    // this.email = email;
    // Senza le classi non abbiamo accesso alla funzione super(), quindi per prenderci il costruttore di User dobbiamo usare un altro metodo.
    // Utilizziamo il metodo call() sulla funzione costruttore User per richiamarla. Questo richiede come argomenti la parola chiave this, per indicare il nuovo oggetto che stiamo creando, e tutti i parametri che ci interessano, che verranno assegnati a this, ovvero al new Admin.
    User.call(this, username, email);
    this.title = title;
}

// Admin adesso esiste e ha tutte le proprietà che vogliamo, ma non possiede i metodi di User. Quindi dobbiamo settare il prototype di Admin in modo che sia uguale a quello di User.
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function() {
    // elimina un utente
}

const userOne = new User('Link', 'link@kokiri.hy');
const userTwo = new User('Zelda', 'zelda@hyrule.hy');
const userThree = new Admin('Ganon', 'ganon@castle.hy', 'admin');

console.log(userOne, userTwo, userThree);
// userOne.login();
// userOne.logout();
userOne.login().logout();