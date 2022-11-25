// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.
const arr = [];

for(let i=0 ; i<6; i++){
    let number = parseInt(prompt('Inserisci il tuo numero'));
    if(number % 2 === 1){
        arr.push(number)   
    }
}
console.log(arr);