'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _reactstrap = require('reactstrap');
var _classnames = require('classnames');var _classnames2 = _interopRequireDefault(_classnames);
require('./CardValue.scss');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var CardValue = function CardValue(_ref) {var big = _ref.big,Header = _ref.Header,Body = _ref.Body,style = _ref.style;
	var renderHeader = function renderHeader(Header) {
		if (Header) {
			return (
				_react2.default.createElement(_reactstrap.CardHeader, null,
					Header));


		}
	};
	return (
		_react2.default.createElement(_reactstrap.Card, {
				className: (0, _classnames2.default)({ 'card-tight': !big }),
				style: style },

			renderHeader(Header),
			_react2.default.createElement(_reactstrap.CardBody, null,
				Body)));



};

CardValue.propTypes = {
	Header: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	Body: _propTypes2.default.oneOfType([
	_propTypes2.default.string,
	_propTypes2.default.object]),

	big: _propTypes2.default.bool,
	style: _propTypes2.default.object };exports.default =


CardValue;