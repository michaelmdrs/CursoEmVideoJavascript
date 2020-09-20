let numero = document.querySelector('input#fnumero')
let lista = document.querySelector('textarea#listNumero')
let res = document.querySelector('div#resultadoFinal')
let valores = []

function isNumero(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, l) {
    if (l.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        lista.innerHTML += `Valor ${} adicionado na lista.`
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
}