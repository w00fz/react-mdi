'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BorderOutside = function BorderOutside(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M9,11H7V13H9M13,15H11V17H13M19,19H5V5H19M3,21H21V3H3M17,11H15V13H17M13,11H11V13H13M13,7H11V9H13V7Z' })
  );
};

BorderOutside.displayName = 'BorderOutside';


exports.default = BorderOutside;
