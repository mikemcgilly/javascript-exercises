const reverseString = function(inputString) {
    const reverseArray = [];
    for(let i = inputString.length; i >= 0; i--) {
        reverseArray.push(inputString[i]);
    }
    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
