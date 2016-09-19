'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flag = function Flag(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z' })
  );
};

Flag.displayName = 'Flag';


exports.default = Flag;
