var number = document.querySelectorAll('.number');
var inp = document.querySelector('.calculator__inp');
var sign = document.querySelectorAll('.sign');
var result = document.querySelector('.result');
var clear = document.querySelector('.clear');
var toggleSign = document.querySelector('.toggleSign');
var percent = document.querySelector('.percent');
var delLastEl = document.querySelector('.backspace');
var parenthesis = document.querySelector('.parenthesis');

for (i = 0; i < number.length; i++) {
    number[i].addEventListener('click', insertValue);
}
for (i = 0; i < sign.length; i++) {
    sign[i].addEventListener('click', insertValue);
}

function insertValue() {
    var inpVal = String(inp.value);

    if (isNaN(this.innerText) == false) {
        inp.value += this.innerText;
        return;
    }

    var symbols = "+-/*";
    if (inpVal.length > 0) {
        var lastSign = inpVal[inpVal.length - 1];

        if (symbols.includes(lastSign)) {
            return;
        }
    }

    if (this.innerText == ".") {
        var res = inpVal.split(/[\+\-\/\*]/g);
        var lastPoint = inpVal;
        if (res.length > 1) {
            lastPoint = res[res.length - 1];
        }

        if (lastPoint.includes(".")) {
            return;
        }
    }
    if (inp.value.length == 0) {
        return;
    }
    inp.value += this.innerText;
}

result.addEventListener('click', getResult);

function getResult() {
    inp.value = eval(inp.value)
}

document.body.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        getResult()
    }
})
clear.addEventListener('click', clearAll);
function clearAll() {
    inp.value = "";
}
toggleSign.addEventListener('click', addToggleSign);
function addToggleSign() {
    inp.value = inp.value * - 1;
}

percent.addEventListener('click', getPercent);
function getPercent() {
    inp.value = inp.value / 100;
}
delLastEl.addEventListener('click', getDelLastEl1);

function getDelLastEl1() {
    var inpVal = String(inp.value);
    inp.value = inpVal.slice(0, -1);
}