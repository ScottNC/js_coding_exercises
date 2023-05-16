import {
    sumMultiples
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("returns sum of multiples of 3 and 5", () => {
        expect(sumMultiples([5, 3])).toBe(8);
        expect(sumMultiples([5, 3, 15])).toBe(23);
        expect(sumMultiples([5, 13, 3, 15, 4])).toBe(23);
    });

    test("returns 0 if there are no multiples of 3 and 5", () => {
        expect(sumMultiples([4, 37, 41, 7])).toBe(0);
    });

    test("returns sum of multiples of 3 and 5 for large numbers", () => {
        expect(sumMultiples([30000000, 500, 800002])).toBe(30000500);
    });

    test("returns 0 for empty array", () => {
        expect(sumMultiples([])).toBe(0);
    });

    test("throws error for non array argument", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples(43);
        }).toThrow("arr must be an array");

        expect(() => {
            sumMultiples("hello");
        }).toThrow("arr must be an array");
    });
});

describe("isValidDNA", () => {
    test("returns true if chars are only C, G, T or A", () => {
        expect(isValidDNA('CGTGGCACTA')).toBe(true);
    });

    test("returns true if chars are only C, G, T or A for lower case", () => {
        expect(isValidDNA('ctagggatc')).toBe(true);
    });

    test("returns true if chars are only C, G, T or A for mixed cases", () => {
        expect(isValidDNA('cGAtcAg')).toBe(true);
    });

    test("returns false if there are other chars", () => {
        expect(isValidDNA('CGBTTAGT')).toBe(false);
        expect(isValidDNA('tbbhjkjsa')).toBe(false);
        expect(isValidDNA('Gbbtahshsj%%%2332')).toBe(false);
    });

    test("throws error for non string argument", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");

        expect(() => {
            isValidDNA(43);
        }).toThrow("str must be string");
    });
});