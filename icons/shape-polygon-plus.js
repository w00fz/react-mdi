'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShapePolygonPlus = function ShapePolygonPlus(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z' })
  );
};

ShapePolygonPlus.displayName = 'ShapePolygonPlus';


exports.default = ShapePolygonPlus;
