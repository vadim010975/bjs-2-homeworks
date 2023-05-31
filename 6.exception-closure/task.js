function parseCount(value) {
	const parsedValue = Number.parseFloat(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error('Невалидное значение');
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
		if (sideA + sideB < sideC || sideB + sideC < sideA || sideA + sideC < sideB) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
	}
  get perimeter() { return this.sideA + this.sideB + this.sideC }
  get area() {
    return parseFloat(((Math.sqrt(4 * this.sideA**2 * this.sideB**2 - (this.sideA**2 + this.sideB**2 - this.sideC**2)**2)) / 4).toFixed(3));
  }
}

function getTriangle (sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch {
    return {
      get perimeter() { return 'Ошибка! Треугольник не существует'},
      get area() { return 'Ошибка! Треугольник не существует'}
    }
  }
}