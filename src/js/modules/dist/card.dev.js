"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function card() {
  // CARDS
  var MenuItem =
  /*#__PURE__*/
  function () {
    function MenuItem(imgUrl, alt, subtitle, descr, price, parentSelector) {
      _classCallCheck(this, MenuItem);

      this.imgUrl = imgUrl;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes;
      this.changeToUAH();
    }

    _createClass(MenuItem, [{
      key: "changeToUAH",
      value: function changeToUAH() {
        this.price = this.price * this.transfer;
      }
    }, {
      key: "render",
      value: function render() {
        var element = document.createElement("div");

        if (this.classes.length == 0) {
          this.classes = ["menu__item"];
        }

        this.classes.forEach(function (className) {
          return element.classList.add(className);
        });
        element.innerHTML = "\n                    <img src=".concat(this.imgUrl, " alt=").concat(this.alt, ">\n                    <h3 class=\"menu__item-subtitle\">").concat(this.subtitle, "\"</h3>\n                    <div class=\"menu__item-descr\">").concat(this.descr, "</div>\n                    <div class=\"menu__item-divider\"></div>\n                    <div class=\"menu__item-price\">\n                        <div class=\"menu__item-cost\">\u0426\u0435\u043D\u0430:</div>\n                        <div class=\"menu__item-total\"><span>").concat(this.price, "</span> \u0433\u0440\u043D/\u0434\u0435\u043D\u044C</div>\n                    ");
        this.parent.append(element);
      }
    }]);

    return MenuItem;
  }();

  var getResources = function getResources(url, data) {
    var result;
    return regeneratorRuntime.async(function getResources$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch(url));

          case 2:
            result = _context.sent;

            if (result.ok) {
              _context.next = 5;
              break;
            }

            throw new Error("Could not fetch ".concat(url, ", status: ").concat(result.status));

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(result.json());

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  }; // getResources("http://localhost:3000/menu")
  // .then(data => {
  //     data.forEach(({img, altimg, title, descr, price}) =>{
  //         new MenuItem(img, altimg, title, descr, price, ".menu .container")
  //         .render();
  //     });
  // });


  axios.get("http://localhost:3000/menu").then(function (data) {
    data.data.forEach(function (_ref) {
      var img = _ref.img,
          altimg = _ref.altimg,
          title = _ref.title,
          descr = _ref.descr,
          price = _ref.price;
      new MenuItem(img, altimg, title, descr, price, ".menu .container").render();
    });
  });
}

var _default = card;
exports["default"] = _default;