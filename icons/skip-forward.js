'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkipForward = function SkipForward(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12' })
  );
};

SkipForward.displayName = 'SkipForward';


exports.default = SkipForward;
