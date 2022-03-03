const prompt = require('prompt-sync')();


console.log ("\tMenu de Opções")
console.log ("\tEscolha: ")
console.log ("1 para Vasco")
console.log ("2 para Flamengo")
console.log ("3 para Palmeiras")
console.log ("4 para São Paulo")

let escolha = prompt("Digite a sua escolha: ")

switch(escolha){
case ('1'):
    console.log("A opção 1: Vasco, foi escolhida.")
    break
case ('2'):
    console.log("A opção 2: Flamengo, foi escolhida.")
    break
case ('3'):
    console.log("A opção 3: Palmeiras, foi escolhida.")   
    break
case ('4'):
    console.log("A opção 4: São Paulo, foi escolhida.") 
    break
default:
    console.log("Você digitou uma opção inválida.")
}
