//     7. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, 
// во втором - количество игроков в команде / объем двигателя / количество жителей в городе. 
// Объединить данные из двух массивов и вывести их в одну строку.  -->
document.write(`<b>Завдання 7</b>`, '<br />');

var sity = ['Лондон', 'Париж', 'Токіо', 'Київ'];
var population = [8908081, 2206488, 13960000, 2884000];

for (let i = 0; i < sity.length; i++) {
    document.write('Місто ', sity[i], ' чисельність населення:  ', population[i], 'чоловік', '<br />');
}