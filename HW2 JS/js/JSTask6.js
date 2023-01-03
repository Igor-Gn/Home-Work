// Вывести на экран таблицу умножения от 0 до 9.
document.write(`<br><br><b>Завдання 6. Вивести на екран таблицю множення.</b><br>`)
for (var a = 1; a <= 10; a++) {
    document.write(`<br><b>Таблиця множення на ${a} <br></b>`);
    for (var b = 1; b <= 10; b++) {
        document.write(`${a} * ${b} = ${a * b} <br>`);
    }
}
