"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function slider() {
  var sliderBlock = document.querySelector(".offer__slider"),
      sliderPrev = sliderBlock.querySelector(".offer__slider-prev"),
      sliderNext = sliderBlock.querySelector(".offer__slider-next"),
      sliderCurrent = sliderBlock.querySelector("#current"),
      sliderTottal = sliderBlock.querySelector("#total"),
      sliders = sliderBlock.querySelectorAll(".offer__slide");
  var slideActive = 0;
  sliderTottal.innerHTML = getSlidersNumber(sliders.length);
  sliderPrev.addEventListener("click", function (e) {
    e.preventDefault();
    slideActive--;
    proccessChangeSlide();
  });
  sliderNext.addEventListener("click", function (e) {
    e.preventDefault();
    slideActive++;
    proccessChangeSlide();
  });

  function getSlidersNumber(num) {
    if (num < 10) {
      return "0".concat(num);
    }

    return num;
  }

  function setHiddenAllSliders() {
    sliders.forEach(function (slide) {
      slide.classList.add("hidden");
    });
  }

  function delHiddenSlider(num) {
    sliders[num].classList.remove("hidden");
  }

  function proccesSlideActive() {
    if (slideActive < 0) {
      slideActive = sliders.length - 1;
    }

    if (slideActive >= sliders.length) {
      slideActive = 0;
    }
  }

  function setCurrentSlide() {
    sliderCurrent.innerHTML = getSlidersNumber(slideActive + 1);
  }

  function proccessChangeSlide() {
    proccesSlideActive();
    setCurrentSlide();
    setHiddenAllSliders();
    delHiddenSlider(slideActive);
  }
}

var _default = slider;
exports["default"] = _default;