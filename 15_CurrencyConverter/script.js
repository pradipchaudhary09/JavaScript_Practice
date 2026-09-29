const CURRENCIES ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

let currencydata;
let From_Currency = "usd";
let To_Currency = "inr";
// console.log(From_Currency);
// console.log(To_Currency);

const btnConvert = document.querySelector("#btnConvert");

async function fetchCurrencies() {
  const response = await fetch(CURRENCIES);
  const Data = await response.json();
  currencydata = Object.keys(Data);
  // console.log(currencydata);
  renderCurrency();
  FromSelector.value = "usd";
  ToSelector.value = "inr";
  FromSelector.addEventListener("change", (e) => {
    From_Currency = e.target.value;
    // console.log(From_Currency);
  });
  ToSelector.addEventListener("change", (e) => {
    To_Currency = e.target.value;
    // console.log(To_Currency);
  });

  btnConvert.addEventListener("click", () => {
    if (amount.value == "") {
      alert("Enter the value who you want to convert...");
    } else {
      getFromCurrency(From_Currency);
    }
  });
}

const amount = document.querySelector("#amount");
const result_amount = document.querySelector("#result-amount");
async function getFromCurrency(From_Currency) {
  const EndPoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${From_Currency}.json`;
  const res = await fetch(EndPoint);
  const Data = await res.json();

  result_amount.innerText = (
    Number(amount.value) * Data[From_Currency][To_Currency]
  ).toFixed(2);
}

const FromSelector = document.querySelector("#from-currency");
const ToSelector = document.querySelector("#to-currency");

function renderCurrency() {
  currencydata.forEach((e) => {
    const FromCurrency = document.createElement("option");
    FromCurrency.value = e;
    FromCurrency.innerText = e;
    FromSelector.appendChild(FromCurrency);

    const ToCurrency = document.createElement("option");
    ToCurrency.value = e;
    ToCurrency.innerText = e;
    ToSelector.appendChild(ToCurrency);
  });
}

fetchCurrencies();
