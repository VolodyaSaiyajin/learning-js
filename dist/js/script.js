// let buttonPlus = document.getElementById('buttonPlus');
// let buttonMinus = document.getElementById('buttonMinus');
// let buttonSplit = document.getElementById('buttonSplit');
// let buttonMultiply = document.getElementById('buttonMultiply');

// let firstValue = document.getElementById('firstValue');
// let secondValue = document.getElementById('secondValue');
// let result = document.getElementById('result');
// let buttonResult = document.getElementById('buttonResult');

// function useNumber() {
//   number1 = firstValue.value;
//   number2 = secondValue.value;
// }

// function onClickButtonPlus() {
//   useNumber();
//   resultValue = Number(number1) + Number(number2);
// }
// function onClickButtonMinus() {
//   useNumber();
//   resultValue = Number(number1) - Number(number2);
// }
// function onClickButtonSplit() {
//   useNumber();
//   resultValue = Number(number1) / Number(number2);
// }
// function onClickButtonMultiply() {
//   useNumber();
//   resultValue = Number(number1) * Number(number2);
// }

let firstInput = document.getElementById('firstNumber');
let secondInput = document.getElementById('secondNumber');
let testingButton = document.getElementById('testingButton');
let resultInput = document.getElementById('resultInput');
let operationButtons = document.querySelectorAll('.calc__buttons').childNodes;

function getNumber1() {
    let firstNumber = Number(firstInput.value);

    return firstNumber;
}
function getNumber2() {
    let secondNumber = Number(secondInput.value);

    return secondNumber;
}



// function doOperationButtonPlus() {

//     resultValue = getNumber1() + getNumber2();

// }

// function doOperationbuttonMinus() {
//     resultValue = getNumber1() - getNumber2();
// }

// function doOperationbuttonMultipe() {

//     resultValue = getNumber1() * getNumber2();
// }

// function doOperationbuttonDivide() {

//     resultValue = getNumber1() / getNumber2();
// }

function makeOperation(operationCode) {
    if (operationCode = '+') {
        resultValue = getNumber1() + getNumber2();
    } else if (operationCode = '-') {
        resultValue = getNumber1() - getNumber2();
    } else if (operationCode = '*') {
        resultValue = getNumber1() * getNumber2();
    } else if (operationCode = '/') {
        resultValue = getNumber1() / getNumber2();
    }
}

function toggleOperationButton() {
    for (let i = 0; i < operationButtons.length; i++) {
        operationCode = operationButtons.currentTarget[i];
        makeOperation();
    }
}

function doOperationbuttonResult() {
    resultInput.value = resultValue;
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

function test() {
    console.log(operationButtons);
}

// buttonNumberClick.addEventListener('click', doClickOnNumber)
// operationButtons.addEventListener('click', toggleOperationButton);
buttonResult.addEventListener('click', doOperationbuttonResult);
testingButton.addEventListener('click', test);