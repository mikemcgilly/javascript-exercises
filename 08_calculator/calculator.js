const add = function() {
  let runningTotal = 0;
  for(let i = 0; i < arguments.length; i++) {
    runningTotal += arguments[i];
  }
  return runningTotal;
};

const subtract = function() {
  let runningDifference = 0;
  for(let i = 0; i < arguments.length; i++) {
    //if the first iteration set running difference to first arg
    if(i == 0){
      runningDifference = arguments[i];
    }else if(i > 0) {
      runningDifference -= arguments[i];
    }
  }
  return runningDifference;
	
};

const sum = function() {
  let runningTotal = 0;
  console.log("first element type: " + typeof arguments[0]);
  console.log("second element type : " + typeof arguments[1]);
  if(arguments[0] == '') {
    return 0;
  }else {
    for(i = 0; i < arguments.length; i++) {
      runningTotal += arguments[i];
    }
    return parseInt(runningTotal);
  }
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
