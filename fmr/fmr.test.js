import {array_sqrt} from "./fmr.js";

describe('Should compute square roots of elements in an array', () => {
    test('Should return []', () => {
        const elements = [];
        const output = array_sqrt(elements);

        expect(output).toEqual([]);
    });

    test('Should return square roots of elements', () => {
        const elements = [4, 9, 16];
        const output = array_sqrt(elements);

        expect(output).toEqual([2, 3, 4]);
    });


    test('Should return [0, 1, 2, 3, 4, 7, 9, 11, 12, 20, 100]', () => {
        const elements = [0, 1, 4, 9, 16, 49, 81, 121, 144, 400, 10000];
        const output = array_sqrt(elements);

        expect(output).toEqual([0, 1, 2, 3, 4, 7, 9, 11, 12, 20, 100]);
    })
})