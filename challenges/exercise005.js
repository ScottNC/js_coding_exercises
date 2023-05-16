import {
	reverseWord
} from './exercise001.js';

import {
	findSentencesContaining
} from './exercise004.js';

import {
	findSum
} from './useful_functions.js';

export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	
	const idx = nums.indexOf(n);

	if (idx >= 0 && idx < nums.length - 1)
		return nums[idx + 1];

	return null;	
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');

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
	
	const numAsString = n.toString();
	return parseFloat(reverseWord(numAsString));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	
	// converts nested array into single array
	const arr = [].concat(...arrs);
	return findSum(arr);
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

	return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	
	const needles = findSentencesContaining(Object.values(haystack), searchTerm)

	return !!needles.length;
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
