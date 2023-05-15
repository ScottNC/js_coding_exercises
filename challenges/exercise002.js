export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');

	if (typeof(person.city) != 'string') return false;
	
	return person.city.toLowerCase() == 'manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	return Math.ceil(people/40);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	
	let sheep = arr.filter(animal => {
		return animal == 'sheep'
	});

	return sheep.length;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}
