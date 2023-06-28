let homeScore = document.getElementById('home')
let awayScore = document.getElementById('away')

let countHome = 0;
let countAway = 0;

function homeOne() {
    countHome += 1;
    homeScore.textContent = countHome;
}

function homeTwo() {
    countHome += 2;
    homeScore.textContent = countHome;
}

function homeThree() {
    countHome += 3;
    homeScore.textContent = countHome;
}

function awayOne() {
    countAway += 1;
    awayScore.textContent = countAway;
}

function awayTwo() {
    countAway += 2;
    awayScore.textContent = countAway;
}

function awayThree() {
    countAway += 3;
    awayScore.textContent = countAway;
}

function resetScore() {
    let konfirmasi = confirm('Reset Score Board?');

    if(konfirmasi === true) {

    homeScore.textContent = 0
    awayScore.textContent = 0
    countHome = 0
    countAway = 0
}else {}
}