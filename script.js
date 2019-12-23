/* variables */
const displayInput = document.querySelector('.display input');
const clipBoard = document.querySelector('.clip-board');
const passwordChars = document.querySelector('#number-of-chars');
const includeLowercase = document.querySelector('#include-lowercase');
const includeUppercase = document.querySelector('#include-uppercase');
const includeNumbers = document.querySelector('#include-numbers');
const includeSymbols = document.querySelector('#include-symbols');
const randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

/* event listeners */
passwordChars.addEventListener('click', highlightRange);
clipBoard.addEventListener('click', copyToClipBoard);
// clipBoard.addEventListener('mouseOver', selectInputText)
// generateButton.addEventListener('click', handleGenerateButtonClick);
document.forms[0].addEventListener('submit', handleGenerateButtonClick);
displayInput.addEventListener('change', (e) => {
    return;
});

/* event handlers */
function highlightRange(e) {
    passwordChars.select();
}

function handleGenerateButtonClick(e) {
    e.preventDefault();
    const includeLower = includeLowercase.checked;
    const includeUpper = includeUppercase.checked;
    const includeSym = includeSymbols.checked;
    const includeNum = includeNumbers.checked;
    if(!includeLower && !includeNum && !includeSym && !includeUpper){
        console.log("atleast on checkbox should be checked");
        return;
    }
    console.log(document.querySelector('.display input').value);
    displayInput.value = generatePassword(
        passwordChars.value,
        includeLower,
        includeUpper,
        includeNum,
        includeSym
    );
}

// function selectInputText(e) {
//     e.target.select();
// }

function copyToClipBoard(e) {
    document.querySelector('.display input').select();
    document.execCommand('copy');
}


/* functions */
function generatePassword(numChars, lower, upper, number, symbol) {
    let password = [];
    let arr = [{ lower }, { upper }, { number }, { symbol }].filter(ele => Object.values(ele)[0]);
    for(let i = 0 ; i < numChars ; i++) {
        const funcName = Object.keys(arr[Math.floor(Math.random() * arr.length)])[0];
        password.push(randomFunc[funcName]());
    }
    return password.join("");
}

function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]+-_~`?";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomLowerCase());

