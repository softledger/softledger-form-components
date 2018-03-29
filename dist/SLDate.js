'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _DayPickerInput = require('react-day-picker/DayPickerInput');var _DayPickerInput2 = _interopRequireDefault(_DayPickerInput);
var _moment = require('react-day-picker/moment');
var _moment2 = require('moment');var _moment3 = _interopRequireDefault(_moment2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var SLDate = function SLDate(props) {
	//set system timezone here
	var onChange = function onChange(d) {return onChange((0, _moment3.default)(d).utcOffset(props.imezone));};

	var openLeft = function openLeft(_ref) {var classNames = _ref.classNames,selectedDay = _ref.selectedDay,children = _ref.children;return (
			_react2.default.createElement('div', {
					className: classNames.overlayWrapper,
					style: { marginLeft: props.openLeft } },
				_react2.default.createElement('div', { className: classNames.overlay },
					children)));};




	return (
		_react2.default.createElement(_DayPickerInput2.default, {
			value: (0, _moment.formatDate)(props.value),
			formatDate: _moment.formatDate,
			parseDate: _moment.parseDate,
			onDayChange: props.onChange,
			overlayComponent: props.openLeft && openLeft,
			dayPickerProps: {
				todayButton: "Today",
				showOutsideDays: true },

			inputProps: _extends({},
			props.inputProps, {
				className: "form-control" }) }));


};

SLDate.propTypes = {
	//date or string or moment
	value: _propTypes2.default.any,
	onChange: _propTypes2.default.func.isRequired,
	openLeft: _propTypes2.default.number,
	inputProps: _propTypes2.default.object,
	timezone: _propTypes2.default.string };exports.default =


SLDate;