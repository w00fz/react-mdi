'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pot = function Pot(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M19,19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19V13H3V10H21V13H19V19M6,6H8V8H6V6M11,6H13V8H11V6M16,6H18V8H16V6M18,3H20V5H18V3M13,3H15V5H13V3M8,3H10V5H8V3Z' })
  );
};

Pot.displayName = 'Pot';


exports.default = Pot;
