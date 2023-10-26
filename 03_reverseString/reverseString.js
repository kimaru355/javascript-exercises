const reverseString = function (myString) {
  let myArray = Array.from(myString);
  let reversedArray = [];
  for (let i = 0; i < myArray.length; i++) {
    reversedArray.unshift(myArray[i]);
  }
  let reversedString = reversedArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
