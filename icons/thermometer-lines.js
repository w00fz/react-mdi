'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThermometerLines = function ThermometerLines(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M17,3H21V5H17V3M17,7H21V9H17V7M17,11H21V13H17.75L17,12.1V11M21,15V17H19C19,16.31 18.9,15.63 18.71,15H21M17,17A5,5 0 0,1 12,22A5,5 0 0,1 7,17C7,15.36 7.79,13.91 9,13V5A3,3 0 0,1 12,2A3,3 0 0,1 15,5V13C16.21,13.91 17,15.36 17,17M11,8V14.17C9.83,14.58 9,15.69 9,17A3,3 0 0,0 12,20A3,3 0 0,0 15,17C15,15.69 14.17,14.58 13,14.17V8H11M7,3V5H3V3H7M7,7V9H3V7H7M7,11V12.1L6.25,13H3V11H7M3,15H5.29C5.1,15.63 5,16.31 5,17H3V15Z' })
  );
};

ThermometerLines.displayName = 'ThermometerLines';


exports.default = ThermometerLines;