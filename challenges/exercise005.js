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
	// Your code here!
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
