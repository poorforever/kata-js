export function factorial (n) {
    if(n < 0)
        throw new Error('n must be a positive integer')
    if(n === 0)
        return 1
    return n * factorial(n-1)
}