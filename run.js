let myLib = require("./index");

let sumatorio= myLib.suma;
let restar = myLib.resta;
let multiplicar = myLib.multiplicacion;
let dividir = myLib.division;
let elevar2 = myLib.cuadrado;



console.log(sumatorio(10,5));
console.log(restar(10,5));
console.log(multiplicar(10,5));
console.log(dividir(10,5));
console.log(elevar2(5));