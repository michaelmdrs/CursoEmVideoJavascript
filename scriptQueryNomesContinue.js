let listaDeNomes = ['Néfi', 'Nara', 'Patrícia', 'Michael', 'Família']
let buscar = 'Néfi'

for(let i = 0; i < listaDeNomes.length; i++) {
  if(listaDeNomes[i] == buscar) {
    continue
  }
  console.log(`Nomes localizado: ${listaDeNomes[i]}`)
}