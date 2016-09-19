'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewQuilt = function ViewQuilt(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M10,5V11H21V5M16,18H21V12H16M4,18H9V5H4M10,18H15V12H10V18Z' })
  );
};

ViewQuilt.displayName = 'ViewQuilt';


exports.default = ViewQuilt;
