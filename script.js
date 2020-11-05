let total = 0;
const updateTotalDisplay = function(sum) {
    document.write(total);
}

const buttonPress = document.querySelector('.button');
buttonPress.addEventListener('click', (e) => {
    console.log(e.target.value);
})


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

