const sumAll = function(firstNumber, secondNumber) {
    let answer = 0;
    let maxNumber = Math.max(firstNumber,secondNumber);
    let minNumber = Math.min(firstNumber,secondNumber);
    let numbersToSum = [];

    
    if(typeof firstNumber != 'number') {
        return 'ERROR';
    }else if(firstNumber < 0) {
        return 'ERROR';
    }else if(typeof secondNumber != 'number') {
        return 'ERROR';
    }else if(secondNumber < 0) {
        return 'ERROR';
    }

    //add all nums to array
    for(let i = minNumber; i <= maxNumber; i++) {
        numbersToSum.push(i);
    }
//should i redo this as a regular for loop bec the log is pringing and emtpy array
    // //loop through array adding each element to the answer
    // for(let elem of numbersToSum) {
    //     answer += elem;
    // }

    for(let i = 0; i < numbersToSum.length; i++) {
        answer += numbersToSum[i];
    }

    return answer; 
};

// Do not edit below this line
module.exports = sumAll;
