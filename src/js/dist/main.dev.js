"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _tabs = _interopRequireDefault(require("./modules/tabs"));

var _card = _interopRequireDefault(require("./modules/card"));

var _calc = _interopRequireDefault(require("./modules/calc"));

var _forms = _interopRequireDefault(require("./modules/forms"));

var _modal = _interopRequireWildcard(require("./modules/modal"));

var _slider = _interopRequireDefault(require("./modules/slider"));

var _timer = _interopRequireDefault(require("./modules/timer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener("DOMContentLoaded", function () {
  (0, _tabs["default"])();
  (0, _card["default"])();
  (0, _calc["default"])();
  (0, _forms["default"])(".modal");
  (0, _modal["default"])("button[data-modal]", ".modal");
  (0, _slider["default"])();
  (0, _timer["default"])();
}); //npx json-server src/db.json