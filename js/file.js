

const name = prompt('Inserisci il tuo nome');
const cognome = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');

const date = name + ' ' + cognome + ' ' + color;

document.getElementById('info_user').innerHTML=  ' i dati dell\'utente sono: ' + date;