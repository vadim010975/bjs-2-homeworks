function chekArray(...arr) {
  // функция проверки массива на наличие элементов и 
  // отсутствие элементов - не чисел
  if (!arr.length) {
    return false;
  }
  let notNumber = false;
  arr.forEach((value) => {
    if (!Number.isFinite(value)) {
      notNumber = true;
      return;
    }
  });
  if (notNumber) {
    return false;
  }
  return true;
}

function getArrayParams(...arr) {
  if (!chekArray(...arr)) {
    return 0;
  }
  const minInArray = Math.min(...arr);
  const maxInArray = Math.max(...arr);
  const sumElements = summElementsWorker(...arr);
  const averageValue = parseFloat((sumElements / arr.length).toFixed(2));
  return { min: minInArray, max: maxInArray, avg: averageValue };
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
  let sumEvenElement = 0;
  let sumOddElement = 0;
  arr.forEach(function (value) {
    value % 2 ? sumOddElement += value : sumEvenElement += value;
  });
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!chekArray(...arr)) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  arr.forEach((value) => {
    if (value % 2 === 0) {
      sumEvenElement += value;
      countEvenElement++;
    }
  });
  return countEvenElement ? parseFloat((sumEvenElement / countEvenElement).toFixed(2)) : 0;
}

function makeWork(arrOfArr, func) {
  // проверка на наличие элементов и отсутсвие "не чисел" в двумерном массиве
  if (!arrOfArr.length) {
    return 0;
  }
  let notNumber = false;
  arrOfArr.forEach((arr) => {
    arr.forEach((value) => {
      if (!Number.isFinite(value)) {
        notNumber = true;
        return;
      }
    });
    if (notNumber) {
      return;
    }
  });
  if (notNumber) {
    return 0;
  }

  let maxWorkerResult = func(...arrOfArr[0]), result;
  for (let i = 1; i < arrOfArr.length; i++) {
    result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
