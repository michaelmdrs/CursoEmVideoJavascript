// Variaveis para desenvolver o escopo do código.
let codProduto = document.querySelector('input#codProduto')
let descProduto = document.querySelector('input#txtPedido')
let descPedido = document.querySelector('textarea#pedido')
let resPedido = document.querySelector('div#res')
let valores = []

function adicionar() {
    if (Number(codProduto.value) && Number(codProduto.value), valores) {
        descPedido.innerHTML = ''
        descPedido.innerHTML += `Item ${descProduto.value} | Cod: ${codProduto.value}, adicionado.`
    } else {
        alert('O código do produto é inválido ou já consta na lista!')
    }
}

function enviarPedido() {
    
}