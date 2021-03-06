'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookVariant = function BookVariant(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M6,4H11V12L8.5,10.5L6,12M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z' })
  );
};

BookVariant.displayName = 'BookVariant';


exports.default = BookVariant;
