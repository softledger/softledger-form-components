'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import ErrorFormFeedback from './ErrorFormFeedback';

/**
 * Simplified wrapper of react-select 
 */
const SimpleSelect = (props) => (
	<div>
		<Select 
			labelKey={props.labelField || 'label'}
			valueKey={props.valueField || '_id'}
			onChange={props.onChange}
			value={props.value}
			options={props.options}
			backspaceRemoves={true}
			disabled={props.disabled}
		/>
		<ErrorFormFeedback errors={props.errorText} />
	</div>
);

SimpleSelect.propTypes = {
	/**
	 * callback when option selected
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * object key to use for the value
	 */
	valueField: PropTypes.string,
	/**
	 * object key to use as the label
	 */
	labelField: PropTypes.string,
	/**
	 * array of objects to choose from
	 * should have keys with value of valueField and labelField props
	 */
	options: PropTypes.array.isRequired,
	/**
	 * true to disable toggling
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

SimpleSelect.defaultProps = {
	valueField: '_id',
	labelField: 'label', 
	disabled: false
}

export default SimpleSelect;