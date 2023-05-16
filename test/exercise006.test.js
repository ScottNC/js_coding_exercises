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