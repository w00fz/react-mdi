'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlusOne = function PlusOne(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M10,8V12H14V14H10V18H8V14H4V12H8V8H10M14.5,6.08L19,5V18H17V7.4L14.5,7.9V6.08Z' })
  );
};

PlusOne.displayName = 'PlusOne';


exports.default = PlusOne;
