'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkipPreviousCircle = function SkipPreviousCircle(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8H10V16H8M16,8V16L11,12' })
  );
};

SkipPreviousCircle.displayName = 'SkipPreviousCircle';


exports.default = SkipPreviousCircle;
