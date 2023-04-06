const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, current) => acc + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, current) => acc * current);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num < 0) {
    return undefined;
  }
  if (num === 0) {
    return 1;
  }
  let factorial = num - 1;
  while (factorial > 1) {
    num *= factorial;
    factorial--;
  }
  return num;
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
