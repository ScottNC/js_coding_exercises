// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍


export function nthInitialCapital(word, n = 1) {
	// returns first letter and capitalises it
	// 'hello' => 'H' 
	return word.charAt(n - 1).toUpperCase();
}

function decimalPlace(num, dec = 2) {
	// changes decimal places on a number
	// 3.141592 => 3.14
	return parseFloat(num.toFixed(dec));
}

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');

	// Finds first letter and converts to upper case and adds letter to rest of word
	let initial = nthInitialCapital(word);
	return initial + word.slice(1);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');

	return nthInitialCapital(firstName) + 
		((firstName && lastName) && '.') +  // Will only add a point if both names are present
		nthInitialCapital(lastName);
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	
	return decimalPlace(originalPrice + originalPrice*vatRate/100);
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	
	return addVAT(originalPrice, -reduction);
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
		
	let len = str.length;

	if (len % 2) // if odd
		return str[(len - 1)/2];
	else // if even
		return str[len/2 - 1] + str[len/2];
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	
	// creates an array of all letters, then reverses the array and reverts it back to string
	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	// runs reverseWord for each word and replaces value in array
	words.forEach((word, index, arr) =>
		arr[index] = reverseWord(word)
	);

	return words;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');

	// filters out users that don't use linux
	let linuxUsers = users.filter(user => {
		return user.type == 'Linux'
	});

	return linuxUsers.length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');

	// Finds the sum of the scores
	let sum = 0
	let frequency = scores.length

	scores.forEach(score => {
		sum += score;
	}) 

	// returns the mean of the score to two decimal points
	return decimalPlace(sum/frequency);
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	
	// we have an empty string for res so we can add fizz or buzz to it
	let res = '';

	// runs two checks to see if the number is divisible by 3 or 5 by checking the remainder is 0
	if (!(n % 3))
		res += 'fizz';
	
	if (!(n % 5))
		res += 'buzz';

	// if the number is not divisible by 3 or 5 res should be empty so function will return n
	return res || n;
}
