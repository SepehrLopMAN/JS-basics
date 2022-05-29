// Task 1. Summation

const add = function (var1) {
  return (var2) => var2 + var1;
};

console.log(add(3)(6));

// Task 2. Avrage age of users

const users = [
  {
    gender: "male",
    age: 24,
  },
  {
    gender: "female",
    age: 21,
  },
  {
    gender: "male",
    age: 36,
  },
];
const average = function (users) {
  let sum = 0;
  for (let yy of users) {
    sum += yy.age;
  }
  return sum / users.length;
};

console.log(average(users));

// Task 3. Find unique elements of an array

function findUniqueElements(arr) {
  let set = new Set(arr);
  for (let value of set) {
    if (arr.indexOf(value) !== arr.lastIndexOf(value)) set.delete(value);
  }
  return Array.from(set);
}
console.log(findUniqueElements([10, 5, 6, 10, 6, 7]));

// Task 4. create Counter

function CreateCounter() {
  let Counter = 0;
  return () => Counter++;
}
const getCount = CreateCounter();
console.log(getCount());
console.log(getCount());
console.log(getCount());
