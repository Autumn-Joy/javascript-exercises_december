let fahrenheit;
let celcius;

const convertToCelsius = function(fahrenheit) {
//T(°F) = T(°C) × 9/5 + 32
//°C = (°F - 32) ÷ (9/5)
celcius = (fahrenheit - 32) / (9/5);
celcius = Math.round(celcius * 10) / 10;
return celcius;
};

const convertToFahrenheit = function(celcius) {
  fahrenheit = celcius * (9/5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
