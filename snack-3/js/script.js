// Calcola la somma,la media e il valore massimo dei primi 10 numeri di un array.
const listOfNumbers = [1,1,1,1,99,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];


let somma = 0;
let average = 0;
const numberLimit = 10;
let maxNumber = listOfNumbers[0];

for(let i=0 ; i<numberLimit ; i++){
    somma += listOfNumbers[i];
    if(maxNumber < listOfNumbers[i]){
        maxNumber = listOfNumbers[i];
    }
}

average = somma/numberLimit;

console.log(somma);
console.log(average);
console.log(maxNumber);