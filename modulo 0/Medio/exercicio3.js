const prompt = require('prompt-sync')();




let numero = parseInt(prompt("Digite um número: "))
let numero2 = parseInt(prompt("Digite outro número: "))

if (numero == numero2){
    console.log("Os numeros são iguais.")
}else if(numero > numero2){
    console.log(`O numero ${numero} é o maior numero digitado.`)
}