//Challenge1: Your Age in Days

function ageInDays() {
    let birthyear = prompt('What year were you born.. Good friend');
    let ageInDayss = (2022 - birthyear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}