
const cost = document.querySelector('#sum3');
const cost2 = document.querySelector('#sum1');
const fullNameBill = document.querySelector('.fullNameBill');
const fullNameBill1 = document.querySelector('.fullNameBill1');

cost.innerHTML = `<b>${localStorage.getItem('cost')} грн.</b> `;
cost2.innerHTML = `<b>${localStorage.getItem('cost')} грн.</b> `;
fullNameBill.innerHTML = `<b>&nbsp;&nbsp;${localStorage.getItem('fullNameValue')}</br>
    ${localStorage.getItem('address')}</br></b> `;
fullNameBill1.innerHTML = `<b>&nbsp;&nbsp;${localStorage.getItem('fullNameValue')}</br>
    ${localStorage.getItem('address')}</br></b> `; 
