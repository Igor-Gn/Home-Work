var image = document.getElementById('kettleBigImage');

var bigImage = ['./image/smeg-blue.png', './image/smeg-red.png', './image/smeg-pink.png', './image/smeg-beige.png'];
const products = document.querySelector('.productss');
const product = document.querySelector('.products');
const dropDownMenu = document.querySelector('.drop-down-menu');
const change = document.querySelectorAll('.change');
var listItem = document.querySelectorAll('.bold');
const menuIphoneIcon = document.querySelector('.image-menu-iphone');
const menuIphone = document.querySelector('.menu-iphone');
const aesthetics = document.querySelector('.aesthetics');
const inspirations = document.querySelector('.inspirations');


function changeColorBlue() {
    document.querySelector(".content").style.backgroundColor = '#95CFD5';
    kettleBigImage.src = bigImage[0];
    document.getElementById('blue').checked = true;
    document.querySelector('.kettle-small-icon>:nth-child(1)').style.backgroundColor = 'white';
    document.querySelector('.kettle-small-icon>:nth-child(4)').style.backgroundColor = '#95CFD5';
    document.querySelector('.kettle-small-icon>:nth-child(2)').style.backgroundColor = '#95CFD5';
    document.querySelector('.kettle-small-icon>:nth-child(3)').style.backgroundColor = '#95CFD5';

}
function changeColorRed() {
    kettleBigImage.src = bigImage[1];
    document.querySelector('.content').style.backgroundColor = '#C42129';
    document.querySelector('.kettle-small-icon ')
    document.getElementById('red').checked = true;
    document.querySelector('.kettle-small-icon>:nth-child(2)').style.backgroundColor = 'white';
    document.querySelector('.kettle-small-icon>:nth-child(1)').style.backgroundColor = '#C42129';
    document.querySelector('.kettle-small-icon>:nth-child(4)').style.backgroundColor = '#C42129';
    document.querySelector('.kettle-small-icon>:nth-child(3)').style.backgroundColor = '#C42129';
}
function changeColorPink() {
    document.querySelector('.content').style.backgroundColor = '#E0ADC5';
    kettleBigImage.src = bigImage[2];
    document.getElementById('pink').checked = true;
    document.querySelector('.kettle-small-icon>:nth-child(3)').style.backgroundColor = 'white';
    document.querySelector('.kettle-small-icon>:nth-child(1)').style.backgroundColor = '#E0ADC5';
    document.querySelector('.kettle-small-icon>:nth-child(2)').style.backgroundColor = '#E0ADC5';
    document.querySelector('.kettle-small-icon>:nth-child(4)').style.backgroundColor = '#E0ADC5';
}
function changeColorBeige() {
    document.querySelector('.content').style.backgroundColor = '#F5C7B3';
    kettleBigImage.src = bigImage[3];
    document.getElementById('beije').checked = true;
    document.querySelector('.kettle-small-icon>:nth-child(4)').style.backgroundColor = 'white';
    document.querySelector('.kettle-small-icon>:nth-child(1)').style.backgroundColor = '#F5C7B3';
    document.querySelector('.kettle-small-icon>:nth-child(2)').style.backgroundColor = '#F5C7B3';
    document.querySelector('.kettle-small-icon>:nth-child(3)').style.backgroundColor = '#F5C7B3';
}

product.addEventListener('mouseover', showMenuBigScreen);
product.addEventListener('click', showMenuBigScreen);

function showMenuBigScreen() {
    dropDownMenu.classList.toggle('show');
}
products.addEventListener('click', showMenu);

function showMenu() {
    dropDownMenu.classList.toggle('show');
    aesthetics.classList.toggle('hide');
    inspirations.classList.toggle('hide');
    products.classList.toggle('products-insert')
    let screenWidth = screen.availWidth;
    if (screenWidth < 400 && listItem[0].childElementCount < 1) {
        for (let i = 0; i < 3; i++) {
            listItem[i].insertAdjacentHTML('beforeend', '<span>+</span>');
        };
    }
    

    // listItem[0].nextElementSibling.className.includes('hide')
}
aesthetics.addEventListener('click', showMenuAesthetics)
function showMenuAesthetics() {
    aesthetics.classList.toggle('products-insert');
    products.classList.toggle('hide');
    inspirations.classList.toggle('hide');
}

inspirations.addEventListener('click', showMenuInspirations)
function showMenuInspirations() {
    inspirations.classList.toggle('products-insert');
    products.classList.toggle('hide');
    aesthetics.classList.toggle('hide');
}

dropDownMenu.addEventListener('mouseleave', hideMenu);
function hideMenu() {
    dropDownMenu.classList.remove('show');
}

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', showListItem);
}
function showListItem() {

    this.nextElementSibling.classList.toggle('hide');
    if (this.firstElementChild.innerText == '-') {
        this.firstElementChild.innerText = '+';
    }
    else {
        this.firstElementChild.innerText = '-';
    }
}

menuIphoneIcon.addEventListener('click', showHeaderMenu);
function showHeaderMenu() {
    menuIphone.classList.toggle('open');
    if (products.className == 'productss products-insert') {

        products.className = 'productss';
        aesthetics.classList.toggle('hide');
        inspirations.classList.toggle('hide');
    }
    if (dropDownMenu.className == 'drop-down-menu show') {
        dropDownMenu.className = 'drop-down-menu'
    }
    if (aesthetics.className == 'aesthetics products-insert') {
        aesthetics.className = 'aesthetics';
        inspirations.className = 'inspirations'
        products.className = 'productss';
    }
    if (inspirations.className == 'inspirations products-insert') {
        inspirations.className = 'inspirations';
        products.className = 'productss';
        aesthetics.className = 'aesthetics';
    }



}



