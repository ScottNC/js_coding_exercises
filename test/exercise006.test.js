import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} from "../challenges/exercise006";

import {
    simpleTypeTest,
    testMultipleArgs
} from "./parameter_test.js";

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

    simpleTypeTest(sumMultiples, 'array', 'arr');
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

    simpleTypeTest(isValidDNA, 'string', 'str');
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

    simpleTypeTest(getComplementaryDNA, 'string', 'str');
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
    
    test("returns very large prime numbers as true", () => {
        expect(isItPrime(1000003)).toBe(true);
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

    test("returns 49 as false", () => {
        expect(isItPrime(49)).toBe(false);
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

    test("errors if n isn't positive integer", () => {
        expect(() =>  isItPrime(-1)).toThrow("n must be positive integer");
        expect(() =>  isItPrime(4.5)).toThrow("n must be positive integer");
    });

    simpleTypeTest(isItPrime, 'number', 'n');
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

    testMultipleArgs(createMatrix, [
        {
            type: 'number',
            name: 'n'
        },
        {
            type: 'string',
            name: 'fill',
            skip: true
        }
    ])

});

describe("areWeCovered", () => {
    const staff1 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Alex", rota: ["Thursday", "Tuesday", "Wednesday"] },
    ];

    const staff2 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Alex", rota: ["Thursday", "Tuesday", "Wednesday"] },
        { name: "Shrek"},
    ];

    const staff3 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Alex", rota: ["Thursday", "Tuesday", "Wednesday"] },
        { name: "Shrek", rota: ["Thursday", 390, true]},
    ];

    const staff4 = [
        { name: "Sally", rota: ["monday", "tuesday", "friday"] },
        { name: "Pedro", rota: ["saturday", "sunday", "tuesday", "wednesday"] },
        { name: "Alex", rota: ["whursday", "tuesday", "wednesday"] },
    ];

    test("returns true when three staff can cover a day", () => {
        expect(areWeCovered(staff1, "Tuesday")).toEqual(true);
    });

    test("returns false when three staff can't cover a day", () => {
        expect(areWeCovered(staff1, "Wednesday")).toEqual(false);
    });

    test("returns true when three staff can cover a day with non capital staff input", () => {
        expect(areWeCovered(staff4, "Tuesday")).toEqual(true);
    });

    test("returns false when three staff can't cover a day with non capital staff input", () => {
        expect(areWeCovered(staff4, "Wednesday")).toEqual(false);
    });

    test("returns true when three staff can cover a day with non capital day input", () => {
        expect(areWeCovered(staff1, "tuesday")).toEqual(true);
    });

    test("returns false when three staff can't cover a day", () => {
        expect(areWeCovered(staff1, "Wednesday")).toEqual(false);
    });

    test("returns true when three staff can cover a day if there are staff members with no rota", () => {
        expect(areWeCovered(staff2, "Tuesday")).toEqual(true);
    });

    test("returns false when three staff can't cover a day if there are staff members with no rota", () => {
        expect(areWeCovered(staff2, "Wednesday")).toEqual(false);
    });

    test("returns true when three staff can cover a day if there are rotas with non string values", () => {
        expect(areWeCovered(staff3, "Tuesday")).toEqual(true);
    });

    test("returns false when three staff can't cover a day if there are rotas with non string values", () => {
        expect(areWeCovered(staff3, "Wednesday")).toEqual(false);
    });

    testMultipleArgs(areWeCovered, [
        {
            type: 'array',
            name: 'staff'
        },
        {
            type: 'string',
            name: 'day'
        }
    ]);

});