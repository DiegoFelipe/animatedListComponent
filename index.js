"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Index = _interopRequireDefault(require("./Index.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Animatedlist = function Animatedlist(props) {
  var handleClick = function handleClick(_) {
    var list = document.getElementById('animated-list-comp');
    var newLI = document.createElement('li');
    newLI.innerHTML = 'A new item';
    list.appendChild(newLI);
    console.log('wowowowo');
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("ul", {
    id: "animated-list-comp",
    className: "swing"
  }), _react["default"].createElement("button", {
    id: "animated-list-component-add-button",
    onClick: handleClick
  }, props.buttonText));
};

var _default = Animatedlist;
exports["default"] = _default;
