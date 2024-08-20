let btn = document.querySelector('#btn');

btn.addEventListener("click",function(){
    //h1
    let h3=document.querySelector('h3');
    h3.innerText='YOUR RANDOM COLOR IS :';    

    //div
    let randomcolor=getRandomColor();
    let div=document.querySelector('#color');
    div.style.backgroundColor=randomcolor;
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}