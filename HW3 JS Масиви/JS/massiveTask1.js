
//     1. Сделать собственные примеры методов применяемых для массивов.

var sity = ['Лондон', 'Париж', 'Токіо', 'Київ', 'Алжир', 'Пекін', 'Гамбург', 'Амстердам', 'Коломбо', 'Рим', 'Афіни', 'Варшава'];
document.write(`<b>Завдання 1</b>`, '<br />');
document.write(`${sity}`);

//Завдання 1
// Метод join
var sityModify = sity.join(` *`);
document.write(`${sityModify}<br />`);

document.write(sity)
document.write("<ul style=\"list-style-image:url(./image/bullet.png)\"><li>");
var changed_array_sity = sity.join("</li><li>");
document.write(changed_array_sity);
document.write("</li></ul> <br />");

// Метод concat
var sityElse = ['Нью-Йорк', 'Делі', 'Вашингтон'];
var sity2 = sity.concat(sityElse);
document.write(`Метод concat ${sity2} <br />`);

var input;
while (input !== null) {
    input = prompt("Введіть назву нового міста.\n Вже є міста: \n\n" + sityElse.join("\n"));
    sityElse = sityElse.concat(input);
}
document.write(sityElse.join("<br />"));

// Метод Push
var sity3 = sity2.push('Житомир', 'Хмельницький', 'Львів');
document.write(`метод push: ${sity3}<br />`);

// Метод reverse
sity.reverse();
document.write(`Метод reverse ${sity}<br/>`);

// Метод slice
document.write(`Метод slice ${sity.slice(2, 5)}<br />`);
// Метод splise

sity.splice(2, 5, 'Осло', 'Франкфурт');
document.write(`Метод splise ${sity}<br />`);

// Метод unshift
sity.unshift('Палермо', 'Сідней');
document.write(`Метод unshift ${sity}<br />`);

// Метод shift
var delete_value = sity.shift();
console.log("Масив після видалення: " + sity);
console.log("Видалене значення: " + delete_value);
