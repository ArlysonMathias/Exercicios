const prompt = require("prompt-sync")();

let valores = [];

let escolha = " ";
do {
  for (let i = 0; i <= valores.length; i++) {
    numero = parseInt(prompt("Informe um valor para adicionar a lista: "));
    if (numero == valores[i]) {
      console.log("O número ja está na lista.");
    } else {
      valores.push(numero);
      escolha = prompt("Deseja adicionar outro número? S ou N: ");
      if (escolha != 'S' | escolha != 's'){
        break
      }
    }
  }
  
} while ((escolha == "S") | (escolha == "s"));

// function comparar(a,b){
//   return a -b;
// }

console.log(`Lista normal: ${valores}`)
console.log(`Lista ordenada ${valores.sort()}`)
