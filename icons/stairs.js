'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stairs = function Stairs(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z' })
  );
};

Stairs.displayName = 'Stairs';


exports.default = Stairs;
