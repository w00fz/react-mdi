'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewHeadline = function ViewHeadline(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M4,5V7H21V5M4,11H21V9H4M4,19H21V17H4M4,15H21V13H4V15Z' })
  );
};

ViewHeadline.displayName = 'ViewHeadline';


exports.default = ViewHeadline;
