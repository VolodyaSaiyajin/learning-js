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
let operationButtons = document.getElementsByClassName('calc__action');
let number = document.querySelectorAll('#number');
let firstInput = document.getElementById('firstNumber');
let secondInput = document.getElementById('secondNumber');
let resultInput = document.getElementById('resultInput');

let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultipe = document.getElementById('buttonMultipe');
let buttonDivide = document.getElementById('buttonDivide');
let buttonResult = document.getElementById('buttonResult');
let testingButton = document.getElementById('testingButton');



function getNumber1() {
    let firstNumber = Number(firstInput.value);

    return firstNumber;
}
function getNumber2() {
    let secondNumber = Number(secondInput.value);

    return secondNumber;
}



function doOperationButtonPlus() {

    resultValue = getNumber1() + getNumber2();

}

function doOperationbuttonMinus() {
    resultValue = getNumber1() - getNumber2();
}

function doOperationbuttonMultipe() {

    resultValue = getNumber1() * getNumber2();
}

function doOperationbuttonDivide() {

    resultValue = getNumber1() / getNumber2();
}

function doOperationbuttonResult() {
    resultInput.value = resultValue;
}

function test() {
    numberIndex = number.innerHTML;

    console.log(numberIndex);
}



// buttonNumberClick.addEventListener('click', doClickOnNumber)
buttonPlus.addEventListener('click', doOperationButtonPlus);
buttonMinus.addEventListener('click', doOperationbuttonMinus);
buttonMultipe.addEventListener('click', doOperationbuttonMultipe);
buttonDivide.addEventListener('click', doOperationbuttonDivide);
buttonResult.addEventListener('click', doOperationbuttonResult);
testingButton.addEventListener('click', test);