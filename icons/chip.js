'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chip = function Chip(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z' })
  );
};

Chip.displayName = 'Chip';


exports.default = Chip;
