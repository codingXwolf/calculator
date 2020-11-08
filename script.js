const calculatorData = {
    displayValue: '0',
    firstNum: null,
    waitSecondOperand: false,
    operator: null,
}

let mainContainer = document.getElementById('mainContainer');
let resultDisplay = document.getElementById('resultId');
resultDisplay.innerHTML = defaultResult;

const updateUserInput = input => {
    userInput = []
    userInput.push(+input)

    if(input === '+' || input === '-' || input === '*' || input === '/') {
         userInput.push(input, 1);
    }

    console.log(userInput);
    return userInput
}

const updateDisplay = value => {
   resultDisplay.innerHTML = value; 
}


const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        updateDisplay(e.target.value);
        updateUserInput(e.target.value);
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

