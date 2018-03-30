'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                           * Thing wrapper on textarea tag
                                                                                                                                                                                           * Displays errors below input
                                                                                                                                                                                           */
var TextArea = function TextArea(_ref) {var _onChange = _ref.onChange,className = _ref.className,value = _ref.value;return (
		_react2.default.createElement('textarea', { className: 'form-control ' + className,
			onChange: function onChange(e) {return _onChange(e.currentTarget.value);},
			value: value }));};



TextArea.propTypes = {
	/**
                        * Callback when updated
                        */
	onChange: _propTypes2.default.func.isRequired,
	/**
                                                 * value of component
                                                 */
	value: _propTypes2.default.any,
	/**
                                  * additional classnames to add to input tag
                                  */
	className: _propTypes2.default.string };exports.default =


TextArea;