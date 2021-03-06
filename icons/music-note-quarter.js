'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MusicNoteQuarter = function MusicNoteQuarter(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', { d: 'M12,3H15V15H19V18H14.72C14.1,19.74 12.46,21 10.5,21C8.54,21 6.9,19.74 6.28,18H3V15H6.28C6.9,13.26 8.54,12 10.5,12C11,12 11.5,12.09 12,12.26V3Z' })
  );
};

MusicNoteQuarter.displayName = 'MusicNoteQuarter';


exports.default = MusicNoteQuarter;
