'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ornament = function Ornament(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M12,1A3,3 0 0,1 15,4V5A1,1 0 0,1 16,6V7.07C18.39,8.45 20,11.04 20,14A8,8 0 0,1 12,22A8,8 0 0,1 4,14C4,11.04 5.61,8.45 8,7.07V6A1,1 0 0,1 9,5V4A3,3 0 0,1 12,1M12,3A1,1 0 0,0 11,4V5H13V4A1,1 0 0,0 12,3M12,8C10.22,8 8.63,8.77 7.53,10H16.47C15.37,8.77 13.78,8 12,8M6.34,16H7.59L6,14.43C6.05,15 6.17,15.5 6.34,16M12.59,16L8.59,12H6.41L10.41,16H12.59M17.66,12H16.41L18,13.57C17.95,13 17.83,12.5 17.66,12M11.41,12L15.41,16H17.59L13.59,12H11.41M12,20C13.78,20 15.37,19.23 16.47,18H7.53C8.63,19.23 10.22,20 12,20Z' })
  );
};

Ornament.displayName = 'Ornament';


exports.default = Ornament;
