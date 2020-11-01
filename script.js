
// red border box for guide
let redBorderGuide = 'border: 2px solid red;'

//Calculator 
const calculatorContainerDiv = document.querySelector('#mainContainer');













let total = 0;
const updateTotalDisplay = function(sum) {
    document.write(total);
}


const add = function(input1,input2) {
    updateTotalDisplay(input1 + input2)
    return input1 + input2;
}

const subtract = function(input1, input2) {
    
    return input1 - input2
}

const multiply = function(input1, input2) {
    return input1 * input2;
}

const divide = function(input1, input2) {
    return input1 / input2; 
}

