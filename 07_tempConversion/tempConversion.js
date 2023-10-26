const convertToCelsius = function (temperature) {
  temperature -= 32;
  temperature *= 5 / 9;
  temperature = Math.round(temperature * 10) / 10;
  return temperature;
};

const convertToFahrenheit = function (temperature) {
  temperature /= 5 / 9;
  temperature += 32;
  temperature = Math.round(temperature * 10) / 10;
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
