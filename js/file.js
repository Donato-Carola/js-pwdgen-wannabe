

const name = prompt('Inserisci il tuo nome');
const cognome = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');
const number = 21;

//const date = name + cognome + color + number;

const date = (`${name}${cognome}${color}${number}`) ;

document.getElementById('text').innerHTML=  ' La password dell\'utente è: ' ;
document.getElementById('date_user').innerHTML=  date; 
