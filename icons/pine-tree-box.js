'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PineTreeBox = function PineTreeBox(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M11,19H13V17H18L14,13H17L13,9H16L12,5L8,9H11L7,13H10L6,17H11V19Z' })
  );
};

PineTreeBox.displayName = 'PineTreeBox';


exports.default = PineTreeBox;
