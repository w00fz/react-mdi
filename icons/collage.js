'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collage = function Collage(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H11V3M13,3V11H21V5C21,3.89 20.11,3 19,3M13,13V21H19C20.11,21 21,20.11 21,19V13' })
  );
};

Collage.displayName = 'Collage';


exports.default = Collage;
