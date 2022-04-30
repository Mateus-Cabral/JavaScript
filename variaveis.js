//declaração de variáveis em JavaScript
//var <nome_var> = <valor>

//forma mais "atual":
//let <nome_var> = <valor>

//atribuição é feita com =


var nome = "Caneta"
var quantidade = 10

let preco = 6.4
let imposto = 1.5
let precoTotal = (preco + imposto) * quantidade


//valor literal = valor sem variável anexada
console.log("Literal")
console.log(nome)
console.log(quantidade)
console.log(preco)
console.log(imposto)
console.log(precoTotal)


//alteração de variáveis é feita sem o var
nome = "Caneta BIC"
console.log(nome)


//tipos de variáveis:
let name = "Hairo Newdawn" //string
console.log(typeof name)


let salario = 4578.32 //numérico
console.log(typeof salario)
salario = 4500 // numérico
console.log(typeof salario)

let teste = true //boolean
console.log(typeof teste)


let matriz =  [0, 1, 2] //objeto
console.log(typeof matriz)


//declaração de constantes
//constantes são impossíveis de serem alteradas
const constante = 1
//constante = 0 
//console.log(constante)
//essa reatribuição imprime um erro na tela
