const prompt = require('prompt-sync')();



let valor = parseInt(prompt("Digite um número: "))

if (valor == 0){
    console.log("Você digitou o numero 0. Por favor, digite outro número.")

}else if (valor >0){
    console.log(`Você digitou o numero ${valor} e esse número é um inteiro positivo.`)
}else{
    console.log(`Você digitou o numero ${valor} e esse número é um inteiro negativo.`)
}