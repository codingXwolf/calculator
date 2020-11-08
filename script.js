const calculatorData = {
    displayValue: '0',
    firstNum: null,
    waitSecondOperand: false,
    operator: null,
}

console.table(calculatorData);
let mainContainer = document.getElementById('mainContainer');
let resultDisplay = document.querySelector('#resultId');
resultDisplay.innerHTML = calculatorData.displayValue;


const updateDisplay = () => {
    console.log(resultDisplay.value);
   resultDisplay.value = calculatorData.displayValue; 
}
updateDisplay();

const inputDigits = digit => {
    const { displayValue } = calculatorData;
    calculatorData.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        updateDisplay(e.target.value);
    })
})

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', e => {
        console.log(e.target.value);
        updateUserInput(e.target.value)
    })
});

const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const subtract = (firstNum, secondNum) => {
    return firstNum - secondNum;
}

const multiply = (firstNum, secondNum) => {
    return firstNum * secondNum;
}

const divide = (firstNum, secondNum) => {
    return firstNum / secondNum;
}

const operate = (operatorInput, firstNum, secondNum) => {
    if(operatorInput === '+') {
        return add(firstNum, secondNum);
    }

    if(operatorInput === '-') {
        return subtract(firstNum, secondNum);
    }

    if(operatorInput === '*') {
        return multiply(firstNum, secondNum);
    }

    if(operatorInput === '/') {
        return divide(firstNum, secondNum)
    }

    if(operatorInput === 'plus-negative') {
        return Math.sign(firstNum);
    }
}

