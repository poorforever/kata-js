import {array_sqrt, array_integer, array_sum} from "./fmr.js";

describe('Should compute square roots of elements in an array', () => {
    test('Should return []', () => {
        const elements = [];
        const output = array_sqrt(elements);

        expect(output).toEqual([]);
    });

    test('Should return [2, 3, 4]', () => {
        const elements = [4, 9, 16];
        const output = array_sqrt(elements);

        expect(output).toEqual([2, 3, 4]);
    });


    test('Should return [0, 1, 2, 3, 4, 7, 9, 11, 12, 20, 100]', () => {
        const elements = [0, 1, 4, 9, 16, 49, 81, 121, 144, 400, 10000];
        const output = array_sqrt(elements);

        expect(output).toEqual([0, 1, 2, 3, 4, 7, 9, 11, 12, 20, 100]);
    })
});

describe('Should filter and keep only integers', () => {
    test('Should return []', () => {
        const elements = [];
        const output = array_integer(elements);

        expect(output).toEqual([]);
    });

    test('Should return [0, 1, 2, 3]', () => {
        const elements = [0, 1, 1.41, 1.73, 2, 2.23, 2.44, 2.64, 2.82, 3];
        const output = array_integer(elements);

        expect(output).toEqual([0, 1, 2, 3]);
    })

    test('Should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
        const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const output = array_integer(elements);

        expect(output).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })
});

describe('Should sum elements of an array', () => {
    test('Should return []', () => {
        const elements = [];
        const output = array_sum(elements);

        expect(output).toEqual(0);
    });

    test('[1, 2, 3] => 6', () => {
        const elements = [1, 2, 3];
        const output = array_sum(elements);

        expect(output).toEqual(6);
    });

    test('[1, 2, 3, 4, 5, 6, 7] => 28', () => {
        const elements = [1, 2, 3, 4, 5, 6, 7];
        const output = array_sum(elements);

        expect(output).toEqual(28);
    });

    test('[2, 4, 6, 8, 10, 12, 14] => 56', () => {
        const elements = [2, 4, 6, 8, 10, 12, 14];
        const output = array_sum(elements);

        expect(output).toEqual(56);
    });
})