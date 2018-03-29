'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var ErrorFormFeedback = function ErrorFormFeedback(_ref) {var errors = _ref.errors;
	if (errors && errors instanceof Array && errors.length > 0) {
		return (
			_react2.default.createElement('div', { className: 'form-control-feedback' },
				_react2.default.createElement('div', { style: { padding: "0px 2px" } },
					errors.join(','))));


	} else if (errors) {
		return (
			_react2.default.createElement('div', { className: 'form-control-feedback' },
				_react2.default.createElement('div', { style: { padding: "0px 2px" } },
					errors)));



	}
	return _react2.default.createElement('span', null);
};

ErrorFormFeedback.propTypes = {
	errors: _propTypes2.default.oneOfType([
	_propTypes2.default.array,
	_propTypes2.default.string]) };exports.default =



ErrorFormFeedback;