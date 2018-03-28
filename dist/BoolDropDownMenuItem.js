'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');
var _reactFontawesome = require('@fortawesome/react-fontawesome');var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var BoolDropDownMenuItem = function BoolDropDownMenuItem(_ref) {var text = _ref.text,value = _ref.value,onToggle = _ref.onToggle;return (
		_react2.default.createElement(_reactstrap.DropdownItem, { onClick: function onClick() {
					console.log("value", value);
					return onToggle(text);
				} },
			_react2.default.createElement(_reactFontawesome2.default, { icon: value ? "times" : "plus" }),
			_react2.default.createElement('span', { style: { paddingLeft: "5px", paddingRight: "5px" } }, '|'),
			text));};



BoolDropDownMenuItem.propTypes = {
	value: _propTypes2.default.bool,
	text: _propTypes2.default.string,
	onToggle: _propTypes2.default.func };exports.default =


BoolDropDownMenuItem;