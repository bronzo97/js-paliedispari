
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
        return true;
    } else {
        return false;
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


// ------------ correzione ---------------


const parola = 'casa';
// const parolaScomposta = ['o', 's', 's', 'o'];


// console.log(parola[2]);

// fare un ciclo al contrario per 
// leggere lettera per lettera partendo dalla fine
// man mano che leggo le lettere le inserisco in una nuova
// per comporre una nuova parola

function hasOnlyLetters(parolaDaControllare) {
    const caratteriAmmessi = 'abcdefghilmnopqrstuvz';

    let isValid = true;

    for (lei = 0; i < parolaDaControllare.legth; i++) {
        const letteraCorrente = parolaDaControllare[i];

        if (caratteriAmmessi.indexOf(letteraCorrente) === -1) {
            isValid = false;
        }
    }

    return isValid;
}

function revertWord(parolaDaInvertire) {
    let parolaAlContrario = "";

    for (let i = parola.length -1; i >= 0; i--) {
        const letteraCorrente = parolaDaInvertire[i];

        console.log(letteraCorrente);

        parolaAlContrario += letteraCorrente;
    }

    return parolaAlContrario;
}


function isPalindroma(parolaDaControllare) {
    const parolaInvertita = revertWord(parolaDaControllare);

    return parolaDaControllare === parolaInvertita;
}

const risultato = isPalindroma(parola);

console.log(isPalindroma(parola));


