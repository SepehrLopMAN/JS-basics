// Back to front string

const backToFront = function (str, count) {
  return count <= str.length
    ? str.slice(str.length - count) + str + str.slice(str.length - count)
    : str;
};

console.log(backToFront("hello", 1));
console.log(backToFront("abc", 3));
console.log(backToFront("world", 2));
console.log(backToFront("world", 20));

// Nearest number

const nearest = (z, x, y) => (Math.abs(z - x) < Math.abs(z - y) ? x : y);

console.log(nearest(100, 22, 122));
console.log(nearest(50, 22, 122));

// Remove array duplicates

const removeDuplicate = function (arr) {
  result = [];
  arr.forEach((elem) => (!result.includes(elem) ? result.push(elem) : {}));
  return result;
};

console.log(removeDuplicate([1, 2, 3, 2, 3, 1, 1]));
console.log(removeDuplicate(["a", 1, "2", "b", 1, "2", "b"]));
