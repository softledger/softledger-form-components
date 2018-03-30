'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactSelect = require('react-select');var _reactSelect2 = _interopRequireDefault(_reactSelect);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                   * Simplified wrapper of react-select 
                                                                                                                                                                                                   */
var SimpleSelect = function SimpleSelect(props) {return (
		_react2.default.createElement(_reactSelect2.default, {
			labelKey: props.labelField || 'label',
			valueKey: props.valueField || '_id',
			onChange: props.onChange,
			value: props.value,
			options: props.options,
			backspaceRemoves: true }));};



SimpleSelect.propTypes = {
	/**
                            * callback when option selected
                            */
	onChange: _propTypes2.default.func.isRequired,
	/**
                                                 * object key to use for the value
                                                 */
	valueField: _propTypes2.default.string,
	/**
                                          * object key to use as the label
                                          */
	labelField: _propTypes2.default.string,
	/**
                                          * array of objects to choose from
                                          * should have keys with value of valueField and labelField props
                                          */
	options: _propTypes2.default.array.isRequired };


SimpleSelect.defaultProps = {
	valueField: '_id',
	labelField: 'label' };exports.default =


SimpleSelect;