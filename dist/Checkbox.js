'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactSwitch = require('react-switch');var _reactSwitch2 = _interopRequireDefault(_reactSwitch);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                   * Checkbox component using react-switch
                                                                                                                                                                                                   */
var Checkbox = function Checkbox(_ref) {var _onChange = _ref.onChange,value = _ref.value,disabled = _ref.disabled;return (
		_react2.default.createElement(_reactSwitch2.default, {
			onChange: function onChange(e) {return _onChange(e);},
			checked: value,
			className: 'react-switch',
			id: 'normal-switch',
			disabled: disabled }));};



Checkbox.propTypes = {
	/**
                        * callback when toggled
                        */
	onChange: _propTypes2.default.func.isRequired,
	/**
                                                 * value of the component
                                                 */
	value: _propTypes2.default.bool,
	/**
                                   * true to disable toggling
                                   */
	disabled: _propTypes2.default.bool };


Checkbox.defaultProps = {
	disabled: false };exports.default =


Checkbox;