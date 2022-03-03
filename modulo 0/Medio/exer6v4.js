const prompt = require("prompt-sync")();

//Exercício sem usar o laço while
// Criar um vetor e passar um numero pra ele, sendo que esse numero não pode repetir

let vetor = [];

function adcionarNum() {
  for (let i = 0; i <= vetor.length; i++) {
    numero = parseInt(prompt("Informe um valor para adicionar a lista: "));
    if (numero == vetor[i]) {
      console.log("O número ja está na lista.");
    } else {
      vetor.push(numero);
    }
    console.log("Deseja adcionar outro numero para o vetor? ");
    let opcao = prompt("S ou N? ");
    opcao = opcao.toUpperCase();
    if (opcao != "S") {
      return "Fim."
    } else {
      return adcionarNum()
      
    }
  }
}



adcionarNum();

function compara(a,b){
  return a-b
}

console.log(`Lista normal: ${vetor}`)
console.log(`Lista ordenada ${vetor.sort(compara)}`)
