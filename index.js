"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Index = _interopRequireDefault(require("./Index.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Animatedlist = function Animatedlist(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1]; // const listItems = items.map((item) => <li key={item.id}>{item.value}</li>)


  var addItem = function addItem() {
    console.log('asdasd19');
    return setItems([].concat(_toConsumableArray(items), [{
      id: items.length,
      value: 'New Item' + items.length,
      "class": 'show'
    }]));
  }; // useEffect(() => {
  //     console.log('before timeout')
  //     if(items.length > 0)
  //         setTimeout(() => {
  //             const newItems = items[items.length - 1].class = 'show'
  //             console.log('inside effect')
  //         }, 10)
  // })


  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("ul", {
    className: "swing"
  }, items.map(function (item) {
    return _react["default"].createElement("li", {
      className: item["class"],
      key: item.id
    }, " ", item.value, " ");
  })), _react["default"].createElement("button", {
    onClick: function onClick() {
      return addItem();
    }
  }, props.buttonText), _react["default"].createElement("p", null, "You clicked ", count, " times"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }));
};

var _default = Animatedlist;
exports["default"] = _default;
