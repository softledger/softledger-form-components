'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactDatetime = require('react-datetime');var _reactDatetime2 = _interopRequireDefault(_reactDatetime);
var _ErrorFormFeedback = require('./ErrorFormFeedback');var _ErrorFormFeedback2 = _interopRequireDefault(_ErrorFormFeedback);
var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

SLDateTime = function (_React$Component) {_inherits(SLDateTime, _React$Component);function SLDateTime() {_classCallCheck(this, SLDateTime);return _possibleConstructorReturn(this, (SLDateTime.__proto__ || Object.getPrototypeOf(SLDateTime)).apply(this, arguments));}_createClass(SLDateTime, [{ key: 'render', value: function render()

		{
			return (
				_react2.default.createElement('div', null,
					_react2.default.createElement(_reactDatetime2.default, {
						value: this.props.value,
						dateFormat: this.props.dateFormat,
						timeFormat: this.props.timeFormat,
						onChange: this.props.onChange,
						inputProps: _extends({},
						this.props.inputProps, {
							className: "form-control",
							disabled: this.props.disabled }) }),


					_react2.default.createElement(_ErrorFormFeedback2.default, { errors: this.props.errorText })));


		} }]);return SLDateTime;}(_react2.default.Component);



SLDateTime.propTypes = {
	/**
                          * Current date to display
                          * should be a string, Date(), or moment()
                          */
	value: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	/**
                                * callback when date is selected
                                */
	onChange: _propTypes2.default.func.isRequired,
	/**
                                                 * Additional props to add to the input
                                                 */
	inputProps: _propTypes2.default.object,
	/**
                                          * Timezone to use for for display
                                          */
	timezone: _propTypes2.default.string,
	/**
                                        * true to disable toggling
                                        */
	disabled: _propTypes2.default.bool,
	/**
                                      * How to Format the Presented Date
                                      */
	dateFormat: _propTypes2.default.string };


SLDateTime.defaultProps = {
	openLeft: false,
	disabled: false,
	dateFormat: 'MM/DD/YYYY',
	timeFormat: 'HH:mm:ss' };exports.default =


SLDateTime;