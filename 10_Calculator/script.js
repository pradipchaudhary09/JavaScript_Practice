const display = document.querySelector("#display");
const btn = document.querySelectorAll(".btn");
const btn_operator = document.querySelectorAll(".btnOperator");
const btnClear = document.querySelector(".btnClear");
const btnEqual = document.querySelector(".btnEqual");
let stringval1 ="";
let stringval2 ="";
let val1 = null;
let val2 = null;
let op = null;
let ans;
// let check;
let check1 = 0;
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // if(check == 0 ){
    //     display.value = "";
    //     check = 1;
    // }

    display.value += btn.innerText;
    if (op == null) {
      stringval1 += btn.innerText;
      // console.log("stringval1" + stringval1);

      val1 = Number(stringval1);
      console.log("val1 " + val1);
    } else {
      stringval2 += btn.innerText;
      // console.log("stringval2" + stringval2);

      val2 = Number(stringval2);
      console.log("val2 " + val2);
    }
  });
});
btn_operator.forEach((btn_operator) => {
  btn_operator.addEventListener("click", () => {
    if (val1 != null && check1 == 0) {
      // console.log(btn_operator.innerText);
      if (btn_operator.innerText == "+") {
        // display.value = "";
        op = 1;
      } else if (btn_operator.innerText == "-") {
        // display.value = "";
        op = 2;
      } else if (btn_operator.innerText == "*") {
        // display.value = "";
        op = 3;
      } else if (btn_operator.innerText == "/") {
        // display.value = "";
        op = 4;
      }
      // display.value = "";

      display.value += btn_operator.innerText;
      check1 = 1;

      // check = 0;
      console.log(op);
    }
  });
});
btnEqual.addEventListener("click", () => {
  if (val1 != null && val2 != null && op != null) {
    if (op == 1) {
      ans = val1 + val2;
    } else if (op == 2) {
      ans = val1 - val2;
    } else if (op == 3) {
      ans = val1 * val2;
    } else {
      ans = val1 / val2;
    }
    display.value = ans;
    val1 = ans;
    check1 = 0;
    stringval1 = "";
    stringval2 = "";
  }
});
btnClear.addEventListener("click", () => {
  display.value = "";
  val1 = null;
  val2 = null;
  op = null;
  stringval1 = "";
  stringval2 = "";
});
