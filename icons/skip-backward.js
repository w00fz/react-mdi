'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkipBackward = function SkipBackward(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12' })
  );
};

SkipBackward.displayName = 'SkipBackward';


exports.default = SkipBackward;
