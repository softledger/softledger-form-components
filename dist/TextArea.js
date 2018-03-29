'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var TextArea = function TextArea(_ref) {var _onChange = _ref.onChange,className = _ref.className,value = _ref.value;return (
		_react2.default.createElement('textarea', { className: 'form-control ' + className,
			onChange: function onChange(e) {return _onChange(e.currentTarget.value);},
			value: value }));};exports.default =



TextArea;