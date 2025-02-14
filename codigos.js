const array1 = ["hola", "mundo", "es", "una", "prueba"]
let arraySalida = []
array1.filter(element => element.length > 2).forEach(item => { arraySalida.push(item.length) })
console.log(arraySalida)


const arrayInicial = [1, 2, 5, 10, 8, 8, 1, 3, 4, 5];
const arrayFinal = [...new Set(arrayInicial)].sort((a, b) => a - b);
console.log(arrayFinal);