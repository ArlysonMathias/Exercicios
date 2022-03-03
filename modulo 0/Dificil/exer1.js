const prompt = require("prompt-sync")();

let largura = parseFloat(prompt("Digite a largura do terreno: "))
let comprimento = parseFloat(prompt("Digite o comprimento do terreno: "))

let area = largura * comprimento

console.log(`A área do terreno é de : ${area} metros`)
