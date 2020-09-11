function verificar() {
    var nome = document.getElementById('txtnome')
    var nota1 = Number(document.getElementById('nota1').value)
    var nota2 = Number(document.getElementById('nota2').value)
    var nota3 = Number(document.getElementById('nota3').value)
    var nota4 = Number(document.getElementById('nota4').value)

    var media = Number(nota1 + nota2 + nota3 + nota4) / 4

    var resultado = document.getElementById('resultado').setAttribute('value', resultado)

    if (nome.value.length == 0) {
        alert('[ATENÇÃO]! Preencha o campo corretamente e tente novamente.')
    } else {
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'emoji')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (media >= 10) {
                img.setAttribute('src', 'assets/emoji_nerd.png')
            } else if (media >= 7 || media <= 9) {
                img.setAttribute('src', 'assets/emoji_aprovado.png')
            } else if (media >= 5 || media < 7) {
                img.setAttribute('src', 'assets/emoji_reprovado.png')
            } else {
                img.setAttribute('src', 'assets/emoji_reprovado.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (media >= 10) {
                img.setAttribute('src', 'assets/emoji_nerd.png')
            } else if (media >= 7 || media <= 9) {
                img.setAttribute('src', 'assets/emoji_aprovado.png')
            } else if (media >= 5 || media < 7) {
                img.setAttribute('src', 'assets/emoji_reprovado.png')
            } else {
                img.setAttribute('src', 'assets/emoji_reprovado.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `MEDIA ${media}`
        resultado.appendChild(img)
    }
}