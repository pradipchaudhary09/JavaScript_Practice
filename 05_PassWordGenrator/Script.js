const button = document.getElementsByClassName("generate-button")[0];
const password = document.getElementsByClassName("password-display")[0];
const inputlength = document.getElementById("password-length");
const checkbox1 = document.getElementById("include-uppercase");
const checkbox2 = document.getElementById("include-lowercase");
const checkbox3 = document.getElementById("include-numbers");
const checkbox4 = document.getElementById("include-symbols");

let pass = "";
let passlenth;
// console.log(inputlength.value);

button.addEventListener("click", () => {
  if (
    checkbox1.checked ||
    checkbox2.checked ||
    checkbox3.checked ||
    checkbox4.checked
  ) {
    if (checkbox1.checked) {
      pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (checkbox2.checked) {
      pass += "abcdefghijklmnopqrstuvwxyz";
    }
    if (checkbox3.checked) {
      pass += "0123456789";
    }
    if (checkbox4.checked) {
      pass += "!@#$%^&*";
    }
    passlenth = pass.length;
    // console.log(pass);
    // console.log(pass[69]);
    // console.log(pass.length);
    genratepass();
  } else {
    alert("Select minimum one type of charecters for Genrate password");
  }
});

let generatedpasslenth;
// generatedpasslenth = inputlength.value;
function genratepass() {
  // console.log(generatedpasslenth);
  generatedpasslenth = inputlength.value;
  password.innerText = "";
  // console.log(generatedpasslenth <= 10 || generatedpasslenth != "")
  if (generatedpasslenth <= 10 && generatedpasslenth != "") {
    for (let i = 0; i < generatedpasslenth; i++) {
      let rn = Math.floor(Math.random() * passlenth);
      password.innerText += pass[rn];
    }
  } else {
    alert("Enter PassWord lenth between 1 to 10");
  }
  pass = "";
}
