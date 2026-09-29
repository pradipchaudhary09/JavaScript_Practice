const AddTodo = document.querySelector("#AddTodo");
const InputTodo = document.querySelector("#InputTodo");
const alltodos = document.querySelector("#alltodos");

// console.log(InputTodo.value);

AddTodo.addEventListener("click", addtodoes);

function addtodoes() {
  // console.log('hello')
  const list = document.createElement("li");
  // console.log(InputTodo.value);
  const mycross = document.createElement("span");
  mycross.innerHTML = "&#215";
  list.innerText = InputTodo.value;
  list.appendChild(mycross);
  // list.innerHTML = mycross;
  // console.log(list.innerText);
  alltodos.appendChild(list);
  InputTodo.value = "";

  list.addEventListener("click", (e) => {
    // console.log(e.target.tagName);

    if (e.target.tagName == "LI") {
      list.classList.toggle("checked");
    }
    if (e.target.tagName == "SPAN") {
        list.remove();
      }
  });
}
