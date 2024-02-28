var header = document.querySelector("header");
var image = document.getElementById("header-image");
console.log(header);
var root = document.documentElement;
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  console.log(window.scrollY, "window.scrollY");
  header.classList.toggle("sticky", window.scrollY > 43.2);
  if (document.documentElement.scrollTop > 43.2) {
    image.src = "assets/images/header-2.png";
  } else {
    image.src = "assets/images/headder.png";
  }
}
