const add = function (...args) {
  return args.reduce((sum, num) => sum + num);
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  if (numArray.length === 0) {
    return 0;
  }
  if (numArray.every((num) => typeof num != typeof 8)) {
    return 0;
  }
  return numArray.reduce((sum, num) => sum + num);
};

const multiply = function (numArray) {
  return numArray.reduce((result, num) => result * num);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let result = 1;
  if (num <= 0) {
    return result;
  }
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
