//Programa que calcula uma equação de 2° grau usando a fórmula de bhaskara

var a = parseInt(6)
var b = parseInt(5)
var c = parseInt(-1)

var delta = parseInt(b*b - 4*a*c)

console.log(delta)
console.log(Math.sqrt(delta))

var x1 = parseFloat((-b + Math.sqrt(delta)) / (2*a))

var x2 = parseFloat((-b - Math.sqrt(delta)) / (2*a))

console.log("X1: " + x1)

console.log("X2: " + x2)