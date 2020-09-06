function verificar() {
    var nome = document.getElementById('txtnome')
    var nota1 = document.getElementById('nota1')
    var nota2 = document.getElementById('nota2')
    var nota3 = document.getElementById('nota3')
    var nota4 = document.getElementById('nota4')
    var media = Number(nota1 + nota2 + nota3 + nota4) / 4
    var resultado = document.getElementById('resultado')

    if (nome.value.length == 0) {
        alert('[ATENÇÃO]! Preencha o campo corretamente e tente novamente.')
    }else{
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'emoji')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (media >= 10) {
                img.setAttribute('src', 'assets/emoji_nerd.png')
            }else if (media >= 7 || media <= 9) {
                img.setAttribute('src', 'assets/emoji_aprovado.png')
            }else if (media >= 5 || media < 7) {
                img.setAttribute('src', 'assets/emoji_reprovado.png')
            }else {
                img.setAttribute('src', 'assets/emoji_reprovado.png')
            }
        }else if (sexo[1].checked) {
            genero = 'Mulher'
            if (media >= 10) {
                img.setAttribute('src', 'assets/emoji_nerd.png')
            }else if (media >= 7 || media <= 9) {
                img.setAttribute('src', 'assets/emoji_aprovado.png')
            }else if (media >= 5 || media < 7) {
                img.setAttribute('src', 'assets/emoji_reprovado.png')
            }else {
                img.setAttribute('src', 'assets/emoji_reprovado.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `REPROVADO ${media}`
        resultado.appendChild(img)
    }
}