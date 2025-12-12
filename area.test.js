import { calculateArea } from './area.js';

describe('should calculate area for a given shape', () => {
    test('should return an empty array', () => {
        const shape = []
        const result = calculateArea(shape)

        expect(result).toStrictEqual(0)
    });

    test('should return the area of a circle', () => {
        const shape = [7]
        const result = calculateArea(shape)

        expect(result).toStrictEqual(154)
    });
});