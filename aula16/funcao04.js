function fatorial(num) {
    let fat =1
    for(let count = num; count > 1; count--) {
        fat *= count
    }
    return fat
}

console.log(fatorial(5))