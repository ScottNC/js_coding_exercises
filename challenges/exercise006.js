/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	if (!Array.isArray(arr)) throw new Error('arr must be an array');

	return arr.reduce((sum, num) => {
		if (!(num % 3) || !(num % 5))
			sum += num;
		return sum;
	}, 0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
	if (str === undefined) throw new Error('str is required');
	if (typeof(str) !== 'string') throw new Error('str must be string');

	return str === str.replace(/[^cgta]/gi, '');
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
	// isValidDNA already tests if str is undefined
	if (!isValidDNA(str)) throw new Error('str must only contain letters C, T, A and G');

	const pairs = { A: 'T', C: 'G', T: 'A', G: 'C' };
	const mapDNA = char => pairs[char.toUpperCase()];

	return str.split('').map(mapDNA).join('');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined) throw new Error('n is required');

	if (n === 2 || n === 3) return true;
	if (n === 1 || !(n % 2) || !(n % 3)) return false;

	let possibleSquareOfPrime = 25;

	// every prime number, p, greater than 3 obeys the rule p = √(24n + 1) where n is an integer
	// if it isn't then it cannot be a prime
	// the code iterates through every possible value of 24n + 1 where n >= 1
	// if the argument is not divisible by any prime below the square root then it is itself a prime
	while (possibleSquareOfPrime <= n) {
		if (!(n % (possibleSquareOfPrime**0.5))) 
			return false;
		possibleSquareOfPrime += 24;
	}

	return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
	if (n === undefined) throw new Error('n is required');
	if (fill === undefined) throw new Error('fill is required');

	const row = Array(n).fill(fill);
	const matrix = Array(n).fill(row);

	return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined) throw new Error('staff is required');
	if (day === undefined) throw new Error('day is required');
};
