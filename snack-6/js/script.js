// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const numberList = [1,2,3,4,1,34,4];
let evenNumberSum = 0;
let oddNumberSum = 0;

for(let i=0 ; i<numberList.length ; i+=2){
    evenNumberSum += numberList[i];
}

for(let i=1 ; i<numberList.length ; i+=2){
    oddNumberSum += numberList[i];
}

console.log(evenNumberSum);
console.log(oddNumberSum);