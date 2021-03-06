'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CubeUnfolded = function CubeUnfolded(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M6,9V4H13V9H23V16H18V21H11V16H1V9H6M16,16H13V19H16V16M8,9H11V6H8V9M6,14V11H3V14H6M18,11V14H21V11H18M13,11V14H16V11H13M8,11V14H11V11H8Z' })
  );
};

CubeUnfolded.displayName = 'CubeUnfolded';


exports.default = CubeUnfolded;
