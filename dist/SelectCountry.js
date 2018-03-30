'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _countryList = require('./util/countryList.js');var _countryList2 = _interopRequireDefault(_countryList);
var _reactSelect = require('react-select');var _reactSelect2 = _interopRequireDefault(_reactSelect);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Select a country code in a dropdown
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */var
SelectCountry = function (_React$Component) {_inherits(SelectCountry, _React$Component);
  function SelectCountry(props) {_classCallCheck(this, SelectCountry);var _this = _possibleConstructorReturn(this, (SelectCountry.__proto__ || Object.getPrototypeOf(SelectCountry)).call(this,
    props));_this.





    changeValue = function (value) {
      _this.props.onChange(value._id);
      _this.setState({
        value: value });

    };_this.state = { value: props.value };return _this;}_createClass(SelectCountry, [{ key: 'render', value: function render()

    {
      return (
        _react2.default.createElement(_reactSelect2.default, {
          value: this.state.value,
          onChange: this.changeValue,
          options: _countryList2.default,
          labelKey: 'name',
          valueKey: '_id' }));


    } }]);return SelectCountry;}(_react2.default.Component);


SelectCountry.propTypes = {
  /**
                             * callback when a country is selected
                             */
  onChange: _propTypes2.default.func.isRequired,
  /**
                                                  * current selected country
                                                  */
  value: _propTypes2.default.object };exports.default =


SelectCountry;