'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewColumn = function ViewColumn(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z' })
  );
};

ViewColumn.displayName = 'ViewColumn';


exports.default = ViewColumn;
