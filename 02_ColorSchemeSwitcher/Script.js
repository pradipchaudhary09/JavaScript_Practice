const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

const hexa = "0123456789ABCDEF";

button.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    if (e.target.id == "btn1") {
      body.style.backgroundColor = "gray";
    } else if (e.target.id == "btn2") {
      body.style.backgroundColor = "#fff";
    } else if (e.target.id == "btn3") {
      body.style.backgroundColor = "blue";
    } else if (e.target.id == "btn4") {
      body.style.backgroundColor = "yellow";
    } else {
      let color = "#";
      for (i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * 16)];
      }
      console.log(color);
      
      body.style.backgroundColor = color;
      e.target.style.backgroundColor = color;
      e.target.innerText = color;
    }
  });
});
