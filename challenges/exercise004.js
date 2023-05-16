import {
	nthInitialCapital,
} from './exercise001.js';

export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	
	return nums.filter(num => {
		return typeof(num) == 'number' && num < 1;
	});
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	
	return names.filter(name => {
		return nthInitialCapital(name) == char.toUpperCase();
	});
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	
	return words.filter(word => {
		return typeof(word) == 'string' && word.length > 3 && word.slice(0,3) == 'to ';
	});
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
}
