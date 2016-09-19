'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayPause = function PlayPause(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5' })
  );
};

PlayPause.displayName = 'PlayPause';


exports.default = PlayPause;
