const cointainer = document.querySelector(".cointainer");

// const accordionData = [
//   {
//     title: "What Payment Methods Do You Accept?",
//     content:
//       "We accept Visa, MasterCard, American Express, and PayPal. You can also use Apple Pay and Google Pay for faster checkout.",
//   },
//   {
//     title: "Do You Offer International Shipping?",
//     content:
//       "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.",
//   },
//   {
//     title: "How Can I Track My Order?",
//     content:
//       "Once your order has shipped, you'll receive a tracking number via email. Use this number to track your package on the carrier's website.",
//   },
//   {
//     title: "What Is Your Return Policy?",
//     content:
//       "You can return any unused items within 30 days of receipt for a full refund or exchange. Please refer to our return policy for detailed instructions.",
//   },
//   {
//     title: "Are Your Products Eco-Friendly?",
//     content:
//       "Yes, we are committed to sustainability. Our products are made with eco-friendly materials and packaged in recyclable or biodegradable materials.",
//   },
//   {
//     title: "Do You Provide Customer Support?",
//     content:
//       "Our support team is available 24/7 to assist you. You can reach us via live chat, email, or phone at any time.",
//   },
// ];

// let myobject = "";
// accordionData.forEach((myobj) => {
//   myobject += `<div class="accordian-items">
//                 <div class="header">
//                     <h1 class="title">${myobj.title}
//                     </h1>
//                     <button>+</button>
//                 </div>
//                 <div class="content">
//                     <p>${myobj.content}</p>
//                 </div>
//             </div>`;
// });
// cointainer.innerHTML = myobject;

const openPopup = document.querySelector("#openPopup");
const popupParent = document.querySelector(".popupParent");
const addaccordian = document.querySelector(".btnInnerAdd");
const inputtitle = document.querySelector("#titleInput");
const inputcontent = document.querySelector("#contentInput");
const Back = document.querySelector("#addAccordianBtn2");
const Clear = document.querySelector("#addAccordianBtn3");

openPopup.addEventListener("click", () => {
  // console.log('Hello');

  popupParent.style.display = "flex";
});

addaccordian.addEventListener("click", () => {
  if (inputtitle.value == "" || inputcontent.value == "") {
    return alert("Please Enter the value.....");
  }

  const accordian = document.createElement("div");
  accordian.classList.add("accordian-items");
  const header = document.createElement("div");
  header.classList.add("header");
  accordian.appendChild(header);
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = inputtitle.value;
  const plusbtn = document.createElement("button");
  plusbtn.innerText = "+";
  header.appendChild(title);
  header.appendChild(plusbtn);
  const content = document.createElement("div");
  content.classList.add("content");
  accordian.appendChild(content);
  const innercontent = document.createElement("p");
  innercontent.innerText = inputcontent.value;
  content.appendChild(innercontent)
  cointainer.appendChild(accordian);

  // alert("Create Accordian succesfuly...");
  popupParent.style.display = "none";
  accordianwork();
});

Back.addEventListener("click", () => {
  popupParent.style.display = "none";
});
Clear.addEventListener("click", () => {
  inputtitle.value = "";
  inputcontent.value = "";
});

function accordianwork() {
  const accordian = document.querySelectorAll(".accordian-items");
  console.log(accordian);

  accordian.forEach((accordian) => {
    console.log(accordian.lastElementChild);
    accordian.addEventListener("click", () => {
      // console.log("hello");

      accordian.lastElementChild.classList.toggle("active");

      // console.log(accordian.firstElementChild.children[1].innerText);
      if (accordian.firstElementChild.children[1].innerText == "-") {
        accordian.firstElementChild.children[1].innerText = "+";
      } else {
        accordian.firstElementChild.children[1].innerText = "-";
      }
    });
  });
}
