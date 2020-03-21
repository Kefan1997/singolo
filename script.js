const MENU = document.getElementById("menu");
const PORTFOLIO_BUTTONS = document.getElementById("btn__group");

// ! Menu

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("nav_active"));
  event.target.classList.add("nav_active");
});

document.addEventListener('scroll', onScroll);
function onScroll(event) {
  const currentPosition = window.scrollY;
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('body > *');
  const navigation = document.querySelectorAll('#menu li a');

  sections.forEach(element => {
    if(element.hasAttribute('id')){
      if (
        element.offsetTop - header.clientHeight <= currentPosition &&
        element.offsetTop + element.clientHeight > currentPosition
      ){
        navigation.forEach(link => {
          link.classList.remove('nav_active');
          if(
            element.getAttribute('id') ===
            link.getAttribute('href').substring(1)
          ){
            link.classList.add('nav_active');
          }
        });
      }
    }
  });
}

//! Slider

let sliders = document.querySelectorAll('.sliders');
let currentSliders = 0;
let isEnable = true;

function changeActiveSlider(n){
  currentSliders = (n + sliders.length) % sliders.length;
}

function hideSlider(direction){
  isEnable = false;
  sliders[currentSliders].classList.add(direction);
  sliders[currentSliders].addEventListener('animationend', function(){
    this.classList.remove('active', direction);
  });
}

function showSlider(direction) {
  sliders[currentSliders].classList.add('next', direction);
  sliders[currentSliders].addEventListener('animationend', function(){
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnable = true;
  });
}

if(currentSliders === 1){
  document.querySelector('body > main').style.backgroundColor = '#648BF0';
  document.querySelector('body > main').style.borderColor = '#6f92ef';
} else{
  document.querySelector('body > main').style.backgroundColor = '#f06c64';
  document.querySelector('body > main').style.borderColor = '#ea676b';
}

function previousSlider(n){
  hideSlider('to-right');
  changeActiveSlider(n - 1);
  showSlider("from-left");
}

function nextSlider(n){
  hideSlider('to-left');
  changeActiveSlider(n + 1);
  showSlider('from-right');
}

document.querySelector('.arrows .left').addEventListener('click', function(){
  if(isEnable){
    previousSlider(currentSliders);
  }
});

document.querySelector('.arrows .right').addEventListener('click', function(){
  if(isEnable){
    nextSlider(currentSliders);
  }
});

// PORTFOLIO_BUTTONS.addEventListener("click", event => {
//   PORTFOLIO_BUTTONS.querySelectorAll("button").forEach(el =>
//     el.classList.remove("button-portfolio-item_active")
//   );
//   if (event.target.textContent == "All") {
//     gallery.innerHTML = `<img class="box__image" src="assets/Image1.png" />
//         <img class="box__image" src="assets/Image4.png" />
//         <img class="box__image" src="assets/Image7.png" />
//         <img class="box__image" src="assets/Image10.png" />
//         <img class="box__image" src="assets/Image2.png" />
//         <img class="box__image" src="assets/Image5.png" />
//         <img class="box__image" src="assets/Image8.png" />
//         <img class="box__image" src="assets/Image11.png" />
//         <img class="box__image" src="assets/Image3.png" />
//         <img class="box__image" src="assets/Image6.png" />
//         <img class="box__image" src="assets/Image9.png" />
//         <img class="box__image" src="assets/Image12.png" />`;
//   } else if (event.target.textContent == "Web Design") {
//     gallery.innerHTML = `<img class="box__image" src="assets/Image12.png" />
//         <img class="box__image" src="assets/Image2.png" />
//         <img class="box__image" src="assets/Image3.png" />
//         <img class="box__image" src="assets/Image4.png" />
//         <img class="box__image" src="assets/Image5.png" />
//         <img class="box__image" src="assets/Image6.png" />
//         <img class="box__image" src="assets/Image7.png" />
//         <img class="box__image" src="assets/Image8.png" />
//         <img class="box__image" src="assets/Image9.png" />
//         <img class="box__image" src="assets/Image10.png" />
//         <img class="box__image" src="assets/Image11.png" />
//         <img class="box__image" src="assets/Image11.png" />`;
//   } else if (event.target.textContent == "Graphic Design") {
//     gallery.innerHTML = `<img class="box__image" src="assets/Image11.png" />
//         <img class="box__image" src="assets/Image12.png" />
//         <img class="box__image" src="assets/Image4.png" />
//         <img class="box__image" src="assets/Image3.png" />
//         <img class="box__image" src="assets/Image6.png" />
//         <img class="box__image" src="assets/Image5.png" />
//         <img class="box__image" src="assets/Image8.png" />
//         <img class="box__image" src="assets/Image7.png" />
//         <img class="box__image" src="assets/Image10.png" />
//         <img class="box__image" src="assets/Image1.png" />
//         <img class="box__image" src="assets/Image2.png" />
//         <img class="box__image" src="assets/Image9.png" />`;
//   } else if (event.target.textContent == "Artwork") {
//     gallery.innerHTML = `<img class="box__image" src="assets/Image6.png" />
//         <img class="box__image" src="assets/Image5.png" />
//         <img class="box__image" src="assets/Image3.png" />
//         <img class="box__image" src="assets/Image1.png" />
//         <img class="box__image" src="assets/Image2.png" />
//         <img class="box__image" src="assets/Image8.png" />
//         <img class="box__image" src="assets/Image9.png" />
//         <img class="box__image" src="assets/Image10.png" />
//         <img class="box__image" src="assets/Image7.png" />
//         <img class="box__image" src="assets/Image6.png" />
//         <img class="box__image" src="assets/Image4.png" />
//         <img class="box__image" src="assets/Image11.png" />`;
//   }
//   event.target.classList.add("button-portfolio-item_active");
// });

document.getElementById("gallery").addEventListener("click", activeImage);

function activeImage(event) {
  if (event.target.parentElement.classList.contains("gallery")) {
    this.querySelectorAll(".box__image").forEach(element => {
      element.classList.remove("active");
    });
    event.target.classList.add("active");
  }
}
