'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RayVertex = function RayVertex(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M2,11H9.17C9.58,9.83 10.69,9 12,9C13.31,9 14.42,9.83 14.83,11H22V13H14.83C14.42,14.17 13.31,15 12,15C10.69,15 9.58,14.17 9.17,13H2V11Z' })
  );
};

RayVertex.displayName = 'RayVertex';


exports.default = RayVertex;
