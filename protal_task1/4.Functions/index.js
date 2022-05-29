// Nth non-repeated value

const nThNoRepeatedValue = function (arr, index) {
  let i;
  for (i = 0; i < arr.length && index; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) continue;
    index--;
  }
  return index ? undefined : arr[i - 1];
};
console.log(nThNoRepeatedValue([321, 43, 3213, 1689], 2));
console.log(nThNoRepeatedValue([1, 1, 3, 4, 3, 10], 1));
console.log(nThNoRepeatedValue([1, 2, 1, 1], 1));

// Prime values

const primeValues = function (arr) {
  let result = [];
  for (const val of arr) {
    result.push(true);
    for (let num = 2; num <= Math.floor(Math.sqrt(val)); num++) {
      if (val % num == 0) {
        result.pop();
        result.push(false);
        break;
      }
    }
  }
  return result;
};

console.log(primeValues([4, 2, 7, 10, 13]));
console.log(primeValues([17, 3, 21]));
