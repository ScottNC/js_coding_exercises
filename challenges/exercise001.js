// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	// Add your code here!
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	// Add your code here!
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	// Add your code here!
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
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
	return parseFloat((sum/frequency).toFixed(2));
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	
	// we have an empty string for res so we can add fizz or buzz to it
	let res = '';

	// runs two checks to see if the number is divisible by 3 or 5 by checking the remainder is 0
	if (!(n%3))
		res += 'fizz';
	
	if (!(n%5))
		res += 'buzz';

	// if the number is not divisible by 3 or 5 res should be empty so function will return n
	return res || n;
}
