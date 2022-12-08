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
//pick up here, for some reason the array [7, 11] is not behaving
//like it was in earlier examples. instead of the usual [0] indexing
//returning individual arguments as though they're part of an array - 
//instead its returning 7,11 as the first element. either i dont understand
//the arguments object or theres some fuckery going on with the types
//and i need to somehow cast them or something
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
