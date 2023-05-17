import {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
} from "../challenges/exercise001";

import {
  simpleTypeTest,
  testMultipleArgs
} from "./test_functions.js";

describe("capitalize", () => {
  test("returns a capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("the quick fox")).toBe("The quick fox");
    expect(capitalize("oh no, bears!!!")).toBe("Oh no, bears!!!");
  });

  test("does nothing if the string is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("does nothing if the string is empty", () => {
    expect(capitalize("")).toBe("");
  });

  simpleTypeTest(capitalize, 'string', 'word');
});

describe("generateInitials", () => {
  test("returns the initials of a firstname and surname", () => {
    expect(generateInitials("Frederic", "Bonneville")).toBe("F.B");
  });

  test("returns the initials of a firstname and surname for non capital letters", () => {
    expect(generateInitials("homer", "simpson")).toBe("H.S");
  });

  test("returns the initials of a firstname", () => {
    expect(generateInitials("Lizzo", "")).toBe("L");
  });

  test("returns the initials of a surname", () => {
    expect(generateInitials("", "McLovin")).toBe("M");
  });

  testMultipleArgs(generateInitials, [
    {
      name: 'firstName',
      type: 'string'
    },
    {
      name: 'lastName',
      type: 'string'
    }
  ]);
});

describe("addVAT", () => {
  test("adds a VAT of 20% to a price of 100", () => {
    expect(addVAT(100, 20)).toBe(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBe(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBe(39.36);
  });

  test("adds a VAT of 0% to a price of 25", () => {
    expect(addVAT(25, 0)).toBe(25);
  });

  testMultipleArgs(addVAT, [
    {
      name: 'originalPrice',
      type: 'number'
    },
    {
      name: 'vatRate',
      type: 'number'
    }
  ]);
});

describe("getSalePrice", () => {
  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBe(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBe(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBe(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    expect(getSalePrice(50, 0)).toBe(50);
  });

  testMultipleArgs(getSalePrice, [
    {
      name: 'originalPrice',
      type: 'number'
    },
    {
      name: 'reduction',
      type: 'number'
    }
  ]);
});

describe("getMiddleCharacter", () => {
  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("help!!")).toBe("lp");
  });

  simpleTypeTest(getMiddleCharacter, 'string', 'str');
});

describe("reverseWord", () => {
  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
  });

  simpleTypeTest(reverseWord, 'string', 'word');
});

describe("reverseAllWords", () => {
  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });

  simpleTypeTest(reverseAllWords, 'array', 'words');
});

describe("countLinuxUsers", () => {
  test("returns 0 if no Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", type: "Windows" },
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" },
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns the correct number of Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Jane", OS: "Mint 19.1", type: "Linux" },
      { name: "Jen", OS: "CentOS 7", type: "Linux" },
      { name: "David", OS: "Fedora 28", type: "Linux" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" },
    ];
    expect(countLinuxUsers(users)).toBe(5);
  });

  test("returns the correct number of Linux users found with users without type", () => {
    const users = [
      { name: "Alan", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Bill", OS: "Ubuntu 16.04" },
      { name: "Charlie", OS: "Windows 10", type: "Windows" },
      { name: "Derek", OS: "Mint 19.1", type: "Linux" },
      { name: "Elephant", OS: "CentOS 7", type: "Linux" },
      { name: "Frank", OS: "Fedora 28" },
      { name: "Gary", OS: "Windows 95", type: "Windows" },
    ];
    expect(countLinuxUsers(users)).toBe(3);
  });
  
  simpleTypeTest(countLinuxUsers, 'array', 'users');
});

describe("getMeanScore", () => {
  test("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
  });

  test("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });

  test("returns the mean of decimal numbers to 2 decimal places", () => {
    expect(getMeanScore([10.3, 5.36, 9, 14.5612])).toBe(9.81);
  });

  test("returns the mean of negative numbers", () => {
    expect(getMeanScore([-3, -5, 7, 9, -13])).toBe(-1);
  });

  simpleTypeTest(getMeanScore, 'array', 'scores');
});

describe("simpleFizzBuzz", () => {
  test("returns 'fizz' if the number is divisible by 3", () => {
    expect(simpleFizzBuzz(3)).toBe("fizz");
  });

  test("returns 'buzz' if the number is divisible by 5", () => {
    expect(simpleFizzBuzz(5)).toBe("buzz");
  });

  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(simpleFizzBuzz(4)).toBe(4);
  });

  test("returns 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(15)).toBe("fizzbuzz");
  });

  test("returns 'fizz' if the large number is divisible by 3", () => {
    expect(simpleFizzBuzz(99)).toBe("fizz");
  });

  test("returns 'buzz' if the large number is divisible by 5", () => {
    expect(simpleFizzBuzz(100)).toBe("buzz");
  });

  test("returns number if large number is not divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(101)).toBe(101);
  });

  test("returns 'fizzbuzz' if the large number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(150)).toBe("fizzbuzz");
  });

  simpleTypeTest(simpleFizzBuzz, 'number', 'n');
});
