const bubbleBoard = document.getElementsByClassName("bubble-board")[0];
const box = document.getElementsByClassName("box");

let score = 0;
box[2].innerText = score;

function BubbleGenrate() {
  bubbleBoard.innerHTML = "";
  for (let i = 0; i < 250; i++) {
    let rn = Math.floor(Math.random() * 10);
    const myElem = document.createElement("div");
    myElem.classList.add("bubble");
    myElem.innerText = rn;
    bubbleBoard.appendChild(myElem);
  }
}

let genratedhit;
function GenrateHit() {
  genratedhit = Math.floor(Math.random() * 10);
  box[0].innerText = genratedhit;
}

bubbleBoard.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  let clicked = e.target.innerText;
  if (clicked == genratedhit) {
    Showscore();
    GenrateHit();
    BubbleGenrate();
  }
});

function Showscore() {
  score += 10;
  box[2].innerText = score;
}
let time = 60;
box[1].innerText = time;
function ShowTimer() {
  const myTimer = setInterval(() => {
    if (time > 0) {
      time--;
      box[1].innerText = time;
    } else {
      clearInterval(myTimer);
      bubbleBoard.innerHTML = "<h1>Game Over</h1>";
    }
  }, 1000);
}

ShowTimer();
BubbleGenrate();
GenrateHit();
