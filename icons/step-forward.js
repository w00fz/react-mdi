'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepForward = function StepForward(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M5,5V19H8V5M10,5V19L21,12' })
  );
};

StepForward.displayName = 'StepForward';


exports.default = StepForward;
