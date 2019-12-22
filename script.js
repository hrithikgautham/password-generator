/* variables */
const rangeInput = document.querySelector('#number-of-chars');
const clipBoard = document.querySelector('.clip-board');
const randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

/* event listeners */
rangeInput.addEventListener('click', highlightRange);
clipBoard.addEventListener('click', copyToClipBoard);
// clipBoard.addEventListener('mouseOver', selectInputText)

/* event handlers */
function highlightRange(e) {
    rangeInput.select();
}

// function selectInputText(e) {
//     e.target.select();
// }

function copyToClipBoard(e) {
    document.querySelector('.display input').select();
    document.execCommand('copy');
}


/* functions */
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