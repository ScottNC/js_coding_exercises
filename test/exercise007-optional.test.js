import {
    sumDigits,
    createRange,
    getScreentimeAlertList
} from "../challenges/exercise007-optional";

import {
    simpleTypeTest,
    testMultipleArgs
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

    const out2 = [0.75, 1.5, 2.25, 3, 3.75, 4.5, 5.25, 6, 6.75, 7.5, 8.25, 9,
        9.75, 10.5, 11.25, 12, 12.75, 13.5, 14.25, 15, 15.75, 16.5, 17.25, 18];

    test("returns range with decimal values", () => {
        expect(createRange(0, 1, 0.1)).toEqual([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
        expect(createRange(0.25, 8.25, 1)).toEqual([0.25, 1.25, 2.25, 3.25, 4.25, 5.25, 6.25, 7.25, 8.25]);
        expect(createRange(0.75, 18, 0.75)).toEqual(out2);
    });

    const out3 = [0, 0.27837363726, 0.55674727452, 0.83512091178, 1.11349454904, 1.3918681863];

    test("returns range with numbers with a large amount of decimal places", () => {
        expect(createRange(0, 1.3918681863, 0.27837363726)).toEqual(out3);
    });

    test("step input is 1 if none is given", () => {
        expect(createRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test("returns range with negative numbers", () => {
        expect(createRange(-1, -10, -1)).toEqual([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]);
    });

    test("returns array of one value if start and end equal", () => {
        expect(createRange(5, 5)).toEqual([5]);
    });

    test("errors if start cannot reach end", () => {
        expect(() =>  createRange(-1, 10, -1)).toThrow("step must be in same direction as start -> end");
        expect(() =>  createRange(1, -10, 1)).toThrow("step must be in same direction as start -> end");
    });

    test("errors if end can't be included in array", () => {
        expect(() =>  createRange(3, 10, 2)).toThrow("start and end difference must be divisible by step");
    });

    testMultipleArgs(createRange, [
        {
            name: 'start',
            type: 'number'
        },
        {
            name: 'end',
            type: 'number'
        },
        {
            name: 'step',
            type: 'number',
            skipUndefined: true
        }
    ]);
});

describe("getScreentimeAlertList", () => {

    const input = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 2, instagram: 3, facebook: 4} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-05-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-05-02", usage: { mapMyRun: 67, whatsApp: 12, facebook: 47, safari: 16} },
                { date: "2019-05-04", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            ]
        },
    ];

    test("returns 1 user who has spent over 100 minutes on screen", () => {
        expect(getScreentimeAlertList(input, "2019-05-04")).toEqual(["beth_1234"]);
    });

    test("returns 2 users who has spent over 100 minutes on screen", () => {
        const res = getScreentimeAlertList(input, "2019-05-02");
        expect(res.length).toBe(2);
        expect(res).toContain("beth_1234");
        expect(res).toContain("sam_j_1989")
    });

    test("returns empty array if no users have spend at least 100 mins on screen", () => {
        expect(getScreentimeAlertList(input, "2019-05-01")).toEqual([]);
    });

    const input2 = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 2, instagram: 3, facebook: 4} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03" },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
            ]
        },
    ];

    test("returns 1 user who has spent over 100 minutes on screen", () => {
        expect(getScreentimeAlertList(input2, "2019-05-04")).toEqual(["beth_1234"]);
    });

    test("returns 1 user who has spent over 100 minutes on screen", () => {
        expect(getScreentimeAlertList(input2, "2019-05-03")).toEqual([]);
    });
});