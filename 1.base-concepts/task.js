"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant === 0) {
		let rootOne = -b / (2 * a);
		arr.push(rootOne);
	} else if (discriminant > 0) {
		let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
		let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
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
 
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((Math.pow((1 + monthlyPercent), countMonths)) - 1)));
  let sum = monthlyPayment * countMonths;
  return Number(sum.toFixed(2));
}

