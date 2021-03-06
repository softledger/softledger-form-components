'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _DayPickerInput = require('react-day-picker/DayPickerInput');var _DayPickerInput2 = _interopRequireDefault(_DayPickerInput);
var _moment = require('react-day-picker/moment');
var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);
var _ErrorFormFeedback = require('./ErrorFormFeedback');var _ErrorFormFeedback2 = _interopRequireDefault(_ErrorFormFeedback);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Date Picker Overlay
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
var OverlayLeft = function OverlayLeft(_ref, openLeft) {var classNames = _ref.classNames,selectedDay = _ref.selectedDay,children = _ref.children,props = _objectWithoutProperties(_ref, ['classNames', 'selectedDay', 'children']);return (
		_react2.default.createElement('div', _extends({
				className: classNames.overlayWrapper,
				style: { marginLeft: openLeft ? "-150px" : "0px" } },
			props),

			_react2.default.createElement('div', { className: classNames.overlay },
				children)));};




OverlayLeft.propTypes = {
	classNames: _propTypes2.default.object.isRequired,
	selectedDay: _propTypes2.default.instanceOf(Date),
	children: _propTypes2.default.node.isRequired };


/**
                                                   * Date Input component
                                                   */var
SLDate = function (_React$Component) {_inherits(SLDate, _React$Component);function SLDate() {var _ref2;var _temp, _this, _ret;_classCallCheck(this, SLDate);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SLDate.__proto__ || Object.getPrototypeOf(SLDate)).call.apply(_ref2, [this].concat(args))), _this), _this.

		onChange = function (d) {
			//stops the date from disapearing on backspace
			if (!d) d = _this.props.value;
			return _this.props.onChange((0, _momentTimezone2.default)(d, _this.props.timezone));
		}, _temp), _possibleConstructorReturn(_this, _ret);} //convert value to passed timezone from browser
	_createClass(SLDate, [{ key: 'render', value: function render()
		{var _this2 = this;
			return (
				_react2.default.createElement('div', null,
					_react2.default.createElement(_DayPickerInput2.default, {
						value: (0, _moment.formatDate)(this.props.value, this.props.format),
						formatDate: _moment.formatDate,
						format: this.props.format,
						parseDate: _moment.parseDate,
						onDayChange: this.onChange,
						overlayComponent: function overlayComponent(props) {return OverlayLeft(props, _this2.props.openLeft);},
						keepFocus: !this.props.openLeft,
						dayPickerProps: {
							todayButton: "Today",
							showOutsideDays: true },

						inputProps: _extends({},
						this.props.inputProps, {
							className: "form-control",
							disabled: this.props.disabled }) }),


					_react2.default.createElement(_ErrorFormFeedback2.default, { errors: this.props.errorText })));


		} }]);return SLDate;}(_react2.default.Component);


SLDate.propTypes = {
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
                                                 * offset to display calendar in pixels
                                                 */
	openLeft: _propTypes2.default.bool,
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
	format: _propTypes2.default.string };


SLDate.defaultProps = {
	openLeft: false,
	disabled: false,
	format: 'MM/DD/YYYY' };exports.default =


SLDate;