import { find } from "./morse-letter-keyrow-finder.js";

describe("should find the keyrow for a morse letter for AZERTY keyboards", () => {
    const isAertty = true;

    test("`._` => `A` and return 1", () => {
        const result = find("._", isAertty)
        expect(result).toEqual(1)
    });

    test("`_...` => `B` and return 3", () => {
        const result = find("_...", isAertty)
        expect(result).toEqual(3)
    });

    test("`_._.` => `C` and return 3", () => {
        const result = find("_...", isAertty)
        expect(result).toEqual(3)
    });

    test("`_..` => `D` and return 2", () => {
        const result = find("_..", isAertty)
        expect(result).toEqual(2)
    });

    test("`.` => `E` and return 1", () => {
        const result = find(".", isAertty)
        expect(result).toEqual(1)
    });

    test("`.._.` => `F` and return 2", () => {
        const result = find(".._.", isAertty)
        expect(result).toEqual(2)
    });

    test("`__.` => `G` and return 2", () => {
        const result = find("__.", isAertty)
        expect(result).toEqual(2)
    });

    test("`....` => `H` and return 2", () => {
        const result = find("....", isAertty)
        expect(result).toEqual(2)
    });

    test("`..` => `I` and return 1", () => {
        const result = find("..", isAertty)
        expect(result).toEqual(1)
    });

    test("`__` => `M` and return 2", () => {
        const result = find("__", isAertty)
        expect(result).toEqual(2)
    });

    test("`__._` => `Q` and return 2", () => {
        const result = find("__._", isAertty)
        expect(result).toEqual(2)
    });

    test("`.__` => `W` and return 3", () => {
        const result = find(".__", isAertty)
        expect(result).toEqual(3)
    });

    test("`__..` => `Z` and return 1", () => {
        const result = find("__..", isAertty)
        expect(result).toEqual(1)
    });
});

describe("should find the keyrow for a morse letter for QWERTY keyboards", () => {
    const isAertty = false;

    test("`._` => `A` and return 2", () => {
        const result = find("._", isAertty)
        expect(result).toEqual(2)
    });

    test("`_...` => `B` and return 3", () => {
        const result = find("_...", isAertty)
        expect(result).toEqual(3)
    });

    test("`_._.` => `C` and return 3", () => {
        const result = find("_...", isAertty)
        expect(result).toEqual(3)
    });

    test("`_..` => `D` and return 2", () => {
        const result = find("_..", isAertty)
        expect(result).toEqual(2)
    });

    test("`.` => `E` and return 1", () => {
        const result = find(".", isAertty)
        expect(result).toEqual(1)
    });

    test("`.._.` => `F` and return 2", () => {
        const result = find(".._.", isAertty)
        expect(result).toEqual(2)
    });

    test("`__.` => `G` and return 2", () => {
        const result = find("__.", isAertty)
        expect(result).toEqual(2)
    });

    test("`....` => `H` and return 2", () => {
        const result = find("....", isAertty)
        expect(result).toEqual(2)
    });

    test("`..` => `I` and return 1", () => {
        const result = find("..", isAertty)
        expect(result).toEqual(1)
    });

    test("`__` => `M` and return 3", () => {
        const result = find("__", isAertty)
        expect(result).toEqual(3)
    });

    test("`__._` => `Q` and return 1", () => {
        const result = find("__._", isAertty)
        expect(result).toEqual(1)
    });

    test("`.__` => `W` and return 1", () => {
        const result = find(".__", isAertty)
        expect(result).toEqual(1)
    });

    test("`__..` => `Z` and return 3", () => {
        const result = find("__..", isAertty)
        expect(result).toEqual(3)
    });
});
