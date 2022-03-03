const prompt = require('prompt-sync')();



let salario = parseFloat(prompt("Informe o salário do colaborador: "))


if (salario< 0){

    console.log("Informe um salário maior que 0.")
}else{
    if (salario>0 && salario<=280){
        let aumento = salario * 0.20
        console.log(`O salario do trabalhador é de ${salario}.`)
        console.log(`O trabalhador obteve um aumento de 20% equivalente a: ${aumento}.`)
        console.log(`O novo salario do trabalhador é de ${salario + aumento}.`)

    }else if(salario > 280 && salario<= 700){
        let aumento = salario * 0.15
        console.log(`O salario do trabalhador é de ${salario}.`)
        console.log(`O trabalhador obteve um aumento de 15% equivalente a: ${aumento}.`)
        console.log(`O novo salario do trabalhador é de ${salario + aumento}.`)

    }else if (salario > 700 && salario<= 1500){
        let aumento = salario * 0.10
        console.log(`O salario do trabalhador é de ${salario}.`)
        console.log(`O trabalhador obteve um aumento de 10% equivalente a: ${aumento}.`)
        console.log(`O novo salario do trabalhador é de ${salario + aumento}.`)
    }else{
        let aumento = salario * 0.05
        console.log(`O salario do trabalhador é de ${salario}.`)
        console.log(`O trabalhador obteve um aumento de 05% equivalente a: ${aumento}.`)
        console.log(`O novo salario do trabalhador é de ${salario + aumento}.`)
    }
}
    