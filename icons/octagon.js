'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Octagon = function Octagon(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27' })
  );
};

Octagon.displayName = 'Octagon';


exports.default = Octagon;
