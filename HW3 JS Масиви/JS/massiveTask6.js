//     6. Необходимо получить предпоследний элемент из массива month и вывести его на экран. 
//     var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

//Завдання 6
document.write(`<b>Завдання 6</b>`, '<br />');
var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
document.write(`${month[10]} <br />`); //знаходимо елемент массиву за індексом (відлік з початку массиву)
document.write(`${month[month.length - 2]} <br />`); //знаходимо елемент массиву за індексом (відлік з кінця массиву)
document.write(`${month.slice(-2, -1)} <br />`);  //вибираємо елемент массиву за допомогою методу slise