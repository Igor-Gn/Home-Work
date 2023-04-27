const nightMode = document.querySelector('#night__mode');
const reservationScreen = document.querySelector('.reservation__screen');
const showModalWindow = document.querySelector('#coupons');
let modalWindow = document.querySelector('#modal-window');
let discount = 1;
let refuseDiscontDone = 0;
const getDiscont = document.querySelector('.modal-window-btn-yes');
const refuseDiscont = document.querySelector('.modal-window-btn-no');
let checkCircle = document.querySelectorAll('.check-circle');
const constructorPizzaImage = document.querySelector('.pizza-img-slice');
const mint = document.querySelector('.mint');
const ingredientButton = document.querySelectorAll('.ingredients-pizza-open');
const sousegeimage = document.querySelector('.sousege');
const baconImage = document.querySelector('.bacon');
const mushroomImage = document.querySelector('.mushroom');
const octopusImage = document.querySelector('.octopus');
const tomatoImage = document.querySelector('.tomato');
const olivesImage = document.querySelector('.olives');
const pepperImage = document.querySelector('.pepper');
const prawnImage = document.querySelector('.prawn');
const onionImage = document.querySelector('.onion');
const ruccolaImage = document.querySelector('.ruccola');
const mintImage = document.querySelector('.mint');
const sizePizza = document.querySelectorAll('input[type="radio"]');
const sizePizzaSel = document.querySelector('.size-pizza');
const sizePizzaSmall = document.querySelector('#one');
const sizePizzaMiddle = document.querySelector('#two');
const sizePizzaBig = document.querySelector('#three');
const imgIngredient = document.querySelectorAll('.img-ingredient');
const less = document.querySelector('.less');
const numberPieces = document.querySelector('.number-pieces');
const more = document.querySelector('.more');
const nameCheckPizza = document.querySelector('.name__check-pizza');
const prise = document.querySelector('.price-number');
const ingredientsPizza = document.querySelector('.ingredients-pizza')
let cost;
const costWithNotDiscont = document.querySelector('.discounted_price-all-number');
const ingredientPizza = ['sousege', 'bacon', 'mushroom', 'octopus', 'tomato', 'olives', 'pepper', 'prawn', 'onion', 'ruccola', 'mint'];
let ingredientPizzaInserted = [];
let sizePizzaCurrent = 'Small "L"';
let prisePizzaSize = 200;
const addToOrder = document.querySelector('.add-to-order');
let filling = '';
const payableItemTotal = document.querySelector('.payable-item-total');

let payableItemDiscont = document.querySelector('.payable-item-discont');
let payableToPay = document.querySelector('.payable-to-pay');
let amountOfingredient = 0;
let numberPiecesNow = 1;
const userCheck = document.querySelector('.user-check');
const cuponCode = document.querySelector('.cupon-code');
const modaWindowCuponSuccessfully = document.querySelector('.modal-window-cupon-successfully');
const cuponSuccessfullyBtn = document.querySelector('.cupon-successfully-btn');

