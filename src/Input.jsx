'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import ErrorFormFeedback from './ErrorFormFeedback';

/**
 * Thing wrapper on input tag
 * Displays errors below input
 */
const Input = ({onChange, type, value, className, errorText, disabled, style}) => (
	<div>
		<input 
			className={`form-control ${className}`}
			style={style}
			onChange={e => onChange(e.currentTarget.value)}
			type={type}
			value={value || ''}
			disabled={disabled}
		/>
		<ErrorFormFeedback errors={errorText} />
	</div>
);

Input.propTypes = {
	/**
	 * Callback when updated
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * type of input
	 */
	type: PropTypes.string,
	/**
	 * value of component
	 */
	value: PropTypes.any,
	/**
	 * additional classnames to add to input tag
	 */
	className: PropTypes.string,
	/**
	 * Addition styles
	 */
	style: PropTypes.object,
	/**
	 * true to disable input
	 */
	disabled: PropTypes.bool,
	/**
	 * Errors to display, should be a string or array of strings
	 * @type {[type]}
	 */
	errorText: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	])
}

Input.defaultProps = {
	type: 'text',
	disabled: false
}

export default Input;