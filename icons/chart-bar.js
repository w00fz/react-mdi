'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartBar = function ChartBar(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z' })
  );
};

ChartBar.displayName = 'ChartBar';


exports.default = ChartBar;
