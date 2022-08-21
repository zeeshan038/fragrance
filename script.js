const btn = document.querySelector(".fa-magnifying-glass");
const Search = document.querySelector(".search");
const search_here = document.querySelector(".search-here");
const Buttonclose = document.querySelector(".close-cart");
btn.addEventListener("click", () => {
  Search.classList.toggle("active");
  input.focus();
});
// for cart
let show_cart = document.querySelector(".fa-bag-shopping");
let cart = document.querySelector(".cart");
let removecart = document.querySelector(".fa-xmark");
show_cart.addEventListener("click", () => {
  cart.classList.toggle("show-cart");
  //   cart.classList.remove("show-cart");
});
Buttonclose.addEventListener("click", () => {
  cart.classList.remove("show-cart");
});
// js for cart items
const RemoveButton = document.querySelector(".Remove");

for (let i = 0; i < RemoveButton.length; i++) {
  let RemoveButtonloop = RemoveButton[i];
  RemoveButtonloop.addEventListener("click", () => {
    console.log("cl");
  });
}
