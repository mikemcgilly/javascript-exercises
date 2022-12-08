const convertToCelsius = function(temperatureF) {
  let fToC = (temperatureF - 32) * (5/9);// from C to F: (temperatureF * (9/5) + 32);
  fToC = Math.round(fToC * 10) / 10;
  console.log("F to C: " + fToC);
  return fToC;
};

const convertToFahrenheit = function(temperatureC) {
  let cToF = (temperatureC * (9/5) + 32);
  cToF = Math.round(cToF * 10) / 10;
  console.log("C to F: " + cToF);
  return cToF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
