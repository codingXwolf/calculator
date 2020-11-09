const calculatorData = {
    displayValue: '0',
    firstNum: null,
    waitSecondNum: false,
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
    if (calculatorData.waitSecondNum === true) {
        calculatorData.displayValue = digit;
        calculatorData.waitSecondNum = false;
    } else {
            calculatorData.displayValue =
              calculatorData.displayValue === "0"
                ? digit
                : calculatorData.displayValue + digit;
    }
    updateDisplay()
    console.table(calculatorData)
}

const inputDecimal = dot => {
    if (!calculatorData.displayValue.includes(dot)) {
        calculatorData.displayValue += dot;
    }
}

const handleOperator = (nextOperator) => {
    // convert displayValue to a floating-point number;
    const convertInputValue = parseFloat(calculatorData.displayValue);
    console.log(convertInputValue);

    // verify that firstNum is null and convertInputValue is not a Nan value
    if(calculatorData.firstNum === null && !isNaN(convertInputValue)) {
        calculatorData.firstNum = convertInputValue
    }

    calculatorData.waitSecondNum = true;
    calculatorData.operator = nextOperator;
};


const clearData = () => {
    calculatorData.displayValue = '0';
    calculatorData.firstNum = null;
    calculatorData.waitSecondNum = false;
    calculatorData.operator = null;
    updateDisplay();
}

const buttons = document.querySelector('#mainContainer');
buttons.addEventListener('click', e => {
    if (!e.target.matches('button')) {
      return;
    }

    if (e.target.classList.contains('operator')) {
        handleOperator(e.target.value);
        updateDisplay();
        console.table(calculatorData);
        console.log('operator', e.target.value);
        return;
    }

    if (e.target.classList.contains('decimal')) {
      console.log('decimal', e.target.value);
      inputDecimal(e.target.value);
      updateDisplay();
      return;
    }

    if (e.target.classList.contains('clear')) {
        clearData();
        console.table(calculatorData);
        console.log('clear', e.target.value);
        return;
    }
    inputDigits(e.target.value);
    console.table(calculatorData)
    console.log('digit', e.target.value);
})


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
            return firstNum < 0 ? -Math.abs(firstNum) : Math.abs(firstNum);
        case '%':
            return Math.round(firstNum * 100);
        default:
            break;
    }
}

