import { calculateArea } from './area.js';

describe('should calculate area for a given shape', () => {
    test('should return an empty array', () => {
        const input = []
        const result = calculateArea(input)

        expect(result).toStrictEqual(0)
    });

    test('should return the area of a circle', () => {
        const input = [7]
        const result = calculateArea(input)

        expect(result).toStrictEqual(154)
    });

    test('should return the area of a triangle', () => {
        const input = [1, 2, 7, 5, 3, 10]
        const result = calculateArea(input)

        expect(result).toStrictEqual(21)
    });

    test('should return the area of a rectangle', () => {
        const input = [1, 1, 9, 1, 9, 6, 1, 6]
        const result = calculateArea(input)

        expect(result).toStrictEqual(40)
    });
});