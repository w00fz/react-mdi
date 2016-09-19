'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bowl = function Bowl(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M22,15A7,7 0 0,1 15,22H9A7,7 0 0,1 2,15V12H15.58L20.3,4.44L22,5.5L17.94,12H22V15Z' })
  );
};

Bowl.displayName = 'Bowl';


exports.default = Bowl;
