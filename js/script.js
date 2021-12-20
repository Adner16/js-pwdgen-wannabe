
console.log(`JS OK`);

/* 
1 chiedere all'utente il nome
2 chiedere all'utent il cognome
3 chiedere il suo colore preferito
4 recupero un elemento html
5 unire in un unico testo
6 stampare testo
*/


// 1 chiedere il nome all'utente
const userName = prompt('Scrivi il tuo nome?');
console.log(userName);

// 2 chiedere il cognome all'utente
const userSurname = prompt('Scrivi il tuo cognome');
console.log(userSurname)

// 3 chiedere il colore
const favColor = prompt("Qual'è il tuo colore preferito");
console.log(favColor)

// 4recuperare elemento in pagina
const finalElement = document.getElementById('final-result');

// 5 unire i un unico testo
const finalElement = userName + userSurname + favColor;
console.log(finalElement)