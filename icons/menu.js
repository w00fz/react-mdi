'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' })
  );
};

Menu.displayName = 'Menu';


exports.default = Menu;
