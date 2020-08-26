function clicar() {
    let quad = document.getElementsByClassName(.
        'area')
    quad.innerText = 'Clicou!'
    quad.style.background = 'red'
    quad.addEventListener('click', clicar)
}