nightMode.addEventListener('click', nightModeSwith);
cuponSuccessfullyBtn.addEventListener('click', () => {
    modaWindowCuponSuccessfully.classList.toggle('hide');
})
getDiscont.addEventListener('click', getCoupon);
refuseDiscont.addEventListener('click', canselCoupon);
addToOrder.addEventListener('click', addToOrderIngedients);
//функція розрахунку вартості замовлення при збільшенні кількості 
more.addEventListener('click', () => {
    numberPiecesNow = +numberPieces.textContent + 1;

    if (numberPiecesNow <= 10) {
        numberPieces.innerText = numberPiecesNow;
        prise.innerText = (prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow * discount;
        costWithNotDiscont.innerText = (prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow;
        payableItemTotal.innerText = (prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow * discount;
        payableItemDiscont.innerText = Math.ceil((prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow * (1 - discount) * 100) / 100;
        payableToPay.innerText = 20 + ((prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow * discount);
    }

});
//функція розрахунку вартості замовлення при зменшенні кількості
less.addEventListener('click', () => {
    numberPiecesNow = +numberPieces.textContent - 1;
    if (numberPiecesNow >= 1) {
        numberPieces.innerText = numberPiecesNow;
        prise.innerText = (prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow * discount;
        costWithNotDiscont.innerText = (prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow;
        payableItemTotal.innerText = (prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow * discount;
        payableItemDiscont.innerText = Math.ceil((prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow * (1 - discount) * 100) / 100;
        payableToPay.innerText = 20 + ((prisePizzaSize + (amountOfingredient * 10)) * numberPiecesNow * discount);
    }

});
//функція додавання вартості власної піци до чеку
function addToOrderIngedients() {


    userCheck.classList.remove('hide')
    filling = '';
    amountOfingredient = 0;
    ingredientPizzaInserted = [];
    for (let i = 0; i < ingredientButton.length; i++) {
        if (ingredientButton[i].classList.length > 1) {
            ingredientPizzaInserted.push(ingredientPizza[i]);
            amountOfingredient += 1;
        }
    }
    if (amountOfingredient < 2) {
        console.log(amountOfingredient);
        Swal.fire('Виберіть мінімум два інгридієнти!');
    }
    else {
        filling = ingredientPizzaInserted.join(', ');
        nameCheckPizza.innerText = `${sizePizzaCurrent} Pizza with: ${filling}`;
        prise.innerText = `${(prisePizzaSize + (amountOfingredient * 10)) * discount}`;
        cost = +prise.textContent / discount;

        payableItemTotal.innerText = `${(prisePizzaSize + (amountOfingredient * 10)) * discount}`;
        payableItemDiscont.innerText = `${Math.ceil((prisePizzaSize + (amountOfingredient * 10)) * (1 - discount) * 100) / 100}`;
        payableToPay.innerText = `${((prisePizzaSize + (amountOfingredient * 10)) * discount) + 20}`;
        costWithNotDiscont.innerText = `${prisePizzaSize + (amountOfingredient * 10)}`
    }
}

//Фуyкція вибору розміру піци
for (let i = 0; i < sizePizza.length; i++) {
    sizePizza[i].addEventListener("change", function () {
        if (sizePizzaSmall.checked == true) {
            for (i = 0; i < imgIngredient.length; i++) {
                imgIngredient[i].style.setProperty('width', '30vw');
                sizePizzaCurrent = 'Small "L"';
                prisePizzaSize = 200;
                if (window.innerWidth <= 900) {
                    ingredientsPizza.style = 'padding-top: 33vw;'
                }
            }
        }
        else if (sizePizzaMiddle.checked == true) {
            for (i = 0; i < imgIngredient.length; i++) {
                imgIngredient[i].style.setProperty('width', '36vw');
                sizePizzaCurrent = 'Medium "XL"';
                prisePizzaSize = 250;
                if (window.innerWidth <= 900) {
                    ingredientsPizza.style = 'padding-top: 39vw;'
                }

            }
        }
        else if (sizePizzaBig.checked == true) {
            for (i = 0; i < imgIngredient.length; i++) {
                imgIngredient[i].style.setProperty('width', '42vw');
                sizePizzaCurrent = 'Big "XXL"';
                prisePizzaSize = 300;
                if (window.innerWidth <= 900) {
                    ingredientsPizza.style = 'padding-top: 45vw;'
                }
            }
        }
    });
}

function sizePizzaSelect() {
    console.log('hello');
}

function getCoupon() {
    discount = .8;
    cuponCode.innerText = 'Successfully';
    cuponCode.style = 'color: rgb(45 199 52)';
    modalWindow.classList.toggle('hide');
    showModalWindow.classList.toggle('hide');
    modaWindowCuponSuccessfully.classList.toggle('hide');
}

function addPizza() {
    this.firstElementChild.classList.toggle('hide');
    this.lastElementChild.classList.toggle('hide');

}
function canselCoupon() {
    refuseDiscontDone = 1;
    modalWindow.classList.toggle('hide');
    showModalWindow.classList.toggle('hide');
}

showModalWindow.addEventListener('click', function () {
    if (refuseDiscontDone !== 1) {
        modalWindow.classList.toggle('hide');
    }

});

clientNumber.addEventListener('keypress', () => {
    let clientNumber = document.querySelector('#clientNumber');

    if (clientNumber.value.length >= 9) {
        return clientNumber.value = clientNumber.value.slice(0, 9);
    }
})
// функція перемикання нічного режиму
function nightModeSwith() {

    if (nightMode.children[0].className == 'night__mode') {
        const elm = document.documentElement;
        elm.style.setProperty('--color-background-day', '#151515');
        elm.style.setProperty('--color-text-day', 'var(--color-text-night)');
        elm.style.setProperty('--color-text-day-menu', 'var(--color-text-night-menu)');
        elm.style.setProperty('--color-check-menu', 'var(--color-check-menu-nigt)');
        elm.style.setProperty('--color-check__screen-header-day', 'var(--color-check__screen-header-night)');
        elm.style.setProperty('--color-check__screen-icon-day', 'var(--color-check__screen-icon-nigt)');
        elm.style.setProperty('--color-text-black-day', 'var(--color-text-black-night)');
        nightMode.children[0].className = 'night__mode hide';
        nightMode.children[1].className = 'night__mode';
        reservationScreen.style.setProperty('background-color', 'var(--color-background-night)');
    }
    else {
        const elm = document.documentElement;
        elm.style.setProperty('--color-background-day', '#F4F4F4');
        elm.style.setProperty('--color-text-day', '#FF5B00');
        elm.style.setProperty('--color-text-day-menu', '#7B3000');
        elm.style.setProperty('--color-check-menu', '#d9d9d994');
        elm.style.setProperty('--color-check__screen-header-day', '#212121');
        elm.style.setProperty('--color-check__screen-icon-day', '#1E1E1E');
        elm.style.setProperty('--color-text-black-day', '#000000');
        nightMode.children[0].className = 'night__mode';
        nightMode.children[1].className = 'night__mode hide';
        reservationScreen.style.setProperty('background-color', '#F4F4F4');
    }
}

//accordion
var listItem = document.querySelectorAll('.accordion');
for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', showListItem);
}
function showListItem() {
    this.nextElementSibling.classList.toggle('hide');
}

for (let i = 0; i < ingredientButton.length; i++) {
    ingredientButton[i].addEventListener('click', showIngredient);

}


// функція відображення інгридієнтів на піці-конструктору
function showIngredient() {

    this.classList.toggle('button-pressed');
    if (this.innerText == 'Sousege') {

        sousegeimage.classList.toggle('hide');

    }
    else if (this.innerText == 'Mushroom') {
        mushroomImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Bacon') {
        baconImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Octopus') {
        octopusImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Tomato') {
        tomatoImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Olives') {
        olivesImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Pepper') {
        pepperImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Prawn') {
        prawnImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Onion') {
        onionImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Ruccola') {
        ruccolaImage.classList.toggle('hide');
    }
    else if (this.innerText == 'Mint') {
        mintImage.classList.toggle('hide');
    }
}

