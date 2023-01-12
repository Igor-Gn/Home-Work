//     2. Создать функцию для нахождения минимального и максимального элемента массива getMinAndMax(array).
//      Результат должен выводиться в консоль.
document.write(`<b>Завдання 2</b> Результати виведено в консоль.`, '<br />');
var arr = [8, 25, 11, 65, 78, 4, 9, 96, 3, 12];

// var addNumber;
// while (addNumber !== null) {

//     addNumber = prompt("введіть числа.\n Вже є: \n" + arr.join("\n"));
//     arr = arr.concat(addNumber);
// }

// document.write(arr.join("<br />"));
var minValue = arr[0];
var maxValue = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
        minValue = arr[i];
    }
    if (arr[i] > maxValue) {
        maxValue = arr[i];
    }
}
console.log(`minValue`, minValue);
console.log(`maxValue`, maxValue);

//     3. Определить элементы массива и вывести их значения, индексы которых лежит в указанном пределе. Предел вводит пользователь.
document.write(`<b>Завдання 3</b> Результати виведено в консоль.`, '<br />');
var indexArr = +prompt('Введіть індекс від 1 до 10');
if (indexArr < 1 || indexArr > 10) {
    console.log('Невірно введено  значення!');
}
else {
    console.log(`Елементи масиву індекси яких в межах від 0 до ${indexArr}`, arr.slice(0, indexArr));
}




