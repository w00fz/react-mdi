'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewArray = function ViewArray(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z' })
  );
};

ViewArray.displayName = 'ViewArray';


exports.default = ViewArray;
