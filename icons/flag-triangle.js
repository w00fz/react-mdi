'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlagTriangle = function FlagTriangle(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z' })
  );
};

FlagTriangle.displayName = 'FlagTriangle';


exports.default = FlagTriangle;
