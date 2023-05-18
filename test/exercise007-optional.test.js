import {
    sumDigits,
    createRange
} from "../challenges/exercise007-optional";

import {
    simpleTypeTest,
    // testMultipleArgs
} from "./test_functions.js";


describe("sumDigits", () => {
    test("returns sum of digits for integers", () => {
        expect(sumDigits(1234)).toBe(10);
        expect(sumDigits(1023)).toBe(6);
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(267836282)).toBe(44);
    });

    test("returns sum of digits for decimal numbers", () => {
        expect(sumDigits(12.34)).toBe(10);
    });

    simpleTypeTest(sumDigits, 'number', 'n');
});

describe("createRange", () => {
    test("returns sum of digits for integers", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(2, 18, 2)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
    });

    const out = [12, 49, 86, 123, 160, 197, 234, 271, 308, 345, 382, 419,
        456, 493, 530, 567, 604, 641, 678, 715, 752, 789, 826, 863, 900, 
        937, 974, 1011, 1048, 1085, 1122, 1159, 1196, 1233, 1270, 1307, 
        1344,1381, 1418, 1455, 1492, 1529, 1566, 1603, 1640, 1677, 1714, 
        1751, 1788, 1825, 1862];

    test("returns large array", () => {
        expect(createRange(12, 1862, 37)).toEqual(out);
    });

    test("returns range with decimal values", () => {
        expect(createRange(0, 1, 0.1)).toEqual([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
    });
});