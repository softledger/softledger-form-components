'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _rcTooltip = require('rc-tooltip');var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
require('rc-tooltip/assets/bootstrap.css');
var _reactFontawesome = require('@fortawesome/react-fontawesome');var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

LoadingButton = function (_React$Component) {_inherits(LoadingButton, _React$Component);
	function LoadingButton(props) {_classCallCheck(this, LoadingButton);var _this = _possibleConstructorReturn(this, (LoadingButton.__proto__ || Object.getPrototypeOf(LoadingButton)).call(this,
		props));_this.





		handleClick = function (e) {
			if (_this.props.notPromise) {
				_this.props.onClick();
			} else {
				_this.setState({ loading: true });
				_this.props.onClick().
				then(function () {return _this.setState({
						loading: false });});

			}
		};_this.

		renderButtonText = function () {
			//iconClass takes preference
			if (_this.props.iconClass) {
				return _react2.default.createElement(_reactFontawesome2.default, { icon: _this.props.iconClass });
			} else {
				return _this.props.buttonText;
			}
		};_this.

		renderButton = function (buttonClass) {return (
				_react2.default.createElement('button', {
						className: 'btn ' + buttonClass,
						style: _extends({
							padding: "5px 8px" },
						_this.props.style),

						onClick: _this.handleClick,
						disabled: _this.props.disabled },

					_this.renderButtonText()));};_this.



		renderButtonWithToolTip = function (buttonClass) {return (
				_react2.default.createElement(_rcTooltip2.default, {
						placement: _this.props.toolTipPlacement || 'top',
						overlay: _this.props.toolTip },

					_this.renderButton(buttonClass)));};_this.state = { loading: false };return _this;}_createClass(LoadingButton, [{ key: 'render', value: function render()



		{
			var buttonClass = this.props.buttonClass ? this.props.buttonClass : 'btn-primary';

			return this.state.loading ?
			_react2.default.createElement('img', { style: {
					width: "40px" },

				src: 'https://s3.amazonaws.com/sl-ui-assets/images/spinner.gif' }) :


			_react2.default.createElement('div', null,

				this.props.toolTip ?
				this.renderButtonWithToolTip(buttonClass) :
				this.renderButton(buttonClass));



		} }]);return LoadingButton;}(_react2.default.Component);exports.default = LoadingButton;


LoadingButton.propTypes = {
	onClick: _propTypes2.default.func.isRequired,
	iconClass: _propTypes2.default.string,
	buttonClass: _propTypes2.default.string,
	disabled: _propTypes2.default.bool,
	buttonText: _propTypes2.default.string,
	toolTip: _propTypes2.default.string,
	toolTipPlacement: _propTypes2.default.string,
	notPromise: _propTypes2.default.bool };