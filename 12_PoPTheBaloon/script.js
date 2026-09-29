const BaloonContainer = document.querySelector(".BaloonContainer");
const HEXA = "0123456789ABCDEF";
const box = document.querySelector(".box");

function generateColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const rn = Math.floor(Math.random() * 16);
    color += HEXA[rn];
  }
  return color;
}
let counter = 0;
function generateBalloon() {
  for (let i = 0; i < 65; i++) {
    let color = generateColor();
    const Balloon = document.createElement("div");
    Balloon.classList.add("ballon");
    BaloonContainer.appendChild(Balloon);
    Balloon.style.backgroundColor = color;
    // Balloon.innerHTML = " ";
    Balloon.addEventListener("mouseover", () => {
      Balloon.style.backgroundColor = "#F2F9FF";

      if (Balloon.innerText == "") {
        counter++;
      }

      Balloon.innerText = "PoP.!";
      Balloon.style.color = color;
    });
  }
  ShowTimer();
}

let myTimer = null;

let time = 15;
function ShowTimer() {
  box.innerText = time;
  if (myTimer == null) {
    myTimer = setInterval(() => {
      if (counter == 65) {
        clearInterval(myTimer);
        BaloonContainer.innerHTML = "<h1>You Win the Game</h1>";
        myTimer = null;
      } else {
        if (time > 0) {
          time--;
          box.innerText = time;
        } else {
          clearInterval(myTimer);
          BaloonContainer.innerHTML =
            "<h1>Game Over(You lose the game)..!</h1>";
          myTimer = null;
          
        }
      }
    }, 1000);
  }
}

// generateBalloon();
const start_btn = document.querySelector(".start-btn");
start_btn.addEventListener("click", () => {
  start_btn.innerText = "Restart";
  BaloonContainer.innerHTML = "";
  counter = 0;
  generateBalloon();
  time = 15;
});
