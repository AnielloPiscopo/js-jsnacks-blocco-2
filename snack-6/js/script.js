// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const numberList = [1,2,3,4,1,34,4];
let oddNumberSum = 0;

for(let i=0 ; i<numberList.length ; i++){
    if(((i+1) % 2) === 1){
        oddNumberSum += numberList[i];
    }
}

console.log(oddNumberSum);