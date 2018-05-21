'use strict';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Thing wrapper on textarea tag
 * Displays errors below input
 */
const TextArea = ({onChange, className, value, disabled}) =>  (
		<textarea 
			className={`form-control ${className}`}
			onChange={e => onChange(e.currentTarget.value)}
			value={value}
			disabled={disabled}
		/>
);

TextArea.propTypes = {
	/**
	 * Callback when updated
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * value of component
	 */
	value: PropTypes.any,
	/**
	 * additional classnames to add to input tag
	 */
	className: PropTypes.string,
	/**
	 * true to disable toggling
	 */
	disabled: PropTypes.bool
}

TextArea.defaultProps = {
	disabled: false
}

export default TextArea;