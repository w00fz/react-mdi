'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Piano = function Piano(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M4,3H20A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M4,5V19H8V13H6.75V5H4M9,19H15V13H13.75V5H10.25V13H9V19M16,19H20V5H17.25V13H16V19Z' })
  );
};

Piano.displayName = 'Piano';


exports.default = Piano;
