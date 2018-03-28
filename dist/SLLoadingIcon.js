'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
require('./SLLoadingIcon.scss');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

SLLoadingIcon = function (_React$Component) {_inherits(SLLoadingIcon, _React$Component);function SLLoadingIcon() {_classCallCheck(this, SLLoadingIcon);return _possibleConstructorReturn(this, (SLLoadingIcon.__proto__ || Object.getPrototypeOf(SLLoadingIcon)).apply(this, arguments));}_createClass(SLLoadingIcon, [{ key: 'render', value: function render()

    {
      var style = {
        mixBlendMode: 'multiply' };

      return _react2.default.createElement('div', null,
        _react2.default.createElement('svg', { width: '75', height: '100', viewBox: '-5 -5 35 50', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
          _react2.default.createElement('g', { id: 'logo-softledger', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('path', { d: 'M23.9182748,0 L11.2471096,0 C5.0724313,0 0.0670747826,4.91597516 0.0670747826,10.9803913 C0.0670747826,17.0450124 5.0724313,21.9609876 11.2471096,21.9609876 L23.9182748,21.9609876 L23.9182748,0 Z', id: 'logo-blue', fill: '#52C5D7', style: style }),
            _react2.default.createElement('path', { d: 'M0.067053913,10.9804733 L12.7382191,10.9804733 C18.9128974,10.9804733 23.9182539,15.8964484 23.9182539,21.9608646 C23.9182539,28.0254857 18.9128974,32.9414609 12.7382191,32.9414609 L0.067053913,32.9414609 L0.067053913,10.9804733 Z', id: 'logo-red', fill: '#EC125F', style: style }))));



    } }]);return SLLoadingIcon;}(_react2.default.Component);exports.default = SLLoadingIcon;