function calcular() {
    var txtvel = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtvel.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h<strong>.</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você ultrapassou a velocidade permitida. <strong>MULTADO!</strong></p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`

}