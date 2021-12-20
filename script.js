//global variables
const inputField = document.getElementById('input');
const outputField = document.getElementById('output');

//decoding
function decode() {
    const inputFieldValue = document.getElementById('input').value;
    outputField.innerHTML = inputFieldValue;
}

//copy text
function copyText() {
    const getOutput = document.getElementById('output');

    getOutput.select();
    getOutput.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
/**********/


function changeBtnVal() {
    if (btn.value == "Copy Result") {
        btn.setAttribute('value', 'Copied!');
    }
}

//event listeners
const btn = document.getElementById('btn'); //global variable
const btnClear = document.getElementById('btn-clear'); //global variable

window.onload = function () {
    decode();
}

inputField.onkeyup = function () {
    decode();
}
inputField.onkeydown = function () {
    decode();
}

inputField.onfocus = function () {
    btn.setAttribute('value', 'Copy Result');
}

//clear input field
btnClear.onclick = function () {
    inputField.value = '';
}

btn.onclick = function () {
    copyText();
    changeBtnVal();
};