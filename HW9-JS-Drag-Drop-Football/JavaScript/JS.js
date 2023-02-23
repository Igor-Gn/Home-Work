const ball = document.querySelector('.ball');
const footballField = document.querySelector('.football__field');
const gates1 = document.querySelector('.gates1');
const gates2 = document.querySelector('.gates2');
let scoreTeam1 = document.querySelector('.score__team1');
let scoreTeam2 = document.querySelector('.score__team2');
let scoreTeam1Value = 0;
let scoreTeam2Value = 0;


footballField.addEventListener('dragover', preventEvent);
gates1.addEventListener('dragover', preventEvent);
gates2.addEventListener('dragover', preventEvent);

function preventEvent(e) {
    e.preventDefault();
}
footballField.addEventListener('drop', dropElement);
gates1.addEventListener('drop', dropElement);
gates2.addEventListener('drop', dropElement);

function dropElement(e) {
    this.appendChild(ball)
    ball.style.left = (e.clientX - 20) + 'px';
    ball.style.top = (e.clientY - 20) + 'px';
    if (e.target.className == 'gates1') {
        scoreTeam1.innerHTML = scoreTeam1Value + 1;
        scoreTeam1Value = scoreTeam1Value + 1;
    }
    if (e.target.className == 'gates2') {
        scoreTeam2.innerHTML = scoreTeam2Value + 1;
        scoreTeam2Value = scoreTeam2Value + 1;
    }
}

