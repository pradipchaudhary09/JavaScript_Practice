const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const display = document.getElementById("display");


btn1.addEventListener('click',function (){
    display.innerText = Number(no1.value)+Number(no2.value);
})
btn2.addEventListener('click',function (){
    display.innerText = Number(no1.value)-Number(no2.value);
})
btn3.addEventListener('click',function (){
    display.innerText = Number(no1.value)*Number(no2.value);
})
btn4.addEventListener('click',function (){
    display.innerText = Number(no1.value)/Number(no2.value);
})
btn5.addEventListener('click',function (){
    no1.value=""
    no2.value=""
    display.innerText =""
})