import {
	capitalize,
} from './exercise001.js';

function concatItems (obj, key, filterFunc) {
	let items = [];

	// adds all items to array
	obj.forEach(item => {
		items = items.concat(item[key]);
	})
	console.log(items);

	// removes item values based on filter (i.e. only accepts string values)
	return items.filter(filterFunc);
}

export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');

	// if number, item is replaced by square of number
	return nums.map(num => {
		return typeof(num) == 'number' ? num**2 : num
	});
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	// if the word isn't first in the list, it is capitalised
	return words.map((word, idx) => {
		return idx ? capitalize(word) : word;
	}).join('');

	return words.join('');
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	
	let subjects = concatItems(people, 'subjects', item => typeof(item) == 'string')
	return subjects.length;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');

	// Creates array of all times ingredient is used
	let relevantIngredients = concatItems(menu, 'ingredients', item => item == ingredient);
	// returns true if ingredient is used at all
	return !!relevantIngredients.length;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	
	// remove duplicate values from initial array as they are irrelevant
	arr1 = [...new Set(arr1)];
	arr2 = [...new Set(arr2)];

	// merges arrays and arranges in ascending order
	arr1 = arr1.concat(arr2).sort();

	// if there are any duplicates they will now be next to each other
	// this checks to see if the number before it is the same
	return arr1.filter((num, idx) => {
		if (idx)
			return num == arr1[idx - 1];
	})
}
