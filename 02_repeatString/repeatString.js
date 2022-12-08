const repeatString = function(string, num) {
    let newString = '';
    for(let i = 0; i < num; i++) {
        newString += string;
    }
    if(num < 0) {
        return 'ERROR';
    }else if(num > 0) {
        return newString;
    }else if(num == 0) {
        return '';
    }
};

// Do not edit below this line
module.exports = repeatString;
