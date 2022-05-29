// Strategies

const callback1 = (arr) => arr.reduce((a, b) => a + b);
const callback2 = (arr) => arr.reduce((a, b) => a * b);
const w = function (s, callback) {
  result = [];
  for (const val of s.split(" ")) {
    result.push(val.length);
  }
  return callback(result);
};

console.log(w("a bb ccc dddd", callback1)); // result: 10
console.log(w("a bb ccc dddd", callback2)); // result: 24

// Mocker

const mocker = function (arr) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(arr), 1000);
    });
};
const getUsers = mocker([{ id: 1, name: "User1" }]);
getUsers().then((users) => {
  // Will fire after 1 second.
  console.log(users); // result: [{id: 1, name: 'User1'}];
});

// Summarize1

const summarize1 = (p1, p2) => {
  return new Promise((resolve) => {
    p1.then((res1) => p2.then((res2) => resolve(res1 + res2)));
  });
};

const promise1 = Promise.resolve(4);
const promise2 = new Promise((resolve) => resolve(2));
summarize1(promise1, promise2).then((sum) => {
  console.log(sum);
});

// Summarize2

const summarize2 = async function (p1, p2) {
  const res1 = await p1;
  const res2 = await p2;
  return res1 + res2;
};

const promise3 = Promise.resolve(4);
const promise4 = new Promise((resolve) => resolve(2));
summarize2(promise3, promise4).then((sum) => {
  console.log(sum);
});
