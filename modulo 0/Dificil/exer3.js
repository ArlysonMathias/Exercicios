const prompt = require("prompt-sync")();


let numComputador = Math.floor(Math.random() * (3) + 1)

console.log("\t Bem vindo ao jogo.")
console.log("\t Tente acertar o numero do computador informando um numero de 0 a 10.")
let resposta = parseInt(prompt("Informe seu numero: "))

if (numComputador == resposta){
    console.log(`O computador informou o numero ${numComputador} e você o numero ${resposta}. Parabéns, você ganhou.`)
}else{
    console.log(`Você perdeu. Computador : ${numComputador}, seu numero: ${resposta}`)
}