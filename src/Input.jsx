'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import ErrorFormFeedback from './ErrorFormFeedback';

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
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	value: PropTypes.any,
	className: PropTypes.string,
	errorText: PropTypes.string
}


export default Input;