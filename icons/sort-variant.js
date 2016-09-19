'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortVariant = function SortVariant(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z' })
  );
};

SortVariant.displayName = 'SortVariant';


exports.default = SortVariant;
