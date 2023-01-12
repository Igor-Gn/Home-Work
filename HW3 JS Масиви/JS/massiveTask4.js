//4. Отсортировать массив на 10 чисел в порядке возростания. Значения принимаются от пользователя. Сортировка осушествляется методом sort().
document.write(`<b>Завдання 4</b>`, '<br />');
var arr = [];

var numUser;

        for (var i = 0; i <10; i++) {
            
            numUser = +prompt(`Введіть ${10-i} чисел.\n Вже є числа: \n` + arr.join("\n"));
            arr = arr.concat(numUser);
        }
        arr.sort(function (a, b) { return a - b; });
        document.write(`Введені числа у порядку зростання: <br /> ${arr.join("<br />")}`);