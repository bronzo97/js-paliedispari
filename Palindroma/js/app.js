
let wordReverse = [];

let word = prompt('Dimmi una parola');


function palindrome() {

    let wordDecomposed = word.split("");
    console.log(wordDecomposed);

    for(let i = word.length - 1; i >= 0; i--) {
        wordReverse.push(wordDecomposed[i]);
    }

    console.log(wordReverse);

    let wordReverseJoin = wordReverse.join('');
    
    if (word === wordReverseJoin) {
        console.log('è palindroma');
    } else {
        console.log('non è palindroma');

    }
    
}

console.log(palindrome());

// chiedere la parola all'utante
// salvare la parola
// scomporre la parola
// leggere la parola al contrario
// creare un array con la parola al contrario
// controllare se parola normale è uguale alla parola rovesciata
// mostrare il risultato