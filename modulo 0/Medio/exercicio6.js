const prompt = require("prompt-sync")();

let numeros = [];

console.log("Deseja adicionar um numero na lista: ");

let escolha = prompt("S ou N: ");

while (escolha == "S") {
  let n = parseInt(prompt("Informe um numero para adicionar a lista: "));
  for (let i = 0; i <= numeros.length; i++) {
    if (numeros.length[i] == n) {
      console.log("O numero já está na lista.");
    }
    numeros.push(n);
    
  }
  console.log("Deseja adicionar um numero na lista: ");
  escolha = prompt("S ou N: ");
}

console.log(numeros)
