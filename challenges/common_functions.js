// This is a list of functions that are repeated in this exercise

export function nthInitialCapital(word, n = 1) {
	// returns nth letter and capitalises it
	// 'hello' => 'H' 
	return word.charAt(n - 1).toUpperCase();
}

export function decimalPlace(num, dec = 2) {
	// changes decimal places on a number
	// 3.141592 => 3.14
	return parseFloat(num.toFixed(dec));
}

export function findSum(nums) {
    return nums.reduce((sum, num) => sum += num, 0);
}

export function getDecPlaces(num) {
	// Finds the amount of decimal places after any number
	const decimalString = num.toString();
	const decimalIndex = decimalString.indexOf('.') + 1;
	return decimalIndex && decimalString.length - decimalIndex;
}