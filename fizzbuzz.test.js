import {fizzBuzz} from "./fizzbuzz.js";

describe('should calculate fizzbuzz array ', () => {
    test('when n = 0', () => {
        const result = fizzBuzz(0)
        expect(result).toStrictEqual([]);
    });

    test('when n = 1', () => {
        const result = fizzBuzz(1)
        expect(result).toStrictEqual(["1"]);
    });


    test('when n = 2', () => {
        const result = fizzBuzz(2)
        expect(result).toStrictEqual(["1", "2"]);
    });


    test('when n = 3', () => {
        const result = fizzBuzz(3)
        expect(result).toStrictEqual(["1", "2", "Fizz"]);
    });


    test('when n = 5', () => {
        const result = fizzBuzz(5)
        expect(result).toStrictEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });

    test('when n = 15', () => {
        const result = fizzBuzz(15)
        expect(result).toStrictEqual([
            "1","2","Fizz","4","Buzz",
            "Fizz","7","8","Fizz","Buzz",
            "11","Fizz","13","14","FizzBuzz"]);
    })

    test('when n = 50', () => {
        const result = fizzBuzz(50)
        expect(result).toStrictEqual([
            "1", "2", "Fizz", "4", "Buzz",
            "Fizz", "7", "8", "Fizz", "Buzz",
            "11", "Fizz", "13", "14", "FizzBuzz",
            "16", "17", "Fizz", "19", "Buzz",
            "Fizz", "22", "23", "Fizz", "Buzz",
            "26", "Fizz", "28", "29", "FizzBuzz",
            "31", "32", "Fizz", "34", "Buzz",
            "Fizz", "37", "38", "Fizz", "Buzz",
            "41", "Fizz", "43", "44", "FizzBuzz",
            "46", "47", "Fizz", "49", "Buzz"
        ]);
    })
})