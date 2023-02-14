
const director = {
    name: 'Alex',
    sName: 'Tischenco',
    age: 32,
    occupation: 'director',
    showInfo
};
const manager = {
    name: 'Michael',
    sName: 'Schumacher',
    age: 45,
    occupation: 'Менеджер',
    showInfo
};
const programmer = {
    name: 'Jim',
    sName: 'Beam',
    age: 25,
    occupation: 'Програміст',
    showInfo
};
var informationAboutЕmployees = [director, manager, programmer];

console.log(informationAboutЕmployees);
function showInfo() {
    document.write("Ім'я: " + this.name + '<br>');
    document.write("Прізвище: " + this.sName + '<br>');
    document.write("Вік: " + this.age + " years old" + '<br>');
    document.write("Професія: " + this.occupation + '<br><br>');
}

const addEmployee = document.querySelector('.addEmployee');
const cancel = document.querySelector('.cancel');
const inpForm = document.querySelector('.input_form');

cancel.addEventListener('click', hideForm);

function hideForm() {
    for (i = 0; i < informationAboutЕmployees.length; i++) {
        informationAboutЕmployees[i].showInfo();
    }
    salary();
    // inpForm.classList.toggle('hide');
    console.log(informationAboutЕmployees);
}
addEmployee.addEventListener('click', addEmpl);
function addEmpl() {
    if (document.getElementsByTagName('input')[0].value != '') {
        informationAboutЕmployees.unshift(new Object);
        informationAboutЕmployees[0].name = document.getElementsByTagName('input')[0].value;
        informationAboutЕmployees[0].sName = document.getElementsByTagName('input')[1].value;
        informationAboutЕmployees[0].age = document.getElementsByTagName('input')[2].value;
        informationAboutЕmployees[0].occupation = document.getElementsByTagName('select')[0].value;
        informationAboutЕmployees[0].showInfo = showInfo;
        document.getElementsByTagName('input')[0].value = '';
        document.getElementsByTagName('input')[1].value = '';
        document.getElementsByTagName('input')[2].value = '18';
    }
    console.log(informationAboutЕmployees);
    return informationAboutЕmployees;
}

function salary() {
    for (i = 0; i < informationAboutЕmployees.length; i++) {
        var sal = informationAboutЕmployees[i].salary = '1000';
        if (informationAboutЕmployees[i].occupation == 'director') {
            informationAboutЕmployees[i].salary = 3000;
            console.log(informationAboutЕmployees[i].occupation);
        }
        if (informationAboutЕmployees[i].occupation == 'Менеджер') {
            informationAboutЕmployees[i].salary = 1500;
            console.log(informationAboutЕmployees[i].occupation);
        }
        if (informationAboutЕmployees[i].occupation == 'Програміст') {
            informationAboutЕmployees[i].salary = 2000;
            console.log(informationAboutЕmployees[i].occupation)
        }

    }
}



