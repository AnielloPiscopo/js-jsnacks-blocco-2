/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];
const guests = [];

let numberOfGuests = prompt('Quanti invitati ci sono?');

numberOfGuests = controlValue(numberOfGuests);

while((numberOfGuests - Math.floor(numberOfGuests)) || numberOfGuests<0){
    if((numberOfGuests - Math.floor(numberOfGuests)) !== 0){
        alert('ATTENZIONE\nIl valore non può essere decimale');
    }
    
    else if(numberOfGuests<0){
        alert('ATTENZIONE\nIl valore non può essere negativo');
    }

    numberOfGuests = prompt('Rdigita il valore');
    numberOfGuests = controlValue(numberOfGuests);
}

for(let i=0 ; i<numberOfGuests ; i++){
    const guestName = names[Math.floor(Math.random() * names.length)];
    const guestLastname = lastnames[Math.floor(Math.random() * lastnames.length)];
    const guest = guestName + ' ' + guestLastname;
    console.log(guest);
    guests.push(guest);
}

console.log(guests);






function controlValue(a){
    if(!Number.isNaN(a)){
        while(!isFinite(a)){
            alert('Puoi digitare solo numeri');
            a = prompt('Ridigita il valore');
        }

        if(a === null){
            alert('Il programma è stato annullato');
            return a;
        }
    
        a = a.replace(/\s/g,'');
    
        if(a === ''){
            alert('Non hai digitato alcun valore , quindi non ci sono invitati');
            return a;
        }
    }
    
    return parseFloat(a);
}