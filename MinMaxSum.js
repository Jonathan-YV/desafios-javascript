/* 

Apartir de un arreglo, devolver el valor minimo, el maximo y la suma de los elementos
Input: [5,2,1,8,10]

*/

function minMaxSumV1(arr){
    const val = {
        min: Math.min(...arr),
        max: Math.max(...arr),
        sum: arr.reduce((acc,valor) => acc + valor,0)
    }
    console.log(val)
}

function minMaxSumV2(arr){
    const val = arr.reduce((acc,valor) =>{
        if (acc.min > valor ) acc.min = valor
        if (acc.max < valor) acc.max = valor
        acc.sum += valor
        return acc
    }, {min:arr[0],max:arr[0],sum:0})
    console.log(val)
}

function minMaxSumV3(arr){
    const val ={
        min : arr[0],
        max : arr[0],
        sum : arr[0]
    }
    for(let i=1; i<arr.length; i++){
        if(val.min > arr[i]) val.min = arr[i]
        if(val.max < arr[i]) val.max = arr[i]
        val.sum += arr[i]
    }
    console.log(val)
}

const arreglo = new Array(-5,2,-1,18,10)

minMaxSumV1(arreglo)
minMaxSumV2(arreglo)
minMaxSumV3(arreglo)

