let btn1 = document.querySelector(".title1");
let btn2 = document.querySelector(".title2");
let btn3 = document.querySelector(".title3");
let btn4 = document.querySelector(".title4");
let btn5 = document.querySelector(".title5");
let icon1 = document.querySelector(".plus_img1");
let icon2 = document.querySelector(".plus_img2");
let icon3 = document.querySelector(".plus_img3");
let icon4 = document.querySelector(".plus_img4");
let icon5 = document.querySelector(".plus_img5");
let meme1 = document.querySelector(".meme1");
let meme2 = document.querySelector(".meme2");
let meme3 = document.querySelector(".meme3");
let meme4 = document.querySelector(".meme4");
let meme5 = document.querySelector(".meme5");



btn1.addEventListener("click", () => {
    icon1.classList.toggle("plus_img-transform");
    meme1.classList.toggle("meme-thatyoucansee");
})

btn2.addEventListener("click", () => {
    icon2.classList.toggle("plus_img-transform");
    meme2.classList.toggle("meme-thatyoucansee");
})

btn3.addEventListener("click", () => {
    icon3.classList.toggle("plus_img-transform");
    meme3.classList.toggle("meme-thatyoucansee");
})

btn4.addEventListener("click", () => {
    icon4.classList.toggle("plus_img-transform");
    meme4.classList.toggle("meme-thatyoucansee");
})

btn5.addEventListener("click", () => {
    icon5.classList.toggle("plus_img-transform");
    meme5.classList.toggle("meme-thatyoucansee");
})