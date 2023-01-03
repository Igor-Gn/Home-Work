// 2. Построить прямоугольный треугольник состоящий из символа "*"

var heigthTriangle = +prompt('введіть висоту трикутника від 1 до 15');
document.write(`<br><b>Завдання 2. Побудувати прямокутний трикутник катет якого складається з ${heigthTriangle} символів "*".<br></b>`);
var a = `*`;
if (heigthTriangle < 1 || heigthTriangle > 15 || isNaN(heigthTriangle)) {
    document.write(`Введено невірне значення!`);
}
else {

    for (var i = 0; i <= heigthTriangle; i++) {
        for (var i2 = 0; i2 < i; i2++) {
            document.write(`*`);
        }
        document.write('<br>')
    }

}