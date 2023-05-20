import {
	getDecPlaces
} from './common_functions.js';

const HEX_CHARS = [
	'0', '1', '2', '3',
	'4', '5', '6', '7',
	'8', '9', 'A', 'B',
	'C', 'D', 'E', 'F'
];
/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
	if (typeof(n) !== 'number') throw new Error('n must be number');

	// changes value of n if decimal (i.e 3.14 will be 314 as sum of digits will be the same)
	const numAsString = n.toString().replace('.','');
	n = parseInt(numAsString);

	const count = numAsString.length;
	let sum = 0;
	let divisor = 10;

	// starting from 10 the code will find the remainder of number divided by each power of 10
	// this will give us the digit
	// the number is then subtracted by the remainder as each increasing power of 10 will return decimals
	while (divisor <= 10 ** count) {
		const remainder = n % divisor;
		n -= remainder;
		sum += 10 * remainder / divisor;
		divisor *= 10;
	}
	
	return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = 1) => {
	if (typeof(start) !== 'number') throw new Error('start must be number');
	if (typeof(end) !== 'number') throw new Error('end must be number');
	if (typeof(step) !== 'number') throw new Error('step must be number');

	const seqLen = (end - start) / step;
	if (seqLen < 0) throw new Error('step must be in same direction as start -> end');
	if (seqLen % 1) throw new Error('start and end difference must be divisible by step');

	const range = Array.from({ length: seqLen + 1 });

	// using a scale factor handles floating point logic better
	// for example 0.2 + 0.1 = 0.30000000000000004
	// so if we have a variable 3.14 we multiply all numbers by 100, add the numbers, divide by 100
	const decPlaces = [start, step].map(getDecPlaces);
	const maxDecPlace = Math.max(...decPlaces);
	const scaleFactor = 10**maxDecPlace;

	// Math.round also better handles floating point logic
	// for example in javascript 0.27837363726 * 10**11 = 27837363725.999996
	const newStart = Math.round(start * scaleFactor);
	const newStep = Math.round(step * scaleFactor);

	return range.map((_, idx) => (newStart + idx * newStep)/scaleFactor);
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
	if (users === undefined) throw new Error('users is required');
	if (date === undefined) throw new Error('date is required');
	if (!Array.isArray(users)) throw new Error('users must be array');
	if (typeof(date) !== 'string') throw new Error('date must be string');

	// Each user is mapped to the output: 
	// {
	// 	username: 'tony_gunk',
	// 	time: 123
	// }
	const userTimeMap = users.map(user => {
		const username = user.username

		const usage = user?.screenTime?.filter(appTime => appTime.date === date)[0]?.usage;

		if (typeof(usage) !== 'object' || Array.isArray(usage)) return null;

		const time = Object.entries(usage).reduce((accumulator, [, value]) => accumulator += value, 0)

		return { username, time };
	});

	const alertUsers = userTimeMap.filter(user => user?.time >= 100 && user.username);

	return alertUsers.map(user => user.username);
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
	if (hexStr === undefined) throw new Error('hexStr is required');
	if (typeof(hexStr) !== 'string' || hexStr.length !== 7 || hexStr[0] !== '#') 
		throw new Error('hexStr must be string with 7 characters');

	// 1, 3 and 5 are the indexes for the first characters in the hexStr representing a colour 
	const rgbStr = [1,3,5].reduce((rgb, num) => {
		const hex = hexStr.slice(num, num + 2).toUpperCase();

		if (!HEX_CHARS.includes(hex[0]) || !HEX_CHARS.includes(hex[1]))
			throw new Error('hexStr must only contain hexadecimal characters');

		rgb += parseInt(hex, 16).toString();

		if (num - 5) rgb += ','

		return rgb;
	}, 'rgb(');

	return rgbStr + ')';
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
	if (board === undefined) throw new Error('board is required');
	if (!Array.isArray(board)) throw new Error('board must be array');

	const length = board.length;

	if (!length) throw new Error('board cannot be empty');

	board.forEach(row => {
		if (row.length !== length) throw new Error('board must be nxn matrix');
	});

	const symWin = (isWin, sym, line) => {
		const symPlays = line.filter(char => char === sym);
		// Will add '0' or 'X' to winner and remove it from 'symbols'
		// this is to stop the code from checking if a symbol has won twice
		if (symPlays.length === length) {
			symbols = symbols.filter(item => item !== sym);
			return sym;
		}
		return isWin;
	}

	const findWinnerLine = (lineWin, line) => {
		lineWin += symbols.reduce((isWin, sym) => symWin(isWin, sym, line), '');
		return lineWin;
	};

	let symbols = ['0', 'X'];

	const buildArrayAsc = Array.from({ length }, (_, idx) => idx);
	const buildArrayDesc = [...buildArrayAsc].reverse();

	const columns = buildArrayAsc.map(row => {
		return buildArrayAsc.map(column => board[column][row]);
	});

	const diagonals = [buildArrayAsc, buildArrayDesc].map(buildArray => {
		return buildArrayAsc.map(column => board[column][buildArray[column]]);
	});

	const allLines = [...board, ...columns, ...diagonals]

	// To win tic tac toe you need either to cover a row, column or diagonal
	// the code will check all possible wins to see if someone has won
	const winner = allLines.reduce(findWinnerLine, '');

	// winner can either be null, 'X', '0', '0X' or 'X0'
	// we only want to return a winner if there is only one winner
	return winner.length - 1 ? null : winner;
};
