"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModal = closeModal;
exports.openModal = openModal;
exports["default"] = void 0;

function closeModal(modalSelector) {
  var modal = document.querySelector(modalSelector);
  modal.style.display = "none";
  document.body.style.overflow = "visible";
}

function openModal(modalSelector) {
  var modal = document.querySelector(modalSelector);
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; //clearInterval(modalTimerId);     
}

function modal(openModalSelector, modalSelector) {
  // Modal window
  var openModalWindow = document.querySelectorAll(openModalSelector),
      modal = document.querySelector(modalSelector); //modalTimerId = setTimeout(openModal, 3000);

  openModalWindow.forEach(function (value) {
    value.addEventListener("click", function () {
      return openModal(modalSelector);
    });
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.code === "Escape" && window.getComputedStyle(modal).display == "block") {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}

var _default = modal;
exports["default"] = _default;