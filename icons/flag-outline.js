'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlagOutline = function FlagOutline(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M14.5,6H20V16H13L12.5,14H7V21H5V4H14L14.5,6M7,6V12H13L13.5,14H18V8H14L13.5,6H7Z' })
  );
};

FlagOutline.displayName = 'FlagOutline';


exports.default = FlagOutline;
