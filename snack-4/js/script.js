let exponent = 0;
let baseNumber = 2;
while(baseNumber !== 1000){
    baseNumber = baseNumber * exponent;
    exponent++;
    console.log(baseNumber);
}