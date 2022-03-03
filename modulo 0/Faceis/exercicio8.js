const prompt = require('prompt-sync')();



const dolar = 5.21
const euro = 5.90
const libraEsterlina = 7.06
const  dolarCanadense = 4.10
const pesoArgentino = 0.049
const pesoChileno = 0.0064

let valorConverter = parseFloat(prompt("Informe o valor a ser convertido: "))

 

console.log("O valor informado convertido para Dolar é: ",((valorConverter/ dolar).toFixed(2)))
console.log("O valor informado convertido para Euro é: ",((valorConverter/ euro).toFixed(2)))
console.log("O valor informado convertido para Libra Esterlina é: ",((valorConverter/ libraEsterlina).toFixed(2)))
console.log("O valor informado convertido para Dolar Canadense é: ",((valorConverter/ dolarCanadense ).toFixed(2)))
console.log("O valor informado convertido para Peso Argentino é: ",((valorConverter/ pesoArgentino).toFixed(2)))
console.log("O valor informado convertido para Pelo Chileno é: ",((valorConverter/ pesoChileno).toFixed(2)))