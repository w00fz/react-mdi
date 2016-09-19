'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkerboard = function Checkerboard(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M3,3H21V21H3V3M5,5V12H12V19H19V12H12V5H5Z' })
  );
};

Checkerboard.displayName = 'Checkerboard';


exports.default = Checkerboard;
