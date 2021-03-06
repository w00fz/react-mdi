'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeBrackets = function CodeBrackets(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z' })
  );
};

CodeBrackets.displayName = 'CodeBrackets';


exports.default = CodeBrackets;
