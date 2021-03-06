'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VectorPoint = function VectorPoint(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M12,20L7,22L12,11L17,22L12,20M8,2H16V5H22V7H16V10H8V7H2V5H8V2M10,4V8H14V4H10Z' })
  );
};

VectorPoint.displayName = 'VectorPoint';


exports.default = VectorPoint;
