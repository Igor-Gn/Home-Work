const key = document.querySelector(".key"),
    code = document.querySelector(".code"),
    which = document.querySelector(".which"),
    historyBlock = document.querySelector(".historyBlock"),
    headerCode = document.querySelector(".header__code"),
    headerWhich = document.querySelector(".header1__which");

window.addEventListener("keyup", (event) => {

    array.forEach(el => {
        if (event.key.toUpperCase() === el) {
            historyBlock.removeChild(historyBlock.childNodes[array.indexOf(el)])
            let updateArr = array.splice(array.indexOf(el), 1)
        }
    })
    key.innerHTML = event.key;
    code.innerHTML = event.code;
    which.innerHTML = event.which;
    console.log(event.which);

    addLetterHistory();

    headerCode.innerHTML = event.which;
    headerWhich.innerHTML = event.which;
});

let array = [];

function addLetterHistory() {
    let current = event.key.toUpperCase();
    array.unshift(current);

    let li = document.createElement('li');
    li.innerHTML = array[0];

    historyBlock.insertAdjacentElement("afterbegin", li);

    if (array.length > 4) {
        array = array.slice(0, 4);
        historyBlock.lastElementChild.remove();
    }
}

