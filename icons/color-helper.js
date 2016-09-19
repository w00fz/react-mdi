'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorHelper = function ColorHelper(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M0,24H24V20H0V24Z' })
  );
};

ColorHelper.displayName = 'ColorHelper';


exports.default = ColorHelper;
