const fibonacci = function (num) {
  if (typeof num === "string") {
    num = parseInt(num, 10);
  }
  if (num < 1) {
    return "OOPS";
  }
  let fib1 = 1;
  let fib2 = 1;
  let fib3;
  let counter = 1;
  while (true) {
    if (num === counter) {
      return fib1;
    }
    fib3 = fib1;
    fib1 = fib2;
    fib2 += fib3;
    counter += 1;
  }
};

// Do not edit below this line
module.exports = fibonacci;
