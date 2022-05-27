// chiedere all'utente di scegliere tra pari o dispari 
// chiedere all'utente un numero da 1 a 6
// generare un numero random per il computer - Function
// sommare il numero dell'utente con quello del conputer
// controlliamo se la somma dei due numeri è pari o dispari - Function
// dichiariamo chi ha vinto in base al risultato


const oddEven = prompt('Scegli pari o dispari');
const number = parseInt(prompt('Scegli un numero tra 1 e 5'));


const randomNumber = Math.floor(Math.random() * 5) + 1;



const sum = number + randomNumber;

console.log(`Il tuo numero è: ${number}`);
console.log(`Il numeor del computer è: ${randomNumber}`);
console.log(`La somma è: ${sum}`);

if (sum % 2 === 0) {
    console.log('numero pari'); 
    var odd = `pari`;
} else {
    console.log('numero dispari');
    var even = `dispari`;
}

console.log(`hai scelto ${oddEven}`);


if (odd === oddEven){
    console.log('hai vinto');
} else if (even === oddEven) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}

