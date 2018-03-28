'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var ZeroPad = function ZeroPad(_ref) {var value = _ref.value,pad = _ref.pad;

	var transform = function transform(v, p) {
		if (!v) return '--';
		if (v.length >= p) return v;
		var zeroes = '0'.repeat(p);
		return (zeroes + v).slice(-1 * p);
	};

	return _react2.default.createElement('span', null, transform(value, pad));
};exports.default =

ZeroPad;