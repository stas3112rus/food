"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modal = require("./modal");

var _services = require("../services/services");

function forms(modalSelector) {
  //  Forms
  var forms = document.querySelectorAll("form");
  var message = {
    loading: "img/form/spinner.svg",
    success: "Спасибо! Скоро свяжемся с вами",
    fail: "Что-то не так"
  };
  forms.forEach(function (item) {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = "\n                display: block;\n                margin: 0 auto;\n            ";
      form.insertAdjacentElement('afterend', statusMessage);
      var formData = new FormData(form);
      var json = JSON.stringify(Object.fromEntries(formData.entries()));
      (0, _services.postData)('http://localhost:3000/requests', json).then(function (data) {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      })["catch"](function () {
        showThanksModal(message.fail);
      });
    });
  }

  function showThanksModal(message) {
    var prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    (0, _modal.openModal)(modalSelector);
    var thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = "\n        <div class=\"modal__content\">\n        <div data-close class=\"modal__close\">&times;</div>\n        <div class=\"modal__title\">".concat(message, "</div>\n        </div>\n        ");
    document.querySelector(".modal").append(thanksModal);
    setTimeout(function () {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      (0, _modal.closeModal)(modalSelector);
    }, 4000);
  }

  fetch("http://localhost:3000/menu").then(function (data) {
    return data.json();
  }).then(function (data) {
    return console.log(data);
  });
}

var _default = forms;
exports["default"] = _default;