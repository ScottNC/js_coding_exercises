import {
	nthInitialCapital,
	decimalPlace,
	findSum
} from './common_functions.js';

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	if (typeof(word) !== 'string') throw new Error('word must be string');

	// Finds first letter and converts to upper case and adds letter to rest of word
	const initial = nthInitialCapital(word);
	return initial + word.slice(1);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	if (typeof(firstName) !== 'string') throw new Error('firstName must be string');
	if (typeof(lastName) !== 'string') throw new Error('lastName must be string');

	return nthInitialCapital(firstName) + 
		((firstName && lastName) && '.') +  // Will only add a point if both names are present
		nthInitialCapital(lastName);
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined) throw new Error('originalPrice is required');
	if (vatRate === undefined) throw new Error('vatRate is required');
	if (typeof(originalPrice) !== 'number') throw new Error('originalPrice must be number');
	if (typeof(vatRate) !== 'number') throw new Error('vatRate must be number');
	
	return decimalPlace(originalPrice + originalPrice*vatRate/100);
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined) throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	if (typeof(originalPrice) !== 'number') throw new Error('originalPrice must be number');
	if (typeof(reduction) !== 'number') throw new Error('reduction must be number');
	
	return addVAT(originalPrice, -reduction);
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	if (typeof(str) !== 'string') throw new Error('str must be string');
		
	const len = str.length;

	if (len % 2) // if odd
		return str[(len - 1)/2];
	else // if even
		return str[len/2 - 1] + str[len/2];
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	if (typeof(word) !== 'string') throw new Error('word must be string');
	
	// creates an array of all letters, then reverses the array and reverts it back to string
	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	if (!Array.isArray(words)) throw new Error('words must be array');

	words.forEach((word, index, arr) =>
		arr[index] = reverseWord(word)
	);

	return words;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	if (!Array.isArray(users)) throw new Error('users must be array');

	const linuxUsers = users.filter(user => {
		return user.type === 'Linux'
	});

	return linuxUsers.length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	if (!Array.isArray(scores)) throw new Error('scores must be array');

	// Finds the sum of the scores
	const sum = findSum(scores);
	const frequency = scores.length

	// returns the mean of the score to two decimal points
	return decimalPlace(sum/frequency);
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	if (typeof(n) !== 'number') throw new Error('n must be number');
	
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
