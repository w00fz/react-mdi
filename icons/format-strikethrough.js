'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormatStrikethrough = function FormatStrikethrough(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z' })
  );
};

FormatStrikethrough.displayName = 'FormatStrikethrough';


exports.default = FormatStrikethrough;
