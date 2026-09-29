const image = document.querySelector("#Image");

const imgData = [
  "https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1274530764/photo/jungle-hd-wallpaper.webp?a=1&b=1&s=612x612&w=0&k=20&c=icXbIqh8faz8hfKyVDt2gcvo8C7CwlhZCDCCtF-U4w4=",
  "https://media.istockphoto.com/id/1436307403/photo/abstract-background-with-a-black-hole-in-the-middle.jpg?s=612x612&w=0&k=20&c=pQGp9_Dxg1BTbZKuXcLzkRuC0M0eWO0m8YYzFgUOqaE=",
];
// image.src = imgData[0];
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

currentImg = 0;
imgDataLength = imgData.length;
image.src = imgData[currentImg];
prev.addEventListener("click", () => {
  currentImg = (currentImg - 1 + imgDataLength) % imgDataLength;
  // image.src = imgData[currentImg];
  // image.classList.add('fade-out');
  change();
});
next.addEventListener("click", () => {
  currentImg = (currentImg + 1) % imgDataLength;
  change();
  // image.classList.add('fade-out');
});

function change() {
  image.classList.add("fade-out");

  setTimeout(() => {
    image.classList.remove("fade-out");
    image.src = imgData[currentImg];
  }, 200);
}
