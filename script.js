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

const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const operate = (operatorInput, firstNum, secondNum) => {
    if(operatorInput === '+') {
        return add(firstNum, secondNum);
    }
}