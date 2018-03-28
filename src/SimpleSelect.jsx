'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

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
	onChange: PropTypes.func.isRequired,
	valueField: PropTypes.string,
	labelField: PropTypes.string,
	options: PropTypes.array.isRequired
}

export default SimpleSelect;