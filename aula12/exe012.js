var horaAgora = new Date()
var hora = horaAgora.getHours()

console.log(`Agora são exatamente ${hora} hora.`)

if (hora >= 0 && hora < 4) {
    console.log('Boa madrugada!')
} else if (hora >= 4 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora < 23) {
    console.log('Boa noite!')
}