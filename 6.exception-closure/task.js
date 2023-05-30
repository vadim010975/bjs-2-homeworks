function parseCount(value) {
	const parsedValue = Number.parseFloat(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}
	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(sideA, sideB, sideC) {
		
	}
}