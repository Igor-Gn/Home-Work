const grid = document.querySelector('.grid');
const header = document.querySelector('.header');
const currencyInput = document.querySelector(".currencyInput");
const currencyName = document.querySelector('#currency__name');
const currencyName1 = document.querySelector('#currency__name1');
const exchangeInputIncoming = document.querySelector('.exchange__input-incoming');
const exchangeInputEntranse = document.querySelector('.exchange__input-entranse');
const amountOfMoney = document.querySelector('.input__amount-of-money');
const resultExchange = document.querySelector('.resultExchange');
const buttonChange = document.querySelector('.button-change');
let exchangeRateEntranse = 1;
let exchangeRateIncoming;
let usd;
let data;

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(response => response.json())
    .then(json => data = json)

setTimeout(function () {
    header.innerHTML = `Дата обміну: ${data[0].exchangedate}`;

    data.forEach(element => {
        if (
            element.cc != "RUB" &&
            element.cc != "BYN" &&
            element.cc != "XAU" &&
            element.cc != "XPT" &&
            element.cc != "XAG" &&
            element.cc != "XPD" &&
            element.cc != "XDR"
        ) {
            grid.insertAdjacentHTML('beforeend',
                `<div class="grid_item">
          <div class="grid_cc">${element.cc}</div>
          <div class="grid_txt">${element.txt}</div>
          <div class="grid_rate">${element.rate}</div>
        </div>`);

            // create element option in currencyInput
            let option = document.createElement("option");
            option.innerHTML = `${element.cc} ${element.txt}`;
            currencyInput.appendChild(option);
        }
    });

    const exchangeInputIncoming = currencyInput.cloneNode(true);
    exchangeInputIncoming.id = "exchangeInputIncoming";
    currencyName.insertAdjacentElement('beforeend', exchangeInputIncoming);
    const exchangeInputEntranse = currencyInput.cloneNode(true);
    exchangeInputEntranse.id = "exchangeInputEntranse";
    currencyName1.insertAdjacentElement('beforeend', exchangeInputEntranse);
    usd = data[24].txt;
    exchangeRateIncoming = data[24].rate;
    exchangeInputEntranse.placeholder = usd;
    amountOfMoney.addEventListener('keyup', () => {
        converter();
    })

}, 600);

//Функція конвертування валюти
function converter() {
    const amountOfMoneyValue = +amountOfMoney.value;
    let result = exchangeRateEntranse / exchangeRateIncoming * amountOfMoneyValue;
    resultExchange.innerHTML = result.toFixed(2);
}

// перевірка на зміну валюти в вікні вибору
exchangeInputIncoming.addEventListener("change", () => {
    data.forEach(element => {

        if (element.cc == exchangeInputIncoming.value.slice(0, 3)) {
            exchangeRateEntranse = element.rate;
        }
        if (exchangeInputIncoming.value == '' && exchangeInputIncoming.className == 'exchange__input-incoming') {
            exchangeRateEntranse = 1;
        }
        if (exchangeInputIncoming.value == '' && exchangeInputIncoming.className == 'exchange__input-incoming turnDown') {
            exchangeRateEntranse = +data[24].rate;
        }
    })
    converter();
})
// перевірка на зміну валюти в вікні вибору
exchangeInputEntranse.addEventListener("change", () => {
    data.forEach(element => {

        if (element.cc == exchangeInputEntranse.value.slice(0, 3)) {
            exchangeRateIncoming = element.rate;
        }
        if (exchangeInputEntranse.value == '' && exchangeInputEntranse.className == 'exchange__input-entranse') {
            exchangeRateIncoming = +data[24].rate;
        }
        if (exchangeInputEntranse.value == '' && exchangeInputEntranse.className == 'exchange__input-entranse turnUp') {
            exchangeRateIncoming = 1;
        }
    })
    converter();
})
// зміна місць розташування валют
buttonChange.addEventListener('click', () => {
    exchangeInputIncoming.classList.toggle("turnDown");
    exchangeInputEntranse.classList.toggle("turnUp");
    let temp = exchangeRateEntranse;
    exchangeRateEntranse = exchangeRateIncoming;
    exchangeRateIncoming = temp;
    converter();
})

