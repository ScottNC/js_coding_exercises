export function nthInitialCapital(word, n = 1) {
	// returns first letter and capitalises it
	// 'hello' => 'H' 
	return word.charAt(n - 1).toUpperCase();
}

export function decimalPlace(num, dec = 2) {
	// changes decimal places on a number
	// 3.141592 => 3.14
	return parseFloat(num.toFixed(dec));
}

export function findSum(nums) {
    let sum = 0

	nums.forEach(num => sum += num);

    return sum;
}