function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','criança.png')
            } else if (idade >12 && idade < 21){
                //jovem
                img.setAttribute('src','foto-homen02.png')
            }
            else if(idade < 50 ){
                //adulto
                img.setAttribute('src','foto-homen02.png')
            } else {
                //idoso
                img.setAttribute('src','imagem-idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
               img.setAttribute('src','criança.png')
            }else if (idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src','imagem02MLR.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagem02MLR.png')
            }else{
                //idoso
                img.setAttribute('src','idoso01.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero}, com: ${idade} anos`
        res.appendChild(img)
    }
}