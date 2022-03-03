const prompt = require('prompt-sync')();


let nota = parseFloat(prompt("Informe a nota do aluno: "))

if ( nota >= 0 && nota <=10){

    if (nota >=0 && nota<6){
        console.log(`O aluno tirou ${nota} então sua média é F.`)
    }else if(nota>= 6 && nota<7){
        console.log(`O aluno tirou ${nota} então sua média é D.`)
    }else if(nota>= 7 && nota<8){
        console.log(`O aluno tirou ${nota} então sua média é C.`)
    }else if(nota>= 8 && nota<9){
        console.log(`O aluno tirou ${nota} então sua média é B.`)
    }else{
        console.log(`O aluno tirou ${nota} então sua média é A.`)
    }
}else{
    console.log(`Você digitou a nota ${nota} que é uma nota inválida. `)
    console.log("Por favor, tente novamente.")
}

