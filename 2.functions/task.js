function chekArray(...arr) {
  // функция проверки массива на наличие элементов и 
  // отсутствие элементов - не чисел
  if (arr.length && arr.every(el => Number.isFinite(el))) {
    return true;
  } else {
    return false;
  }
}

function getArrayParams(...arr) {
  if (!chekArray(...arr)) {
    return 0;
  }
  const minInArray = Math.min(...arr);
  const maxInArray = Math.max(...arr);
  const sumElements = summElementsWorker(...arr);
  const averageValue = parseFloat((sumElements / arr.length).toFixed(2));
  return {
    min: minInArray,
    max: maxInArray,
    avg: averageValue
  };
}

function summElementsWorker(...arr) {
  if (!chekArray(...arr)) {
    return 0;
  }
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

function differenceMaxMinWorker(...arr) {
  if (!chekArray(...arr)) {
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!chekArray(...arr)) {
    return 0;
  }
  // let sumEvenElement = 0;
  // let sumOddElement = 0;
  // arr.forEach(value => {
  //   value % 2 ? sumOddElement += value : sumEvenElement += value;
  // });
  // return sumEvenElement - sumOddElement;
  arr.reduce((acc, item, idx, arr) => {
    if (idx === arr.length) {
      return acc[0] - acc[1];
    }
    item % 2 ? acc[1] += item : acc[0] += item;
  }, [0, 0]);
}

function averageEvenElementsWorker(...arr) {
  if (!chekArray(...arr)) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  arr.forEach(value => {
    if (value % 2 === 0) {
      sumEvenElement += value;
      countEvenElement++;
    }
  });
  return countEvenElement ? parseFloat((sumEvenElement / countEvenElement).toFixed(2)) : 0;
}

function makeWork(arrOfArr, func) {
  // проверка на наличие элементов и отсутсвие "не чисел" в двумерном массиве
  if (!arrOfArr.length || !arrOfArr.every(arr => arr.every(el => Number.isFinite(el))
  )) {
    return 0;
  }


  let maxWorkerResult = func(...arrOfArr[0]),
    result;
  for (let i = 1; i < arrOfArr.length; i++) {
    result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}