function getArrayParams(...arr) {
  if (!arr.length) {
    return;
  }
  let notNumber = false;
  arr.forEach(function(value) {
    if (!Number.isFinite(value)){
      notNumber = true;
    }
  });
  if (notNumber) {
    return;
  }
  const minInArray = Math.min(...arr);
  const maxInArray = Math.max(...arr);
  const initialValue = 0;
  const sumElements = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
  );
  const averageValue = parseFloat((sumElements / arr.length).toFixed(2));
  return { min: minInArray, max: maxInArray, avg: averageValue };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
