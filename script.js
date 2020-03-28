const MENU = document.getElementById("menu");

// ! Menu

header.addEventListener("click", event => {
  header.querySelector("header__burger").forEach(el => el.classList.add("active"));
  event.target.classList.remove("active");
});

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("nav_active"));
  event.target.classList.add("nav_active");
});

document.addEventListener("scroll", onScroll);
function onScroll(event) {
  const currentPosition = window.scrollY;
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("body > *");
  const navigation = document.querySelectorAll("#menu li a");

  sections.forEach(element => {
    if (element.hasAttribute("id")) {
      if (
        element.offsetTop - header.clientHeight <= currentPosition &&
        element.offsetTop + element.clientHeight > currentPosition
      ) {
        navigation.forEach(link => {
          link.classList.remove("nav_active");
          if (
            element.getAttribute("id") ===
            link.getAttribute("href").substring(1)
          ) {
            link.classList.add("nav_active");
          }
        });
      }
    }
  });
}

//! Slider

let sliders = document.querySelectorAll(".sliders");
let currentSliders = 0;
let isEnable = true;

function changeActiveSlider(n) {
  currentSliders = (n + sliders.length) % sliders.length;
}

function hideSlider(direction) {
  isEnable = false;
  sliders[currentSliders].classList.add(direction);
  sliders[currentSliders].addEventListener("animationend", function() {
    this.classList.remove("active", direction);
  });
}

function showSlider(direction) {
  sliders[currentSliders].classList.add("next", direction);
  sliders[currentSliders].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnable = true;
  });

  if (currentSliders == 1) {
    document.querySelector("body > .carousel").style.backgroundColor =
      "#648BF0";
    document.querySelector("body > .carousel").style.borderColor = "#6f92ef";
  } else {
    document.querySelector("body > .carousel").style.backgroundColor =
      "#f06c64";
    document.querySelector("body > .carousel").style.borderColor = "#ea676b";
  }
}

function previousSlider(n) {
  hideSlider("to-right");
  changeActiveSlider(n - 1);
  showSlider("from-left");
}

function nextSlider(n) {
  hideSlider("to-left");
  changeActiveSlider(n + 1);
  showSlider("from-right");
}

document.querySelector(".arrows .left").addEventListener("click", function() {
  if (isEnable) {
    previousSlider(currentSliders);
  }
});

document.querySelector(".arrows .right").addEventListener("click", function() {
  if (isEnable) {
    nextSlider(currentSliders);
  }
});

//? Black Screen

const ButtonIphone = document.querySelectorAll(".home-button");
ButtonIphone.forEach(button =>
  button.addEventListener("click", function(event) {
    let verticalPhone = document.querySelector(".Vertical-iPhone");
    let verticalBlackScreen = document.querySelector(
      ".Vertical-iPhone .black-screen_vertical"
    );

    let horizontalPhone = document.querySelector(".Horizontal-iPhone");
    let horizontalBlackScreen = document.querySelector(
      ".Horizontal-iPhone .black-screen_horizontal"
    );

    if (verticalPhone.contains(button))
      verticalBlackScreen.hidden = !verticalBlackScreen.hidden;
    if (horizontalPhone.contains(button))
      horizontalBlackScreen.hidden = !horizontalBlackScreen.hidden;
  })
);

//! Portfolio !!!!!

const Portfolio = document.querySelector(".btn__group");

Portfolio.addEventListener("click", event => {
  Portfolio.querySelectorAll("button").forEach(Element =>
    Element.classList.remove("button_active")
  );
  event.target.classList.add("button_active");

  document
    .querySelector(".box")
    .querySelectorAll(".box__image")
    .forEach(element => {
      element.style.order = Math.floor(1 + Math.random() * 12);
    });
});

//? Border Image !!!!

const Box = document.getElementById("gallery");

Box.addEventListener("click", event => {
  Box.querySelectorAll(".box__image").forEach(element =>
    element.classList.remove("selected")
  );
  event.target.classList.add("selected");
});

//!! Form !!!!
const closeButton = document.getElementById("close-button");
const formBlock = document.getElementById("form");
const subject = document.getElementById("subject");
const textarea = document.getElementById("textarea");
const message = document.getElementById("message");

formBlock.addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("message-block").classList.remove("hidden");

  message.querySelector("#subj_result").textContent = subject.value
    ? `Subject: ${subject.value}`
    : "No subject";
  message.querySelector("#description_result").textContent = textarea.value
    ? `Description: ${textarea.value}`
    : "No description";
});

closeButton.addEventListener("click", () => {
  document.getElementById("message-block").classList.add("hidden");
  textarea.value = "";
  subject.value = "";
  formBlock.reset();
});
