 const ALL_PRODUCTS_API = "https://fakestoreapi.com/products";
const ALL_CATEGORY_API = "https://fakestoreapi.com/products/categories";

let ProductsDataLength;
let Allproducts;
async function FatchProducts() {
  const res = await fetch(ALL_PRODUCTS_API);
  const Data = await res.json();
  console.log(Data);
  Allproducts = Data;
  ProductsDataLength = Data.length;
  AppendProducts(Allproducts);
}

let AllCategory;
async function FatchCetegory() {
  const response = await fetch(ALL_CATEGORY_API);
  const Data = await response.json();
  AllCategory = Data;
  AllCategoryLength = AllCategory.length;
  DropDownCategory();
}

const Container = document.querySelector(".container");

function AppendProducts(Allproducts) {
  for (let i = 0; i < Allproducts.length; i++) {
    const Cards = document.createElement("div");
    Cards.classList.add("cards");

    const ProductPhotoDiv = document.createElement("div");
    ProductPhotoDiv.classList.add("ProductPhotoDiv");

    const ProductPhoto = document.createElement("div");
    ProductPhoto.classList.add("ProductPhoto");

    const ProductPicture = document.createElement("img");
    ProductPicture.classList.add("ProductPicture");
    ProductPicture.src = Allproducts[i].image;

    ProductPhoto.appendChild(ProductPicture);
    ProductPhotoDiv.appendChild(ProductPhoto);

    const Title = document.createElement("div");
    Title.classList.add("Title");

    const TitleH3 = document.createElement("h3");
    TitleH3.innerText = Allproducts[i].title.substring(0, 20) + "...";

    Title.appendChild(TitleH3);

    const Price = document.createElement("div");
    Price.classList.add("Price");

    const PriceH1 = document.createElement("h1");
    PriceH1.innerText = "$" + Allproducts[i].price;

    Price.appendChild(PriceH1);

    const ButtonDiv = document.createElement("div");
    ButtonDiv.classList.add("ButtonDiv");

    const ButtonInner = document.createElement("button");
    ButtonInner.innerText = "Add To Cart";

    // console.log(Allproducts.id);

    ButtonInner.addEventListener("click", () => {
      AddToCart(Allproducts[i].id);
    });

    ButtonDiv.appendChild(ButtonInner);

    Cards.appendChild(ProductPhotoDiv);
    Cards.appendChild(Title);
    Cards.appendChild(Price);
    Cards.appendChild(ButtonDiv);

    Container.appendChild(Cards);
  }
}

const CetegoryDropDown = document.querySelector("#CetegoryDropDown");

let AllCategoryLength;
function DropDownCategory() {
  for (let i = 0; i < AllCategoryLength; i++) {
    const Option = document.createElement("option");
    Option.innerText = AllCategory[i];
    Option.value = AllCategory[i];
    CetegoryDropDown.appendChild(Option);
  }
}

CetegoryDropDown.addEventListener("change", (e) => {
  console.log(e.target.value);

  const currentCategory = e.target.value;

  const filteredProducts = Allproducts.filter(
    (p) => p.category === currentCategory
  );
  console.log(filteredProducts);
  Container.innerHTML = "";
  if (currentCategory == "") {
    AppendProducts(Allproducts);
  } else {
    AppendProducts(filteredProducts);
  }
  // Allproducts = filteredProducts
});

const cartItems = document.querySelector(".cart-items");
const TOTAL = document.querySelector(".total");

let Cart = [];
let total1 = 0;

function AddToCart(ProductId) {
  cartItems.innerHTML = "";
  const products = Allproducts.find((p) => ProductId === p.id);
  Cart.push(products);

  Cart.forEach((c) => {
    const li = document.createElement("li");
    const spanTitle = document.createElement("span");
    spanTitle.innerText = c.title.substring(0, 20) + "...";
    const spanPrice = document.createElement("span");
    spanPrice.innerText = "$" + c.price;
    total1 = total1 + Number(c.price);
    li.appendChild(spanTitle);
    li.appendChild(spanPrice);
    cartItems.appendChild(li);
    
    TOTAL.innerText = "Total:$"+ total1;
  });
}

const searchInput = document.querySelector('.search-input');

function SearchFunction(){
  searchInput.addEventListener('input',(e) => {
    // console.log(e.target.value);
    SearchValue = e.target.value;
    Container.innerHTML = "";
    if(SearchValue == ""){
      AppendProducts(Allproducts);
    }
    else{
    const FilterProducts = Allproducts.filter((p) => {
      return p.title.toLowerCase().includes(SearchValue) || p.category.toLowerCase().includes(SearchValue);
    })
    AppendProducts(FilterProducts); 
    }
  })
}


FatchProducts();
FatchCetegory();
SearchFunction();
