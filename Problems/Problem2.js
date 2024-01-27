let entradaS = "HoLa";
let entradaS1 ="hhhooooollllllaaaaaa";
let entradaS2 ="hhhlllllloooollllla";

function validation(palabra){
    const palabraCorrecta = "hola";
    const palabraMinuscula = palabra.toLowerCase();

    let palabraSinRepetir = '';
    for (let i = 0; i < palabraMinuscula.length; i++) {
        if(palabraMinuscula[i] !== palabraMinuscula[i + 1]){
            palabraSinRepetir += palabraMinuscula[i]
        }
    }
    
    if(palabraSinRepetir === palabraCorrecta){
        return "VERDADERO"
    }else{
        return "FALSO";
    }

}

console.log(validation(entradaS));
console.log(validation(entradaS1));
console.log(validation(entradaS2));

