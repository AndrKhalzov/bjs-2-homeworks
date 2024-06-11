"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  

  let d = b ** 2 - 4 * a * c;
  
  if (d === 0) {
    let x1;
    x1 = - b / (2 * a);
    arr.push(x1);
  } else if (d > 0) {
    let x1;
    let x2;
    x1 = ( - b + Math.sqrt(d)) / (2 * a);
    x2 = ( - b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}


 function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let kredit = amount - contribution;
  let monthlyPercent = (percent / 12) / 100;
  let monthlyPayment = kredit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}
