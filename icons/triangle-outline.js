'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TriangleOutline = function TriangleOutline(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M12,2L1,21H23M12,6L19.53,19H4.47' })
  );
};

TriangleOutline.displayName = 'TriangleOutline';


exports.default = TriangleOutline;
