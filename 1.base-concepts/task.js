"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let diskr = b ** 2 - 4 * a * c;
  
  if (diskr < 0) {
    arr = [];
  } else if (diskr === 0) {
    arr = [ - b / (2 * a)];
  } else if (diskr > 0) {
    arr = [( - b + Math.sqrt(d)) / (2 * a), ( - b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}


 function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent / 100;
  let kredit = amount - contribution;
  let monthlyPercent = percent / 12;
  let monthlyPayment = kredit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let totalAmount = kredit + (monthlyPayment * 12);
  return +totalAmount.toFixed(2);
}