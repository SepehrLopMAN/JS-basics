// Number generator

const createCounter =
  (num = 0) =>
  () =>
    ++num;

const counter = createCounter(44);
console.log(counter());
console.log(counter());
console.log(counter());

// Multiply

const multiply = (num1) => (num2) => (num3) => num3 * num2 * num1;
console.log(multiply(2)(4)(6));
console.log(multiply(3)(3)(3));
