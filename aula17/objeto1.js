let amigo = {nome: 'Néfi', sexo: 'M', peso: 50.7, idade: '15', 
engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(4)
console.log(`${amigo.nome}, pesa ${amigo.peso}kg`)