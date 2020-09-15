function verificar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if (inicio <= 0 || fim <= 0 || passo <= 0) {
        alert('[ERROR] preencha os valores e tente novamente!')
        res.innerHTML = 'Impossível contar!'
    }else {
        if (passo == 0) {
            passo = 1
        }
        res.innerHTML = 'Contando: <br>'
        // Contador progressivo
        if (inicio < fim) {
            for (var count = inicio; count <= fim; count += passo) {
                res.innerHTML += `${count} \u{1F449} `
            }
        }else {
            // contador regressivo
            for(var count = inicio; count >= fim; count -= passo) {
                res.innerHTML += `${count} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{2714}`
    }
}