function verificar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if (inicio == 0 || fim == 0 || passo == 0) {
        alert('[ERROR] digite os valores!')
        res.innerHTML = 'Impossível contar'
    }else {
        res.innerHTML = 'Contando: <br>'

        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        // Contagem crescente
        if(inicio < fim) {
            for (var count = inicio; count <= fim; count += passo) {
                res.innerHTML += `${count} \u{1F449}`
            }
        }else {
            // Contagem regressiva
            for (var count = inicio; count >= fim; count -= passo) {
                res.innerHTML += `${count} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}