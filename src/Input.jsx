'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import ErrorFormFeedback from './ErrorFormFeedback';

/**
 * Thing wrapper on input tag
 * Displays errors below input
 */
const Input = ({onChange, type, value, className, errorText}) => (
	<div>
		<input className={`form-control ${className}`}
			onChange={e => onChange(e.currentTarget.value)}
			type={type}
			value={value || ''}
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
	 * Errors to display, should be a string or array of strings
	 * @type {[type]}
	 */
	errorText: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	])
}

Input.defaultProps = {
	type: 'text'
}

export default Input;