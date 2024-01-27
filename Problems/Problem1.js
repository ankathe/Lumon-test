let stringS = "DatoS";
let stringS1 = "lumon";
let stringS2 = "anAliTicA";

function capitalizar(palabra){
    let capitalizadaPalabra = palabra.charAt(0).toUpperCase(0) + palabra.slice(1);
    return capitalizadaPalabra;
}

console.log(capitalizar(stringS));
console.log(capitalizar(stringS1));
console.log(capitalizar(stringS2));


