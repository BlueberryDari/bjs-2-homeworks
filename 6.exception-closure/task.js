function parseCount(input) {

	if (!isNaN(parseFloat(input))) {
		return input;
	}
		throw new Error('Невалидное значение');
	} 
		
function validateCount(input) {
	try {
		return parseCount(input);
	} catch (error) {
		return error.message;
	}
}

console.log(validateCount("asdfa"));
console.log(validateCount(1.342));
console.log(validateCount(142));
console.log(validateCount());

class Triangle {
    constructor (a, b, c){
		this.a = a;
		this.b = b;
		this.c = c;
  
		if (a + b <= c || a + c <= b || b + c <= a) {
          throw new TriangleError ("«Треугольник с такими сторонами не существует»")
        }
	};
        
	get perimeter() {
		let P = this.a + this.b + this.c;
        return P;
	}

	get area() {
		let halfPerimeter = this.perimeter / 2;
		let S = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
		return Number(S.toFixed(3));
	}
}

function getTriangle (a, b, c) {
	try {
       
	  return new Triangle (a, b, c);
	} catch (error) {
    return {
	  get area() {
		return "Ошибка! Треугольник не существует";
	  },
	  get perimeter() {
		return "Ошибка! Треугольник не существует";
	  }
	};
  }
}

const checkTriangle = getTriangle(1, 2, 3);
console.log(checkTriangle.perimeter);
console.log(checkTriangle.area);

const checkTriangleTwo = getTriangle(6, 7, 3);
console.log(checkTriangleTwo.perimeter);
console.log(checkTriangleTwo.area);

