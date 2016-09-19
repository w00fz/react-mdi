'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pi = function Pi(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M4,5V7H6V19H8V7H14V16A3,3 0 0,0 17,19A3,3 0 0,0 20,16H18A1,1 0 0,1 17,17A1,1 0 0,1 16,16V7H18V5' })
  );
};

Pi.displayName = 'Pi';


exports.default = Pi;
