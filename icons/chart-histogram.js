'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartHistogram = function ChartHistogram(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z' })
  );
};

ChartHistogram.displayName = 'ChartHistogram';


exports.default = ChartHistogram;
