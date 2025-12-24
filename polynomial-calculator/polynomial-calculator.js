export function evaluate(polynomial, x) {
    if(polynomial.length === 0) {
        throw new Error('Cannot evaluate empty polynomial')
    }

    let result = 0;

    for(let i = 0; i < polynomial.length - 1; i++) {
        result += polynomial[i];
        result = result * x;
    }

    result += polynomial[polynomial.length - 1];

    return result;
}