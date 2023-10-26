const sumAll = function (...args) {
  if (args.length != 2) {
    return "ERROR";
  }
  if (typeof args[0] != "number" || typeof args[1] != "number") {
    return "ERROR";
  }
  let sum = 0;
  let largerNum;
  if (args[0] < 0 || args[1] < 0) {
    return "ERROR";
  } else if (args[0] > args[1]) {
    largerNum = args[0];
    args.shift();
  } else {
    largerNum = args[1];
    args.pop();
  }
  for (let num = args[0]; num <= largerNum; num++) {
    sum += num;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
