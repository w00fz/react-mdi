'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoundedCorner = function RoundedCorner(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M19,19H21V21H19V19M19,17H21V15H19V17M3,13H5V11H3V13M3,17H5V15H3V17M3,9H5V7H3V9M3,5H5V3H3V5M7,5H9V3H7V5M15,21H17V19H15V21M11,21H13V19H11V21M15,21H17V19H15V21M7,21H9V19H7V21M3,21H5V19H3V21M21,8A5,5 0 0,0 16,3H11V5H16A3,3 0 0,1 19,8V13H21V8Z' })
  );
};

RoundedCorner.displayName = 'RoundedCorner';


exports.default = RoundedCorner;
