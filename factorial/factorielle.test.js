import {factorial} from "./factorielle.js";

describe('should calculate factorial', () => {
    test('n = 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('n = 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('n = 2', () => {
        expect(factorial(2)).toBe(2);
    });

    test('n = 3', () => {
        expect(factorial(3)).toBe(6);
    });

    test('n = 5', () => {
        expect(factorial(5)).toBe(120);
    });

    test('n = 10', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('n = -1', () => {
        try {
            factorial(-1)
        } catch (error) {
            expect(error).toEqual(new Error('n must be a positive integer'));
        }
    });
})