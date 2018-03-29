'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');


var _components = require('@softledger/components');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var


SLForm = function (_React$Component) {_inherits(SLForm, _React$Component);

	function SLForm(props) {_classCallCheck(this, SLForm);var _this = _possibleConstructorReturn(this, (SLForm.__proto__ || Object.getPrototypeOf(SLForm)).call(this,
		props));_this.







		toggle = function () {
			if (!_this.state.modal && _this.props.onToggle) _this.props.onToggle();
			_this.setState({
				modal: !_this.state.modal });

		};_this.

		submit = function (model) {
			_this.setState({ submitting: true });
			return _this.props.onSubmit(model).
			then(function () {return _this.setState({
					submitting: false,
					modal: false });});

		};_this.

		renderButton = function () {
			if (_this.props.Button) {
				return _this.props.Button(_this.toggle);
			}
			return _react2.default.createElement(_reactstrap.Button, { color: 'primary',
					onClick: _this.toggle },
				_this.props.header);

		};_this.

		renderSubmitButton = function () {
			if (_this.props.submitButton) {
				return _this.props.submitButton(_this.submit, _this.props.formInValid);
			}
			return (
				_react2.default.createElement(_reactstrap.Button, {
						color: 'primary',
						style: { marginRight: "20px" },
						onClick: _this.submit,
						disabled: _this.props.formInValid }, 'Submit'));


		};_this.state = { canSubmit: false, modal: false, submitting: false };return _this;}_createClass(SLForm, [{ key: 'render', value: function render()

		{
			if (this.props.notModal) {
				return _react2.default.createElement('div', null,
					this.props.fields,
					_react2.default.createElement(_reactstrap.Container, null,
						_react2.default.createElement(_reactstrap.Row, null,
							_react2.default.createElement(_reactstrap.Col, null,
								this.state.submitting ?
								_react2.default.createElement('div', { style: { float: "right" } }, _react2.default.createElement(_components.SLLoadingIcon, null)) :
								_react2.default.createElement('div', { style: { float: "right" } },
									this.renderSubmitButton(),

									this.props.onToggle &&
									_react2.default.createElement(_reactstrap.Button, { color: 'secondary',
											onClick: this.toggle }, 'Cancel'))))));








			} else {
				return _react2.default.createElement('div', null,
					this.renderButton(),
					_react2.default.createElement(_reactstrap.Modal, { isOpen: this.state.modal,
							toggle: this.toggle,
							size: this.props.size },
						_react2.default.createElement(_reactstrap.ModalHeader, { toggle: this.toggle },
							this.props.header),

						_react2.default.createElement(_reactstrap.ModalBody, null,
							this.state.modal && this.props.fields),

						_react2.default.createElement(_reactstrap.ModalFooter, null,
							this.state.submitting ?
							_react2.default.createElement(_components.SLLoadingIcon, null) :
							_react2.default.createElement(_reactstrap.Button, { color: 'primary',
									onClick: this.submit,
									disabled: this.props.formInValid }, 'Submit'),


							_react2.default.createElement(_reactstrap.Button, { color: 'secondary',
									onClick: this.toggle }, 'Cancel'))));




			}
		} }]);return SLForm;}(_react2.default.Component);exports.default = SLForm;



SLForm.propTypes = {
	//only required if notModal is false
	header: _propTypes2.default.string,
	onSubmit: _propTypes2.default.func.isRequired,
	fields: _propTypes2.default.object.isRequired,
	Button: _propTypes2.default.func,
	size: _propTypes2.default.string,
	//the form is valid
	formInValid: _propTypes2.default.bool,
	notModal: _propTypes2.default.bool,
	submitButton: _propTypes2.default.func };