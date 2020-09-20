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
        valores.push(Number(numero.value)) // adiciona elementos no array
        lista.innerHTML += `Valor ${numero.value} adicionado na lista. \n`
        res.innerHTML = '' // limpa a tela de resultado ao finalizar o cadastro
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Insira os valores e tente novamente!')
    } else {
        let total = valores.length
        let numMaior = valores[0]
        let numMenor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > numMaior)
                numMaior = valores[pos]
            if (valores[pos] < numMenor)
                numMenor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O <strong>maior</strong> valor informado foi ${numMaior}.</p>`
        res.innerHTML += `<p> O <strong>menor</strong> valor informado foi ${numMenor}.</p>`
        res.innerHTML += `<p>A <strong>soma</strong> de todos os valores foi ${soma}.</p>`
        res.innerHTML += `<p>A <strong>média</strong> dos valores digitados foi de  ${media.toFixed(2)}.`
    }
}