function fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))

/**
 * Fatoração
 * 5! = 5 * 4 * 3 * 2 * 1
 * 5! = 5 * 4
 * 
 * n! = n * (n-1)
 * 1! = 1
 */