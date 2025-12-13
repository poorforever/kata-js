import {evaluate} from "./polynomial-calculator.js";

describe('evaluate the polynom [] for x', () => {
    const polynomial = []
    test('should throw error if polynom is empty', () => {
        try {
            expect(evaluate(polynomial, 0)).toBe(0);
        } catch (error) {
            expect(error).toEqual(new Error('Cannot evaluate empty polynomial'));
        }

    })
})

describe('evaluate the polynom [2, 3, 4] for x', () => {
    const polynomial = [2, 3, 4];

    test('x = 0', () => {
        const value = evaluate(polynomial, 0);
        expect(value).toBe(4)
    });

    test('x = 1', () => {
        const value = evaluate(polynomial, 1);
        expect(value).toBe(9)
    })

    test('x = 2', () => {
        const value = evaluate(polynomial, 2);
        expect(value).toBe(18)
    })

    test('x = -2', () => {
        const value = evaluate(polynomial, -2);
        expect(value).toBe(6)
    })
})