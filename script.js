// LocalStorage = Stocké dans le navigateur même après qu'il soit fermé.
// SessionStorage = Stocké dans le navigateur pendant la session.

// Les cookies ???


// setItem([clé],[valeur]) / getItem([clé]) / removeItem([clé]) 
// clear() : supprime tout 
// key([index]) : obtenir la clé à l'index donné
// length : obtenir nombre d'éléments stockés


// si le nom est déjà stocké
if (localStorage.getItem('name')) {

}
else { 
    // Demander le nom
    let name = prompt('Quel est votre nom ?');
    localStorage.setItem('name', name);
    document.body.append('Bonjour ' + name);
}


// créer un localStorage
// localStorage.setItem('name', 'John');


// créer un sessionStorage
// sessionStorage.setItem('name', 'John');