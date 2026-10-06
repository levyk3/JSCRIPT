var idade = 70
console.log(`Você têm ${idade} anos`)
if (idade > 18 && idade <= 64 ){
    console.log('Voto obrigatório')
    } else if (idade >= 16 &&  idade <18) {
        console.log('Voto Opcinal')
    } else if (idade > 64){
        console.log('Voto Opcinal')
    } else if ( idade < 16){
        console.log('Voce não pode votar')
    }
