'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lamp = function Lamp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z' })
  );
};

Lamp.displayName = 'Lamp';


exports.default = Lamp;
