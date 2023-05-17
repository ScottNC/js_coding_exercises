import {
	nthInitialCapital,
	decimalPlace
} from './common_functions.js';

export function findSmallNums(nums) {
	if (!Array.isArray(nums)) throw new Error('nums must be array');
	
	return nums.filter(num => {
		return typeof(num) === 'number' && num < 1;
	});
}

export function findNamesBeginningWith(names, char) {
	if (!Array.isArray(names)) throw new Error('names must be array');
	if (typeof(char) !== 'string') throw new Error('char must be string');
	
	return names.filter(name => {
		return nthInitialCapital(name) === char.toUpperCase();
	});
}

export function findVerbs(words) {
	if (!Array.isArray(words)) throw new Error('words must be array');
	
	return words.filter(word => {
		return typeof(word) === 'string' && word.length > 3 && word.slice(0,3) === 'to ';
	});
}

export function getIntegers(nums) {
	if (!Array.isArray(nums)) throw new Error('nums must be array');
	
	return nums.filter(num => {
		return typeof(num) === 'number' && Number.isInteger(num);
	});
}

export function getCities(users) {
	if (!Array.isArray(users)) throw new Error('users must be array');

	return users.map(user => {
		return user.data && user.data.city && user.data.city.displayName;
	});
}

export function getSquareRoots(nums) {
	if (!Array.isArray(nums)) throw new Error('nums must be array');
	
	return nums.map(num => {
		return typeof(num) === 'number' && decimalPlace(num**0.5);
	});
}

export function findSentencesContaining(sentences, str) {
	if (!Array.isArray(sentences)) throw new Error('sentences must be array');
	if (typeof(str) !== 'string') throw new Error('str must be string');
	
	return sentences.filter(sentence => {
		return typeof(sentence) === 'string' && 
			sentence.toLowerCase().includes(str.toLowerCase());
	});
}

export function getLongestSides(triangles) {
	if (!Array.isArray(triangles)) throw new Error('triangles must be array');
	
	return triangles.map(triangle => {
		return Math.max(...triangle);
	});
}
