'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Signal = function Signal(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M3,21H6V18H3M8,21H11V14H8M13,21H16V9H13M18,21H21V3H18V21Z' })
  );
};

Signal.displayName = 'Signal';


exports.default = Signal;
