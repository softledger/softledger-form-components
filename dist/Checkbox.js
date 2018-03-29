'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactSwitch = require('react-switch');var _reactSwitch2 = _interopRequireDefault(_reactSwitch);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Checkbox = function Checkbox(_ref) {var _onChange = _ref.onChange,value = _ref.value;return (
    _react2.default.createElement(_reactSwitch2.default, {
      onChange: function onChange(e) {return _onChange(e);},
      checked: value,
      className: 'react-switch',
      id: 'normal-switch' }));};



Checkbox.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.bool };exports.default =


Checkbox;