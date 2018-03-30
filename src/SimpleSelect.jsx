'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

/**
 * Simplified wrapper of react-select 
 */
const SimpleSelect = (props) => (
	<Select 
		labelKey={props.labelField || 'label'}
		valueKey={props.valueField || '_id'}
		onChange={props.onChange}
		value={props.value}
		options={props.options}
		backspaceRemoves={true}
	/>
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
	options: PropTypes.array.isRequired
}

SimpleSelect.defaultProps = {
	valueField: '_id',
	labelField: 'label'
}

export default SimpleSelect;