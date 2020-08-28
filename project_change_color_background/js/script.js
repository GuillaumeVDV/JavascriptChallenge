//Choose a random color
const colors =  ["RED","BLUE","TEAL","PURPLE"];
const btn = document.querySelector('button');
const body = document.querySelector('body');


body.style.backgroundColor = 'YELLOW'
btn.addEventListener('click',changeBackground);    


function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}
