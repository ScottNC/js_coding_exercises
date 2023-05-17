import {
	nthInitialCapital,
} from './common_functions.js';

export function getFillings(sandwich) {
	if (typeof(sandwich) !== 'object') throw new Error('sandwich must be object');
	return sandwich.fillings || [];
}

export function isFromManchester(person) {
	if (typeof(person) !== 'object') throw new Error('person must be object');

	if (typeof(person.city) !== 'string') return false;
	
	return person.city.toLowerCase() === 'manchester';
}

export function getBusNumbers(people) {
	if (typeof(people) !== 'number') throw new Error('people must be number');
	return Math.ceil(people/40);
}

export function countSheep(arr) {
	if (!Array.isArray(arr)) throw new Error('arr must be array');

	let sheep = arr.filter(animal => {
		return animal === 'sheep'
	});

	return sheep.length;
}

export function hasMPostCode(person) {
	if (typeof(person) !== 'object') throw new Error('person must be object');

	if (person && person.address && typeof(person.address.postCode) === 'string') {
	
		// determines if first letter of postcode is M
		if (nthInitialCapital(person.address.postCode) !== 'M')
			return false;

		// find if second letter of postcode is a number
		return !!parseInt(nthInitialCapital(person.address.postCode, 2))
	}

	return false;
}
