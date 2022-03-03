
const prompt = require("prompt-sync")();
// jogo de dados
//let = nome
let lista = []
let dado = Math.floor(Math.random() *6 + 1)
let jogadores = []
console.log(dado)

function numValido() {
    jogadas = parseInt(prompt("Quantas rodadas deseja jogar? "));
    if (isNaN(jogadas)) {
      console.log("Não é um número.");
      return numValido();
    } else {
      return jogadas;
    }
}

function jogadorValido() {
    jogadores = parseInt(prompt("Quantos jogadores irão jogar? "));
    if (isNaN(jogadores)) {
      console.log("Não é um número.");
      return numValido();
    } else {
      return jogadores;
    }
}

numValido()
jogadorValido()

for (i =1; i<=jogadores;i++){
   
         
    const informacao = {nome: '', resultado: [],pontos: 0 }
    const nomejogador = prompt(`Qual o nome do ${i} jogador? `)
    informacao.nome = nomejogador
    numero = Math.floor(Math.random() *6 + 1)
    informacao.resultado = numero
    lista.push(informacao)
    
    
}

console.log(lista   )

