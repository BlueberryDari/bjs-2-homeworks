function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) { 
        min = arr[i];
    };

    if (arr[i] > max) { 
      max = arr[i];
    };

    sum += arr[i];
  }

    avg = Number((sum / arr.length).toFixed(2));

      if(arr.length == 0) {
    return 0;
  }
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams(9,6,2,-7,5,10));

function summElementsWorker(...arr) {
    let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
   if(arr.length == 0) {
    return 0;
  }
  return sum;
}
console.log(summElementsWorker(9,6,2,-7,5,10));

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) { 
        min = arr[i];
    };

    if (arr[i] > max) { 
      max = arr[i];
    };
  }
  if(arr.length == 0) {
    return 0;
  }
   return max - Math.abs(min);
}
console.log(differenceMaxMinWorker(9,6,2,-7,5,10));

function differenceEvenOddWorker(...arr) {

  let sumEven = 0;
  let sumOdd = 0;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    };
    }
  if(arr.length == 0) {
    return 0;
  }
  return sumEven - sumOdd;
}

console.log(differenceEvenOddWorker(9,6,2,-7,5,10));

function averageEvenElementsWorker(...arr) {
 let sumEven = 0;
 let counter = 0;
 for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
      sumEven += arr[i];
      counter ++;
    }
  }
  if(arr.length == 0) {
    return 0;
  } else {
  return sumEven / counter;
  }
}
console.log(averageEvenElementsWorker(9,6,2,-7,5,10));

const arr = [
  [10, 10, 11, 20, 10], 
  [67, 10, 2, 39, 88], 
  [72, 75, 51, 87, 43], 
  [30, 41, 55, 96, 62]
];

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
 for(let i = 0; i < arrOfArr.length; i++)
 {   
   const funcResult = func(...arrOfArr[i]); 
   console.log("fuction work = "+func(...arrOfArr[i]));
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
 }
 console.log("max=" + maxWorkerResult);
  return maxWorkerResult;
}
console.log(makeWork(arr, summElementsWorker)); 
console.log(makeWork(arr, differenceMaxMinWorker)); 
console.log(makeWork(arr, differenceEvenOddWorker)); 
console.log(makeWork(arr, averageEvenElementsWorker));