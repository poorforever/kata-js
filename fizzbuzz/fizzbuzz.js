export function fizzBuzz(n) {
    return Array.from({ length: n }, (a, i) => i+1)
        .map(mapFizzBuzz);
}

function mapFizzBuzz(i) {
    if(i % 5 === 0 && i % 3 === 0) {
        return "FizzBuzz";
    }

    if(i % 3 === 0) {
        return "Fizz";
    }

    if(i % 5 === 0) {
        return "Buzz";
    }

    return ""+i;
}