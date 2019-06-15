"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Index = _interopRequireDefault(require("./Index.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var animatedlist = function animatedlist(props) {
  handleClick = function handleClick(_) {
    var list = document.getElementById('animated-list-comp');
    var newLI = document.createElement('li');
    newLI.innerHTML = 'A new item';
    list.appendChild(newLI);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("ul", {
    id: "animated-list-comp",
    "class": "swing"
  }), _react["default"].createElement("button", {
    id: "animated-list-component-add-button",
    onChange: function onChange() {
      return handleClick();
    }
  }, props.button - text));
};

var _default = animatedlist;
exports["default"] = _default;
