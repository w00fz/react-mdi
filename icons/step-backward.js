'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepBackward = function StepBackward(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M19,5V19H16V5M14,5V19L3,12' })
  );
};

StepBackward.displayName = 'StepBackward';


exports.default = StepBackward;
