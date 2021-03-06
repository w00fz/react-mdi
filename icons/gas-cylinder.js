'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GasCylinder = function GasCylinder(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M16,9V14L16,20A2,2 0 0,1 14,22H10A2,2 0 0,1 8,20V14L8,9C8,7.14 9.27,5.57 11,5.13V4H9V2H15V4H13V5.13C14.73,5.57 16,7.14 16,9Z' })
  );
};

GasCylinder.displayName = 'GasCylinder';


exports.default = GasCylinder;
