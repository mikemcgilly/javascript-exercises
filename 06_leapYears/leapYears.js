const leapYears = function(yearToCheck) {
    let answer = false;

    //div by 400 and 100
    if((yearToCheck % 400 == 0) && (yearToCheck % 100 == 0)) {
        answer = true;
    }else if(yearToCheck % 100 == 0) { //div by 100
        answer = false;
    }else if(yearToCheck % 4 == 0) { //div by 4
        answer = true;
    }

    return answer;
};

// Do not edit below this line
module.exports = leapYears;
