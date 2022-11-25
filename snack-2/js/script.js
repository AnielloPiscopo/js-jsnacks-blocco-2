// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let userNumber = prompt('Inserisci un numero');
userNumber = userNumber.replace(/\s/g,'');

if(userNumber === null){
    alert('Il programma è stato annullato');
}
else if(userNumber === ''){
    alert('Non hai digitato alcun valore');
}
else if(!isFinite(userNumber)){
    alert('ATTENZIONE!\nPuoi digitare solo valori numerici');
}
else{
    userNumber = parseFloat(userNumber);

    if((userNumber - Math.floor(userNumber)) !== 0){
        alert('Il valore non può essere un numero decimale');
    }

    else if(userNumber<0){
        alert('ATTENZIONE\N L\'età non può essere un valore negativo');
    }

    else if(userNumber%2 === 0){
        alert(userNumber);
    }

    else if(userNumber%2 === 1){
        alert(userNumber + 1);
    }
}