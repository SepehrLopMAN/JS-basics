// Arrays difference

const arrayDiff = function (arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let result = [];
  set1.forEach((value) => {
    if (!set2.has(value)) {
      result.push(value);
    }
  });

  set2.forEach((value) => {
    if (!set1.has(value)) {
      result.push(value);
    }
  });

  return result;
};

console.log(arrayDiff([1, 2, 3], [1, 2, 3, 4, 5])); // result: [4, 5]
console.log(arrayDiff(["a", "b", "c"], ["a", "b"])); // result: ['c']

// Even Odd checker

const evenOrOdd = function (num1, num2) {
  if (num1 > num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
  }
  let result = [];
  for (num1; num1 <= num2; num1++)
    result.push(num1 + (num1 & 1 ? " is odd" : " is even"));
  return result;
};

console.log(evenOrOdd(0, 3));
console.log(evenOrOdd(2, 4));

// Range sum

const rangeSum = (num1, num2) =>
  ((num1 + num2) * (Math.abs(num2 - num1) + 1)) / 2;

console.log(rangeSum(5, 10));
console.log(rangeSum(0, 6));
