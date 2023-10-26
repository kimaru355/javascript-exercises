const reverseString = function (myString) {
  let myArray = Array.from(myString);
  let arrayLength = myArray.length;
  let reversedArray = [];
  for (let i = 0; i < arrayLength; i++) {
    reversedArray.unshift(myArray[i]);
  }
  let reversedString = reversedArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
