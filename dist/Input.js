'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _ErrorFormFeedback = require('./ErrorFormFeedback');var _ErrorFormFeedback2 = _interopRequireDefault(_ErrorFormFeedback);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Input = function Input(_ref) {var _onChange = _ref.onChange,type = _ref.type,value = _ref.value,className = _ref.className,errorText = _ref.errorText;return (
		_react2.default.createElement('div', null,
			_react2.default.createElement('input', { className: 'form-control ' + className,
				onChange: function onChange(e) {return _onChange(e.currentTarget.value);},
				type: type,
				value: value || '' }),

			_react2.default.createElement(_ErrorFormFeedback2.default, { errors: errorText })));};



Input.propTypes = {
	onChange: _propTypes2.default.func.isRequired,
	type: _propTypes2.default.string,
	value: _propTypes2.default.any,
	className: _propTypes2.default.string,
	errorText: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.array]) };exports.default =




Input;