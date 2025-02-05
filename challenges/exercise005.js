import {
	reverseWord
} from './exercise001.js';

import {
	findSentencesContaining
} from './exercise004.js';

import {
	findSum
} from './common_functions.js';

export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	if (!Array.isArray(nums)) throw new Error('nums must be array');
	if (typeof(n) !== 'number') throw new Error('n must be number');
	
	const idx = nums.indexOf(n);

	if (idx >= 0 && idx < nums.length - 1)
		return nums[idx + 1];

	return null;	
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	if (typeof(str) !== 'string') throw new Error('str must be string');

	const arr = str.split('');

	const ones = arr.filter(char => char === '1');
	const zeros = arr.filter(char => char === '0');

	return {
		1: ones.length,
		0: zeros.length
	};
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	if (typeof(n) !== 'number') throw new Error('n must be number');
	
	const numAsString = n.toString();
	return parseFloat(reverseWord(numAsString));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	if (!Array.isArray(arrs)) throw new Error('arr must be array');
	
	// converts nested array into single array
	const arr = [].concat(...arrs);
	return findSum(arr);
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	if (!Array.isArray(arr)) throw new Error('arr must be array');

	[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

	return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	if (typeof(haystack) !== 'object' || Array.isArray(haystack)) throw new Error('haystack must be object');
	if (typeof(searchTerm) !== 'string') throw new Error('searchTerm must be string');
	
	const needles = findSentencesContaining(Object.values(haystack), searchTerm)

	return !!needles.length;
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	if (typeof(str) !== 'string') throw new Error('str must be string');

	// Uses Regular Expressions to remove special characters
	const arrayOfWords = str.replace(/[^\w\s]/gi, "").toLowerCase().split(' ');

	const wordFrequencies = arrayOfWords.reduce((frequencies, word) => {
		frequencies[word] = (frequencies[word] || 0) + 1;
		return frequencies;
	}, {});

	return wordFrequencies;
};
