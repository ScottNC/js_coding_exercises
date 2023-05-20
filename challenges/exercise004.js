import {
	nthInitialCapital,
	decimalPlace
} from './common_functions.js';

export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	if (!Array.isArray(nums)) throw new Error('nums must be array');
	
	return nums.filter(num => {
		return typeof(num) === 'number' && num < 1;
	});
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	if (!Array.isArray(names)) throw new Error('names must be array');
	if (typeof(char) !== 'string') throw new Error('char must be string');
	
	return names.filter(name => {
		return nthInitialCapital(name) === char.toUpperCase();
	});
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	if (!Array.isArray(words)) throw new Error('words must be array');
	
	return words.filter(word => {
		return typeof(word) === 'string' && word.length > 3 && word.slice(0,3) === 'to ';
	});
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	if (!Array.isArray(nums)) throw new Error('nums must be array');
	
	return nums.filter(num => {
		return typeof(num) === 'number' && Number.isInteger(num);
	});
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	if (!Array.isArray(users)) throw new Error('users must be array');

	return users.map(user => user.data?.city?.displayName);
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	if (!Array.isArray(nums)) throw new Error('nums must be array');

	const squareRoot = num => {
		if (typeof(num) === 'number') {
			if (num >= 0) return decimalPlace(num**0.5);
			else {
				const imaginary = decimalPlace((-num)**0.5);
				const imagStr = (imaginary - 1? imaginary : '') + 'i';
				return imagStr;
			}
		}
		return num;
	};
	
	return nums.map(squareRoot);
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	if (!Array.isArray(sentences)) throw new Error('sentences must be array');
	if (typeof(str) !== 'string') throw new Error('str must be string');
	
	return sentences.filter(sentence => {
		return typeof(sentence) === 'string' && 
			sentence.toLowerCase().includes(str.toLowerCase());
	});
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	if (!Array.isArray(triangles)) throw new Error('triangles must be array');
	
	return triangles.map(triangle => Math.max(...triangle));
}
