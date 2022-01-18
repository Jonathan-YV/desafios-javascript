/* 
1) Programar una función que cuente el numero de caracteres de una cadena de texto
*/

function contarCaracteres(cadena){
    console.log(cadena.length)
}

contarCaracteres('Hola Mundo')

/* 
2) Programa una función que te devulva el texto recortado segun el numero de caracteres indicados
*/

function cortarPalabra(cadena,num){
    console.log(cadena.split('').slice(0,num).join(''))
}

cortarPalabra('HolaMundo',4)

/* 
Programa una función que dado un string te devulve un array de textos separados por cierto caracter
*/

function separarCaracter(cadena,caracter){
    console.log(cadena.split(caracter))
}

separarCaracter('Ho-la-mundo-prueba','-')

/* 
Programa una función que repita un texto X veces
*/

function repetirCadena(cadena,num){
    let sumaCadena = cadena;
    for(let i=0; i<num - 1; i++){
        sumaCadena += cadena
    }
    console.log(sumaCadena)
}

repetirCadena('Hola mundo ', 3)