'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panorama = function Panorama(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M8.5,12.5L11,15.5L14.5,11L19,17H5M23,18V6A2,2 0 0,0 21,4H3A2,2 0 0,0 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18Z' })
  );
};

Panorama.displayName = 'Panorama';


exports.default = Panorama;
