
let minWage = 6700;
const debt = document.querySelector('#debt');
const cost = document.querySelector('#cost');
const own = document.querySelector('#own');
const currency = document.querySelector('#currency');
const typeOfDebtInput = document.querySelectorAll('.form__typeOfDebtInput');
const typeOfCreditor = document.querySelector('.form__typeOfCreditor');
const formSumBlock = document.querySelector('.form__sum');
const person = document.querySelector('#person');
const company = document.querySelector('#company');

const fullName1 = document.getElementsByTagName('input')[0];
const address = document.getElementsByTagName('input')[1];
const fullNameValue = new Object();
fullNameValue.val = '';
fullNameValue.address = '';

debt.addEventListener('input', getPayment);
currency.addEventListener('change', toggleFormStruture);
company.addEventListener('change', togglePersonType);
person.addEventListener('change', toggleCompanyType);
own.addEventListener('change', toggleFormStruture);

fullName1.addEventListener('input', (event) => {
    const value = event.target.value;
    fullNameValue.val = value;
    localStorage.setItem('fullNameValue', (value));
    return fullNameValue.val;
});

address.addEventListener('input', (event) => {
    const value = event.target.value;
    fullNameValue.val = value;
    localStorage.setItem('address', (value));
    return fullNameValue.val;
});

function togglePersonType() {
    cost.innerText = `${minWage * 2} грн`;
    localStorage.cost = `${minWage * 2} грн`;
}

function toggleCompanyType() {
    cost.innerText = `${minWage} грн`;
    localStorage.cost = `${minWage} грн`;
}

function getPayment() {
    for (i = 0; i < typeOfDebtInput.length; i++) {
        if (typeOfDebtInput[i].id == "own" && typeOfDebtInput[i].checked == true) {
            if (debt.value * 0.02 <= 10 * minWage) {
                cost.innerText = (debt.value * 0.02).toFixed(2);
                // localStorage.cost = (debt.value * 0.02).toFixed(2);
                localStorage.setItem('cost', ((debt.value * 0.02).toFixed(2)))
            }
            else {
                cost.innerText = minWage * 10;
                // localStorage.cost = minWage*10;
                localStorage.setItem('cost', (minWage * 10))
            }
        }
    }
}

function toggleFormStruture() {
    typeOfCreditor.classList.toggle('hide');
    formSumBlock.classList.toggle('hide');
    cost.innerText = '';
}

document.oninput = function () {
    var input = document.querySelector('#debt');
    var inpVer = String(input.value);
    console.log(inpVer);

    input.value = input.value.replace(/[^\.\d]/g, '');
    if (input.value.indexOf(".") != '-1') {
        input.value = input.value.substring(0, input.value.indexOf(".") + 3);
    }
}
