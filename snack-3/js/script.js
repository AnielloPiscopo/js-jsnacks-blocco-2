// Calcola la somma dei primi 10 numeri di un array.
const listOfNumbers = [1,3,24,123,4324,75,98,234,4,3434,5,2372347,23434,23453,845345,234];


let somma = 0;
for(let i=0 ; i<listOfNumbers.length ; i++){
    somma += listOfNumbers[i];
}

console.log(somma);