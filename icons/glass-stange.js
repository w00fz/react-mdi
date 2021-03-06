'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlassStange = function GlassStange(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M8,2H16V22H8V2M10,4V7H14V4H10Z' })
  );
};

GlassStange.displayName = 'GlassStange';


exports.default = GlassStange;
