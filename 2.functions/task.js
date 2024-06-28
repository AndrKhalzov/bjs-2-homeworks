function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = [...arr].reduce((acc, item) => acc + item
);
let avg = (sum / arr.length);
  return { min, max, avg: +avg.toFixed(2) };
}


function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
   let sum = [...arr].reduce((acc, item) => acc + item
);
return sum;
}


function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
let max = Math.max(...arr);
let min = Math.min(...arr);
return max - min;

}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sumEvenElemet = 0;
  let sumOddElement = 0;
  for (let arg of arr) {
    if (arg % 2 === 0) {
      sumEvenElemet += arg;
    } else sumOddElement += arg;
  }
  let differenceEvenOddWorker = sumEvenElemet - sumOddElement;
  return differenceEvenOddWorker;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
let sumEvenElement = 0;
let countEvenElement = 0;
for (let args of arr) {
  if (args % 2 === 0) {
    countEvenElement += 1;
    sumEvenElement += args;
}
}
let difEven = sumEvenElement / countEvenElement;
return difEven;
}

function makeWork(arrOfArr, func) {
  let max = arrOfArr.map(arr => func(...arr));
  return Math.max(...max)
  }
