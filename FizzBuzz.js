/* 

Escribir un algoritmo que: imprima los numeros del 1 al 100, con la condicion que si el numero a imprimir es multiplo de 3, imprima el string 'Fizz, si el numero es multiplo de 5 impirma: 'Buzz', y si es multiplo de ambos imprima: 'FizzBuzz'

 */

function generarNumeros(inicio,final){
    const arr = new Array()
    for(let i = inicio; i <= final; i++){
        arr.push(i)
    }
    return arr
}

function fizzBuzz(val){
    if (val % 3 === 0 && val % 5 ===0){
        return 'FizzBuzz'
    }
    if (val % 3 === 0){
        return 'Fizz'
    }
    if (val % 5 === 0){
        return 'Buzz'
    }
    return val
}

function imprimirPantalla(arr){
    arr.forEach((el) => console.log(fizzBuzz(el)))
}

const arr = generarNumeros(1,100)
imprimirPantalla(arr)

