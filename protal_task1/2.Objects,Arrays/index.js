// Number of duplicates

const numberOfDuplicates = function (arr) {
  obj = {};
  result = [];
  for (const val of arr) {
    obj[val] === undefined ? (obj[val] = 1) : obj[val]++;
    result.push(obj[val]);
  }
  return result;
};

console.log(numberOfDuplicates([1, 2, 1, 1, 3]));
console.log(numberOfDuplicates(["a", "a", "aa", "a", "aa"]));

// Object strength

const countObjectStrength = function (obj) {
  console.log(Object.getOwnPropertyNames(obj));
  const strengths = {
    undefined: 0,
    boolean: 1,
    number: 2,
    string: 3,
    object: 5,
    function: 7,
    bigint: 9,
    symbol: 10,
  };

  let strength = 0;
  for (let name of Object.getOwnPropertyNames(obj)) {
    strength += strengths[`${typeof obj[`${name}`]}`];
  }

  return strength;
};

console.log(countObjectStrength(Array)); // 31 (2 + 3 + 5 + 7 + 7 + 7)
console.log(countObjectStrength(Array.prototype)); // 226 (2 + 7 * 32)
console.log(countObjectStrength([])); // 2
console.log(countObjectStrength({ some: "value" })); // 3
