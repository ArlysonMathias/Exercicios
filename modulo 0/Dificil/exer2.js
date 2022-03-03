const prompt = require("prompt-sync")();


const anoAtual = 2022

let anoNasc = parseInt(prompt("Informe o seu ano de nascimento: "))

let idade = (anoAtual-anoNasc)

if (idade<0){
    console.log("Erro, a pessoa não pode ter menos de 0 anos.")
}else if (idade<16){
    console.log(`A pessoa tem ${idade} anos e portanto, não pode voltar`)
}else if(idade >=16 && idade<=17) {
    console.log(`A pessoa tem ${idade} anos e portanto, o voto é facultativo.`)
}else{
    console.log(`A pessoa tem ${idade} anos e portanto, o voto é obrigatório.`)
}