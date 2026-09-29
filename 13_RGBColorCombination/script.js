const RGB = document.querySelectorAll('.RGB');
const Span = document.querySelectorAll('.sp');
const body = document.querySelector('body');
let rvalue = 0;
let gvalue = 0;
let bvalue = 0;
RGB.forEach((rgb) => {
    rgb.addEventListener('input',(e) =>{
        // console.log(e.target.id);
        if(e.target.id == 'R'){
            Span[0].innerText = e.target.value;       
            rvalue = e.target.value;     
            body.style.backgroundColor = `rgb(${rvalue},${gvalue},${bvalue})`
        }
        else if(e.target.id == 'G'){
            Span[1].innerText = e.target.value;    
            gvalue = e.target.value;       
            body.style.backgroundColor = `rgb(${rvalue},${gvalue},${bvalue})`   
        }
        else{
            Span[2].innerText = e.target.value;  
            bvalue = e.target.value;     
            body.style.backgroundColor = `rgb(${rvalue},${gvalue},${bvalue})`       
        }
     })
})