// Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов (n принять от пользователя).
// Числа Фибоначчи – это элементы числовой последовательности, в которой каждое последующее число равно сумме двух предыдущих.
document.write(`<br><b>Завдання 5. Виводимо на екран послідовність Фібоначчі. Кількість елементів приймаємо у користувача.</b><br>`)
var maxNum = +prompt('Введіть число від 1 до 100:');
if (maxNum <= 0 || maxNum > 100 || isNaN(maxNum)) {
    document.write(`Помилка!`);
}
else {
    var numFibanachi = 0;
    var numFibanachi1 = 1;
    var temp = numFibanachi + numFibanachi1;
    document.write(`Послідовність Фібоначчі ${maxNum} значень: `);
    for (var i = 0; i < maxNum; i++) {
        document.write(temp, `, `);
        numFibanachi = numFibanachi1;
        numFibanachi1 = temp;
        temp = numFibanachi + numFibanachi1;
    }
}


