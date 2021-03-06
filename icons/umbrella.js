'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Umbrella = function Umbrella(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M12,2A9,9 0 0,0 3,11H11V19A1,1 0 0,1 10,20A1,1 0 0,1 9,19H7A3,3 0 0,0 10,22A3,3 0 0,0 13,19V11H21A9,9 0 0,0 12,2Z' })
  );
};

Umbrella.displayName = 'Umbrella';


exports.default = Umbrella;
