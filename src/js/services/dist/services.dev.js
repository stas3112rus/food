"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postData = void 0;

var postData = function postData(url, data) {
  var result;
  return regeneratorRuntime.async(function postData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: data
          }));

        case 2:
          result = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(result.json());

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.postData = postData;