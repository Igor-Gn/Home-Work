const start1 = document.querySelector('.start');

function timer() {
    start1.classList.add('hide');
    const deadline = new Date(Date.now() + (2400000 + 999));
    // id таймера
    let timerId = null;
    // відмінки чисел
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вираховуємо різницю дат та встановлюємо скільки залишилося часу в якості вмісту елементів
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            console.log('hello');
            clearInterval(timerId);
        }

        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $minutes.dataset.title = declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
    }
    // отримуємо елементи які містять елементи дати
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // викликаємо функцію countdownTimer
    countdownTimer();
    // викликаємо функцію countdownTimer
    timerId = setInterval(countdownTimer, 1000);
};
start1.addEventListener('click', timer);