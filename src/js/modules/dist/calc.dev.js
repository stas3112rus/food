"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function calc() {
  // Calculation
  var calcResult = document.querySelector(".calculating__result span");
  var sex = "female",
      ratio = 1.375;

  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    localStorage.setItem("sex", sex);
  }

  if (localStorage.getItem("ratio")) {
    ratio = +localStorage.getItem(ratio);
  } else {
    localStorage.setItem("ratio", ratio);
  }

  var height, weight, age;

  function initLocalSetting(selector, activeClass) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (elem) {
      elem.classList.remove(activeClass);

      if (elem.getAttribute('id') == localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute('data-ratio') == localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSetting("#gender div", "calculating__choose-item_active");
  initLocalSetting(".calculating__choose_big div", "calculating__choose-item_active");

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      calcResult.textContent = "____";
      return;
    }

    if (sex == 'female') {
      calcResult.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      calcResult.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  }

  calcTotal();

  function getStaticInfo(parentSelector, activeClass) {
    var elements = document.querySelectorAll("".concat(parentSelector, " div"));
    elements.forEach(function (elem) {
      elem.addEventListener("click", function (e) {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem("ratio", ratio);
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem("sex", sex);
        }

        elements.forEach(function (elem) {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStaticInfo("#gender", "calculating__choose-item_active");
  getStaticInfo(".calculating__choose_big", "calculating__choose-item_active");

  function getDynamicInfo(selector) {
    var input = document.querySelector(selector);
    input.addEventListener("input", function () {
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }

      switch (input.getAttribute('id')) {
        case "height":
          height = +input.value;
          break;

        case "weight":
          weight = +input.value;
          break;

        case "age":
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }

  getDynamicInfo("#height");
  getDynamicInfo("#weight");
  getDynamicInfo("#age");
}

var _default = calc;
exports["default"] = _default;