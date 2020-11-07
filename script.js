let defaultResult = 0;
let mainContainer = document.getElementById('mainContainer');
let resultDisplay = document.getElementById('resultId');
resultDisplay.innerHTML = defaultResult;

const updateDisplay = value => {
   resultDisplay.innerHTML = value; 
}





const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        updateDisplay(e.target.value);
    })
})

// const add = function(input1,input2) {
//     updateTotalDisplay(input1 + input2)
//     return input1 + input2;
// }

// const subtract = function(input1, input2) {
    
//     return input1 - input2
// }

// const multiply = function(input1, input2) {
//     return input1 * input2;
// }

// const divide = function(input1, input2) {
//     return input1 / input2; 
// }

