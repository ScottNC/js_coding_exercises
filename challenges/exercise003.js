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
	nums.forEach((num, index, arr) =>
		arr[index] = typeof(num) == 'number' ? num**2 : num
	);

	return nums;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	// if the word isn't first in the list, it is capitalised
	words.forEach((word, index, arr) => {
		if (index)
			arr[index] = capitalize(word);
	});

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
	// Your code here!
}
