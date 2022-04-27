//Programa que faz uma troca de valor entre variáveis

let a = 7
let b = 94

console.log("A: " + a)
console.log("B: " + b)

//troca usando auxiliar
//let auxiliar = b
//b = a
//a = auxiliar

//Troca usando array
[a, b] = [b, a]

console.log("A: " + a)
console.log("B: " + b)


