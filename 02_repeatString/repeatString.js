const repeatString = function (myString, num) {
  if (num < 0) {
    return "ERROR";
  }
  let fullString = "";
  for (let i = 0; i < num; i++) {
    fullString += myString;
  }
  return fullString;
};

// Do not edit below this line
module.exports = repeatString;
