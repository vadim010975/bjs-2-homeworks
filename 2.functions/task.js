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
  return arr.reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      item % 2 ?  acc[1] += item : acc[0] += item;
      return acc[0] - acc[1];
    }
    return item % 2 ? [acc[0], acc[1] + item] : [acc[0] + item, acc[1]];
  }, [0, 0]);
}

function averageEvenElementsWorker(...arr) {
  if (!chekArray(...arr)) {
    return 0;
  }
  return arr.filter(el => el % 2 === 0).reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      return parseFloat(((acc + item) / arr.length).toFixed(2));
    }
    return acc + item;
  }, 0);
}

function makeWork(arrOfArr, func) {
  // проверка на наличие элементов и отсутсвие "не чисел" в двумерном массиве
  if (!arrOfArr.length || !arrOfArr.every(arr => chekArray(...arr))) {
    return 0;
  }
  return Math.max(...arrOfArr.map(arr => func(...arr)));
}