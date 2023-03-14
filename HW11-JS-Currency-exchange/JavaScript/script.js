const grid = document.querySelector('.grid');
const header = document.querySelector('.header');
const currency1 = document.querySelector(".currency1");
const currencyName = document.querySelector('#currency__name');
const currencyName1 = document.querySelector('#currency__name1');
const currency3 = document.querySelector('.exchange__input1');
const currency4 = document.querySelector('.exchange__input2');
const amountOfMoney = document.querySelector('.input__amount-of-money');
const resultExchange = document.querySelector('.resultExchange');
const buttonChange = document.querySelector('.button2');
let chosenCurrency1;
let chosenCurrency2;
let chosenCurrency3 = 1;
let chosenCurrency4;
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

            // create element option in currency1
            let option = document.createElement("option");
            option.innerHTML = `${element.cc} ${element.txt}`;
            currency1.appendChild(option);
        }
    });

    const currency3 = currency1.cloneNode(true);  // clone currency1 list to currency2
    currency3.id = "currency3";
    currencyName.insertAdjacentElement('beforeend', currency3);

    const currency4 = currency1.cloneNode(true);  // clone currency1 list to currency2
    currency4.id = "currency4";
    currencyName1.insertAdjacentElement('beforeend', currency4);

    usd = data[24].txt;
    chosenCurrency4 = data[24].rate;
    currency4.placeholder = usd;


    amountOfMoney.addEventListener('keyup', () => {
        converter();
    })

}, 600);

function converter() {
    const amountOfMoneyValue = +amountOfMoney.value;
    let result = chosenCurrency3 / chosenCurrency4 * amountOfMoneyValue;
    resultExchange.innerHTML = result.toFixed(2);
}

currency3.addEventListener("change", () => {
    data.forEach(element => {

        if (element.cc == currency3.value.slice(0, 3)) {
            chosenCurrency3 = element.rate;
        }
        if (currency3.value == '') {
            chosenCurrency3 = 1;
        }
    })
    converter();
})

currency4.addEventListener("change", () => {
    data.forEach(element => {

        if (element.cc == currency4.value.slice(0, 3)) {
            chosenCurrency4 = element.rate;
        }
        if (currency4.value == '') {
            chosenCurrency4 = +data[24].rate;
        }
    })
    converter();
})

buttonChange.addEventListener('click', () => {
    currency3.classList.toggle("order5");
    currency4.classList.toggle("order2");
    let temp = chosenCurrency3;
    chosenCurrency3 = chosenCurrency4;
    chosenCurrency4 = temp;
    converter();
})

