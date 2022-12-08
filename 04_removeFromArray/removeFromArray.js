//created argument "...theArgs" because there will be a variety of inputs potentially, makes into array
const removeFromArray = function(arrayInput, ...theArgs) {
    //loop thru argument array first. 
    for(let args of theArgs) {
        //for each argument loop through arrayInput and remove matches
        for(let i = 0; i < arrayInput.length; i++) {
            if(arrayInput[i] === args) {
                arrayInput.splice(i,1);
            }
        }   
    }
   return arrayInput;
};

// console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
