'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _ErrorFormFeedback = require('./ErrorFormFeedback');var _ErrorFormFeedback2 = _interopRequireDefault(_ErrorFormFeedback);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                            * Thing wrapper on input tag
                                                                                                                                                                                                                            * Displays errors below input
                                                                                                                                                                                                                            */
var Input = function Input(_ref) {var _onChange = _ref.onChange,type = _ref.type,value = _ref.value,className = _ref.className,errorText = _ref.errorText,disabled = _ref.disabled;return (
		_react2.default.createElement('div', null,
			_react2.default.createElement('input', { className: 'form-control ' + className,
				onChange: function onChange(e) {return _onChange(e.currentTarget.value);},
				type: type,
				value: value || '',
				disabled: disabled }),

			_react2.default.createElement(_ErrorFormFeedback2.default, { errors: errorText })));};



Input.propTypes = {
	/**
                     * Callback when updated
                     */
	onChange: _propTypes2.default.func.isRequired,
	/**
                                                 * type of input
                                                 */
	type: _propTypes2.default.string,
	/**
                                    * value of component
                                    */
	value: _propTypes2.default.any,
	/**
                                  * additional classnames to add to input tag
                                  */
	className: _propTypes2.default.string,
	/**
                                         * true to disable input
                                         */
	disabled: _propTypes2.default.bool,
	/**
                                      * Errors to display, should be a string or array of strings
                                      * @type {[type]}
                                      */
	errorText: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.array]) };



Input.defaultProps = {
	type: 'text',
	disabled: false };exports.default =


Input;