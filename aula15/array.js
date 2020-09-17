let num = [5, 8, 2, 9, 3]
num.sort()
/*
num.sort() // Ordena os elementos no array
num.push(45) // Adiciona um elemento ao array
console.log(`O vetor agora tem ${num.length} posições`)
console.log('----------------------------------------')

for(i = 0; i < num.length; i++) {
    console.log(`A posição ${i}, tem os valores ${num[i]}`)
}
*/

// For in

for (const i in num) {
    console.log(`A posição ${i}, tem os valores ${num[i]}`)
}

let seq = num.indexOf(9)

if(seq < 0) {
    console.log('O valor não se encontra no array.')
} else {
    console.log(`O valor está na posição ${seq}`)
}