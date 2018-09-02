'use strict';

function inverse(numbers, element = 0) {
	let constNum;
	let result = [];

	if (element >= 0) {
		constNum = numbers.splice(0, element);
		result = constNum.concat(numbers.reverse());
	} else {
		constNum = numbers.splice(element);
		result = numbers.reverse().concat(constNum);
	} 

	return result;
}