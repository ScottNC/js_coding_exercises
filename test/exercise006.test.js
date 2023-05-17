import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix
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

describe("getComplementaryDNA", () => {
    test("returns complemnetary DNA if chars are only C, G, T or A", () => {
        expect(getComplementaryDNA('CGTGGCACTA')).toBe('GCACCGTGAT');
    });

    test("returns complemnetary DNA in upper case for lower case letters", () => {
        expect(getComplementaryDNA('catg')).toBe('GTAC');
    });

    test("throws error for non DNA argument", () => {
        expect(() => {
            getComplementaryDNA('SHREK');
        }).toThrow("str must only contain letters C, T, A and G");
    });

    test("throws error for non string argument", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");

        expect(() => {
            getComplementaryDNA(43);
        }).toThrow("str must be string");
    });
});

describe("isItPrime", () => {
    test("returns 2 and 3 as true", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
    });

    test("returns 5 as true", () => {
        expect(isItPrime(5)).toBe(true);
    });

    test("returns 7 as true", () => {
        expect(isItPrime(7)).toBe(true);
    });

    test("returns 11 as true", () => {
        expect(isItPrime(11)).toBe(true);
    });

    test("returns large prime numbers as true", () => {
        expect(isItPrime(271)).toBe(true);
    });

    test("returns 1 as false", () => {
        expect(isItPrime(1)).toBe(false);
    });

    test("returns 4 as false", () => {
        expect(isItPrime(4)).toBe(false);
    });

    test("returns 10 as false", () => {
        expect(isItPrime(10)).toBe(false);
    });

    test("returns 25 as false", () => {
        expect(isItPrime(25)).toBe(false);
    });

    test("returns 100 as false", () => {
        expect(isItPrime(100)).toBe(false);
    });

    test("returns non prime 6n - 1 as false", () => {
        expect(isItPrime(35)).toBe(false);
    });

    test("returns non prime 6n + 1 as false", () => {
        expect(isItPrime(91)).toBe(false);
    });

    test("returns large non prime numbers as false", () => {
        expect(isItPrime(5000001)).toBe(false);
    });

    test("returns square of prime as false", () => {
        expect(isItPrime(292681)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("returns 3x3 matrix for 'foo'", () => {
        expect(createMatrix(3, "foo")).toEqual([
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
        ]);
    });

    test("returns 1x1 matrix for 'bar'", () => {
        expect(createMatrix(1, "bar")).toEqual([["bar"]]);
    });

    test("returns empty array for 0", () => {
        expect(createMatrix(0, "baz")).toEqual([]);
    });

    test("returns large array for number input", () => {
        expect(createMatrix(10, 29)).toEqual([
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
        ]);
    });
});