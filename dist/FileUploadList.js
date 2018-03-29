'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactFileDrop = require('react-file-drop');var _reactFileDrop2 = _interopRequireDefault(_reactFileDrop);
var _reactstrap = require('reactstrap');
var _components = require('@softledger/components');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

FileUploadList = function (_React$Component) {_inherits(FileUploadList, _React$Component);function FileUploadList() {var _ref;var _temp, _this, _ret;_classCallCheck(this, FileUploadList);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileUploadList.__proto__ || Object.getPrototypeOf(FileUploadList)).call.apply(_ref, [this].concat(args))), _this), _this.
		renderTableRows = function (files) {return files.map(function (a, idx) {return (
					_react2.default.createElement('tr', { key: idx },
						_react2.default.createElement('td', null,
							_react2.default.createElement('div', { style: {
										width: (a.progress || 0) + '%',
										whiteSpace: "nowrap",
										backgroundColor: "lightgreen" } },

								a.file.name)),


						_react2.default.createElement('td', null,
							_react2.default.createElement(_components.LoadingButton, {
								iconClass: 'times',
								onClick: function onClick() {return _this.props.onRemove(idx);} }))));});}, _this.





		renderTable = function (files) {
			if (!files || files.length < 1) return;
			return (
				_react2.default.createElement(_reactstrap.Table, null,
					_react2.default.createElement('thead', null,
						_react2.default.createElement('tr', null,
							_react2.default.createElement('th', null, 'Attachments'),
							_react2.default.createElement('th', null))),


					_react2.default.createElement('tbody', null,
						_this.renderTableRows(files))));



		}, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(FileUploadList, [{ key: 'render', value: function render()

		{var _this2 = this;
			return (
				_react2.default.createElement('div', { className: 'file-uploader',
						ref: function ref(dropTarget) {return _this2.dropTarget = dropTarget;} },
					this.props.dropText || "Drag Here to upload",
					_react2.default.createElement(_reactFileDrop2.default, { frame: this.dropTarget,
						onDrop: this.props.onDrop }),

					this.renderTable(this.props.files)));


		} }]);return FileUploadList;}(_react2.default.Component);


FileUploadList.propTypes = {
	//can be a dom element
	dropText: _propTypes2.default.any,
	//list of files to display, can leavae blank to not have table shown
	files: _propTypes2.default.array,
	//handler for file(s) being dropped
	onDrop: _propTypes2.default.func.isRequired,
	//remove file, needed if files is not blank
	onRemove: _propTypes2.default.func };exports.default =


FileUploadList;