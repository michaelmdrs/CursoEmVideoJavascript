function gerar() {
    let number = Number(document.getElementById('number').value)
    let res = document.getElementById('txtres')

    if (number <= 0) {
        alert('[ERRO] Digite um número válido')
    } else {
        res.innerHTML = ''
        for (let count = 1; count <= 10; count++) {
            let item = document.createElement('option')
            item.text = `${number} x ${count} = ${number * count}`
            res.appendChild(item)
        }
    }
}
/*
for(var count=1; count<=10 ; count++)
   document.write("3 x "+count+" = " + (3*count) + "<br />");
*/