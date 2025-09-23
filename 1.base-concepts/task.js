"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let rootOne = 0;
	let rootTwo = 0;
	let discriminant = Math.pow(b, 2) - 4 * a * c;

	If(discriminant < 0) {
  } else if (discriminant = 0) {
		rootOne = -b / (2 * a);
		arr.push(rootOne);
	} else if (discriminant > 0) {
		rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
		rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(rootOne, rootTwo);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let loanBody = amount - contribution;
  if (loanBody <= 0) {
    return 0;
  }
 
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((Math.pow(1 + monthlyPercent), countMonths) - 1)));
  let sum = monthlyPayment * countMonths;
  let decimalSum = Number(sum.toFixed(2));
  return decimalSum;
}