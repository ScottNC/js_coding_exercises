import {
    sumDigits
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