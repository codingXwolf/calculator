const calculatorData = {
    displayValue: '0',
    firstNum: null,
    waitSecondOperand: false,
    operator: null,
}

console.table(calculatorData);
let mainContainer = document.getElementById('mainContainer');
let resultDisplay = document.querySelector('#resultId');

const updateDisplay = () => {
    console.log(resultDisplay.value);
   resultDisplay.value = calculatorData.displayValue; 
}
updateDisplay();

const inputDigits = digit => {
    const { displayValue } = calculatorData;
    calculatorData.displayValue = displayValue === '0' ? digit : displayValue + digit;
    updateDisplay();
}

const clearData = () => {
    calculatorData.displayValue = '0';
    calculatorData.firstNum = null;
    calculatorData.waitSecondOperand = false;
    calculatorData.operator = null;
    updateDisplay();
}

const buttons = document.querySelector('#mainContainer');
buttons.addEventListener('click', e => {
    if (!e.target.matches('button')) {
      return;
    }

    if (e.target.classList.contains('operator')) {
        calculatorData.operator = e.target.value;
        console.table(calculatorData);
        console.log('operator', e.target.value);
        return;
    }

    if (e.target.classList.contains('decimal')) {
      console.log('decimal', e.target.value);
      return;
    }

    if (e.target.classList.contains('clear')) {
        clearData();
        console.table(calculatorData);
        console.log('clear', e.target.value);
        return;
    }
    calculatorData.firstNum = inputDigits(e.target.value);
    console.table(calculatorData)
    console.log('digit', e.target.value);
})


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

const operate = (operator, firstNum, secondNum) => {
    
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        case 'plus-negative':
            return Math.sign(firstNum);
        case '%':
            return Math.round(firstNum * 100);
        default:
            break;
    }
}

