// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const arr = [1,2,3,4,1,34,4];
let som = 0;

for(let i=0 ; i<arr.length ; i++){
    if(((i+1) % 2) === 1){
        som += arr[i];
    }
}

console.log(som);