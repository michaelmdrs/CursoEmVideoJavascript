function verificar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if (inicio < 0) {
        document.write('Valor inválido.')
    } 
}