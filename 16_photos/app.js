const photoContainer = document.querySelector(".photoContainer");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector(".search-btn");

async function fetchImage() {
  const search = searchInput.value;
  const IMG_API = `https://api.unsplash.com/search/photos?query=${search}&client_id=LGy_fFeaCbbq16_2bDpTnH1SWh0yFy6UAeTXX_faJ4U`;
  const res = await fetch(IMG_API);
  const data = await res.json();
  // console.log(Data.results);
  return data.results;
}
async function renderImage() {
  photoContainer.innerHTML = "";
  const finalResult = await fetchImage();
  // console.log(finalResult);
  finalResult.forEach((e) => {
    // console.log(e.urls.regular);
    photoContainer.innerHTML += `<div class="photos">
                <img src=${e.urls.regular} alt="" srcset="">
                <div class="like-btn"><i class="ri-heart-line"></i></div>
            </div>`;
  });
}

searchBtn.addEventListener("click", renderImage);

const btnLike = document.querySelector(".like-btn");
const likedPhotoContainer=[];
btnLike.addEventListener("click",(e) => {
    // console.log("hello")
    // if(e.target.innerHTML=="<i class='ri-heart-fill'></i>")
    // if(e.target.fir)
    if (e.target.classList.contains("ri-heart-line")){
        e.target.classList.replace("ri-heart-line", "ri-heart-fill");
    }else{
        e.target.classList.replace("ri-heart-fill","ri-heart-line");
    }
    console.log(e.target.parentElement.parentElement.firstElementChild.src);
    likedPhotoContainer.push(e.target.parentElement.parentElement.firstElementChild.src);
    localStorage.setItem('likedPhotoContainer',JSON.stringify(likedPhotoContainer));
})