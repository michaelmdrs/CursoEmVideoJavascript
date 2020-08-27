function somar() {
    var numero1 = document.getElementById('txtn1')
    var numero2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')

    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var soma = n1 + n2

    res.innerHTML = `A soma de ${n1} e ${n2} é igual a <strong>${soma}.</strong>`
}