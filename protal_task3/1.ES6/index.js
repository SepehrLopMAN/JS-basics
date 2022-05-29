// Is valid JSON

const isValidJSON = function (str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON('{"a": 2}'));
console.log(isValidJSON('{"a: 2'));

// Greeting

const greeting = function (obj) {
  return `Hello, my name is ${obj.name} ${obj.surname} and I am ${obj.age} years old`;
};

console.log(greeting({ name: "Bill", surname: "Jacobson", age: 33 }));
console.log(greeting({ name: "Jim", surname: "Power", age: 11 }));

// Unique Numbers

const unique = (arr) => Array.from(new Set(arr));
console.log(unique([1, 1, 2, 3, 5, 4, 5]));

// Lego Generator

const generator = function* (arr) {
  for (const val of arr) yield val;
};

const it = generator(["brick", "plate", "minifigure", "slope"]);

console.log(it.next().value);
console.log(it.next().value);
