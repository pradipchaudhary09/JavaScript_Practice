const button = document.getElementsByClassName('button1');
const   displaytime1 = document.getElementById('displaytime1');
const   displaytime2 = document.getElementById('displaytime2');
const   displaytime3 = document.getElementById('displaytime3');
let counter = 0;
let second = 0;
let minut = 0;
let time = null;
displaytime3.innerText = counter; 
displaytime2.innerText = second; 
displaytime1.innerText = minut; 

button[0].addEventListener('click', () => {
    if(time === null){ 
        time = setInterval(() => {
        counter++;
        displaytime3.innerText = counter; 
        if(counter == 100){
            counter = 1;
            second++;
            displaytime2.innerText = second; 
        }
        if(second == 60){
            second = 1;
            minut++;
            displaytime1.innerText = minut; 
            
        }
     },10)}
});

button[2].addEventListener('click',() => {
    clearInterval(time);
    time = null;
})
button[1].addEventListener('click',() => {
    clearInterval(time);
    counter = 0;  
    second = 0;
    minut = 0;
    time = null;
    displaytime3.innerText = counter; 
    displaytime2.innerText = second; 
    displaytime1.innerText = minut; 
})