const prompt = require("prompt-sync")();





let valor = parseInt(prompt("Informe o valor que deseja sacar: R$  "))

let total = valor
let cont100 = 0
let cont50 = 0
let cont10 = 0
let cont5 = 0
let cont1= 0

while (total>= 100){
    total =total -100
    cont100 ++
    
}
while (total>= 50){
  total = total -50
  cont50 ++
  
}
while (total>= 10){
  total =total -10
  cont10 ++
  
}
while (total>=1){
  total =total -1
  cont1 ++
  
}

console.log("\t Valor a receber:")
console.log(`${cont100} notas de 100.`)
console.log(`${cont50} notas de 50.`)
console.log(`${cont10} notas de 10.`)
console.log(`${cont1} notas de 1.`)

