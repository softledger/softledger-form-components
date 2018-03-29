'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactSelect = require('react-select');var _reactSelect2 = _interopRequireDefault(_reactSelect);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var SimpleSelect = function SimpleSelect(props) {return (
		_react2.default.createElement(_reactSelect2.default, {
			labelKey: props.labelField || 'label',
			valueKey: props.valueField || '_id',
			onChange: props.onChange,
			value: props.value,
			options: props.options,
			backspaceRemoves: true }));};



SimpleSelect.propTypes = {
	onChange: _propTypes2.default.func.isRequired,
	valueField: _propTypes2.default.string,
	labelField: _propTypes2.default.string,
	options: _propTypes2.default.array.isRequired };exports.default =


SimpleSelect;