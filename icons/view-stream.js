'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewStream = function ViewStream(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M4,5V11H21V5M4,18H21V12H4V18Z' })
  );
};

ViewStream.displayName = 'ViewStream';


exports.default = ViewStream;
