'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');
var _rcTooltip = require('rc-tooltip');var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
require('rc-tooltip/assets/bootstrap.css');
var _reactFontawesome = require('@fortawesome/react-fontawesome');var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

SLFormGroup = function (_React$Component) {_inherits(SLFormGroup, _React$Component);
	function SLFormGroup(props) {_classCallCheck(this, SLFormGroup);var _this = _possibleConstructorReturn(this, (SLFormGroup.__proto__ || Object.getPrototypeOf(SLFormGroup)).call(this,
		props));_this.



		renderLabel = function () {
			if (_this.props.hideLabel) return;
			if (_this.props.helpText) {
				return (
					_react2.default.createElement(_reactstrap.Label, null,
						_this.props.label,
						_react2.default.createElement(_rcTooltip2.default, {
								placement: 'top',
								overlay: _this.props.helpText },

							_react2.default.createElement(_reactFontawesome2.default, { icon: 'info-circle', id: 'tooltip' }))));



			} else {
				return _react2.default.createElement(_reactstrap.Label, null, _this.props.label);
			}
		};_this.state = {};return _this;}_createClass(SLFormGroup, [{ key: 'render', value: function render()

		{var _props =




			this.props,check = _props.check,input = _props.input,label = _props.label;

			if (check) {
				return (
					_react2.default.createElement(_reactstrap.FormGroup, { check: true,
							className: 'form-group',
							style: {
								paddingTop: "2rem" } },

						_react2.default.createElement(_reactstrap.Label, { check: true },
							this.props.input,
							_react2.default.createElement('span', null, label))));



			} else {
				return (
					_react2.default.createElement(_reactstrap.FormGroup, null,
						this.renderLabel(),
						this.props.input));


			}
		} }]);return SLFormGroup;}(_react2.default.Component);exports.default = SLFormGroup;



SLFormGroup.propTypes = {
	label: _propTypes2.default.string,
	helpText: _propTypes2.default.string,
	input: _propTypes2.default.object,
	hideLabel: _propTypes2.default.bool,
	//true if this is a checkbox
	check: _propTypes2.default.bool };