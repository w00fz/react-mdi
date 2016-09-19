'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WindowMaximize = function WindowMaximize(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M4,4H20V20H4V4M6,8V18H18V8H6Z' })
  );
};

WindowMaximize.displayName = 'WindowMaximize';


exports.default = WindowMaximize;
