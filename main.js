// *Snack1*
// Crea un array vuoto
// e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.
// *Snack4 (Bonus)*
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.


// SNACK 1 //

// let arrayEmpty = [];
// let i = 0;

// while (i < 50 ){
//     let numSum = parseInt(prompt('Inserisci un numero'));
//     i += numSum;
//     arrayEmpty.push(numSum);
//     i++
//     console.log(arrayEmpty)

// }



// SNACK 2 //

// let i = 0;
// let sum = 0;

// while ( i < 5) {
//     let num = parseInt(prompt('Inserisci un numero'));
//     sum += num;
//     i++


// }

// console.log(sum)



// SNACK 3 (BONUS) //

// let n = parseInt(prompt('Inserisci Numero N'));
// let nArray = [];



// SNACK 4 (BONUS)

let invitati = ['Ale', 'Luca', 'Gervaso', 'Eufemio'];
let nameGuest = prompt("Inserisci il tuo nome: ");
let i=0;

while(true){
    
    if(nameGuest == invitati[i]){
        console.log('Il nome è sulla lista');
        break;
    
    } else {
        console.log('nome non in lista');
        break;
    }
    i++;
}














