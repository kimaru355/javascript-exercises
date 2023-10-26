const removeFromArray = function (...args) {
  let myArray = args[0];
  args.shift();
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
      if (args[i] === myArray[j]) {
        myArray.splice(j, 1);
      }
    }
  }
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
