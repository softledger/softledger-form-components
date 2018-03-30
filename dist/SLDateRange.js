'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');
var _reactDates = require('react-dates');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Input which allows user to pick a range of dates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * wrapper on react-dates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var
SLDateRange = function (_React$Component) {_inherits(SLDateRange, _React$Component);
	function SLDateRange(props) {_classCallCheck(this, SLDateRange);var _this = _possibleConstructorReturn(this, (SLDateRange.__proto__ || Object.getPrototypeOf(SLDateRange)).call(this,
		props));_this.



		toggle = function () {return _this.setState({ showDatePicker: !_this.state.showDatePicker });};_this.state = {};return _this;}_createClass(SLDateRange, [{ key: 'render', value: function render()

		{var _this2 = this;var
			showDatePicker = this.state.showDatePicker;
			return (
				_react2.default.createElement('div', null,
					_react2.default.createElement(_reactstrap.Button, {
							style: {
								padding: ".25rem .75rem" },

							id: this.props.id,
							onClick: this.toggle },

						this.props.buttonText || 'Filter'),

					_react2.default.createElement(_reactstrap.Popover, {
							placement: 'top',
							isOpen: showDatePicker,
							target: this.props.id,
							toggle: this.toggle },

						_react2.default.createElement(_reactstrap.PopoverBody, null,
							_react2.default.createElement(_reactDates.DateRangePicker, {
								small: true,
								noBorder: true,
								showClearDates: true,
								startDate: this.props.startDate,
								startDateId: 'startDateId',
								endDateId: 'endDateId',
								isOutsideRange: function isOutsideRange() {return false;},
								endDate: this.props.endDate,
								onDatesChange: this.props.onChange,
								focusedInput: this.state.focusedInput,
								onFocusChange: function onFocusChange(focusedInput) {return _this2.setState({ focusedInput: focusedInput });} })))));





		} }]);return SLDateRange;}(_react2.default.Component);


SLDateRange.propTypes = {
	/**
                           * Unique ID required
                           */
	id: _propTypes2.default.string.isRequired,
	/**
                                             * Text for button
                                             */
	buttonText: _propTypes2.default.string,
	/**
                                          * value to use as startDate
                                          */
	startDate: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	/**
                                * value to use as end date
                                */
	endDate: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	/**
                                * callback when start or end date changes
                                */
	onChange: _propTypes2.default.func.isRequired };


SLDateRange.defaultProps = {
	buttonText: 'Filter' };exports.default =


SLDateRange;